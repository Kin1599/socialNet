import psycopg2
from app.models import UserDto
from passlib.hash import pbkdf2_sha256

def create_new_user(login, name, surname, email, password):
    conn = psycopg2.connect(dbname="social_net", user="postgres", password="qwerty", host="127.0.0.1")
    cur = conn.cursor()

    cur.execute("SELECT * FROM users WHERE login=%s",
                (login,))
    if cur.rowcount:
        return {"error": "Login already exists"}

    cur.execute("SELECT * FROM users WHERE email=%s",
                (email,))
    if cur.rowcount:
        return {"error": "Email already exists"}

    pass_hash = pbkdf2_sha256.hash(password)
    cur.execute(query="""INSERT INTO users(login, name, surname, email, passhash) VALUES(%s, %s, %s, %s, %s)
                RETURNING id, login, name, surname, email, passhash;""",
                vars=(login, name, surname, email, pass_hash))
    
    line = cur.fetchone()
    print(line)
    user = UserDto(id = line[0], name=line[1], surname=line[2], email=line[3],
                   login=line[4], pass_hash=line[5])

    conn.commit()
    cur.close()

    return user


def user_login(login, password) -> UserDto():
    conn = psycopg2.connect(dbname="social_net", user="postgres", password="qwerty", host="127.0.0.1")
    cur = conn.cursor()

    cur.execute(query="SELECT * FROM users WHERE login = %s",
                vars=(login,))
    line = cur.fetchone()

    if not cur.rowcount:
        cur.close()
        return UserDto()
    if not pbkdf2_sha256.verify(password, line[-1]):
        cur.close()
        return UserDto()

    user = UserDto(id = line[0], name=line[1], surname=line[2], email=line[3],
                   login=line[4], pass_hash=line[5])
    cur.close()
    return user
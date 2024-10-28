import numpy as np
import scipy.linalg as la

# 1. Построение плохо обусловленной матрицы A размером 8x8
n = 8
A = np.zeros((n, n))
for i in range(n):
    A[i, i] = 1 / (i + 1)
    if i < n - 1:
        A[i, i + 1] = i + 1

# 2. Вычисление коэффициента обусловленности матрицы A
cond_A = np.linalg.cond(A)
print("Коэффициент обусловленности матрицы A:", cond_A)

# 3. Вектор b путём умножения матрицы A на вектор x*
x_star = np.arange(1, n + 1)
b = A @ x_star
print("Вектор b:", b)

# 4. Сформирование возмущенной правой части b̃
delta_b = np.random.uniform(-1e-8, 1e-8, n)
b_tilde = b + delta_b
print("Возмущённый вектор b̃:", b_tilde)

# 5. Абсолютная и относительная нормы возмущения δb и εb
norm_delta_b = np.linalg.norm(delta_b)
norm_b = np.linalg.norm(b)
eps_b = norm_delta_b / norm_b
print("Абсолютная норма возмущения ||δb||:", norm_delta_b)
print("Относительная норма возмущения εb:", eps_b)

# 6. Решение возмущённой системы методом Гаусса с выбором ведущего элемента
def gauss_with_pivot(A, b):
    """Реализация метода Гаусса с выбором ведущего элемента по столбцу"""
    n = len(b)
    A = A.astype(float)
    b = b.astype(float)
    for k in range(n):
        # Выбор ведущего элемента
        max_row = np.argmax(np.abs(A[k:, k])) + k
        if k != max_row:
            A[[k, max_row]] = A[[max_row, k]]
            b[[k, max_row]] = b[[max_row, k]]
        # Прямой ход
        for i in range(k + 1, n):
            factor = A[i, k] / A[k, k]
            A[i, k:] -= factor * A[k, k:]
            b[i] -= factor * b[k]
    # Обратный ход
    x = np.zeros(n)
    for i in range(n - 1, -1, -1):
        x[i] = (b[i] - np.dot(A[i, i + 1:], x[i + 1:])) / A[i, i]
    return x

x_tilde = gauss_with_pivot(A.copy(), b_tilde)
print("Решение x̃ возмущённой системы:", x_tilde)

# Невязка для найденного решения и норма невязки
r = A @ x_tilde - b
norm_r = np.linalg.norm(r)
print("Невязка r:", r)
print("Норма невязки ||r||:", norm_r)

# 7. Возмущение решения δx и нормы возмущения решения
delta_x = x_star - x_tilde
norm_delta_x = np.linalg.norm(delta_x)
eps_x = norm_delta_x / np.linalg.norm(x_star)
print("Абсолютная норма возмущения решения ||δx||:", norm_delta_x)
print("Относительная норма возмущения решения εx:", eps_x)

# 8. Сравнение коэффициента обусловленности с отношением норм возмущения εx / εb
ratio = eps_x / eps_b
print("Отношение норм возмущения εx / εb:", ratio)
print("Коэффициент обусловленности матрицы A:", cond_A)

# 9. Алгоритм регуляризации методом Тихонова
def tikhonov_regularization(A, b, alpha=1e-4):
    """Решение СЛАУ с помощью регуляризации Тихонова"""
    I = np.identity(A.shape[0])
    A_tikh = A.T @ A + alpha * I
    b_tikh = A.T @ b
    return np.linalg.solve(A_tikh, b_tikh)

# 10. Численное решение СЛАУ x¯ методом регуляризации
x_reg = tikhonov_regularization(A, b)
print("Решение x¯ методом регуляризации:", x_reg)

# Сравнение x¯ с точным решением x* и решением x̃ возмущённой системы
print("Разница между x* и x¯:", np.linalg.norm(x_star - x_reg))
print("Разница между x̃ и x¯:", np.linalg.norm(x_tilde - x_reg))

# 11. Сравнение решений методов регуляризации и Гаусса
print("Решение методом Гаусса x̃:", x_tilde)
print("Решение методом регуляризации x¯:", x_reg)

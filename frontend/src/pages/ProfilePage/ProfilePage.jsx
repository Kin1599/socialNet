import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cl from './ProfilePage.module.scss'
import SideBar from '../../widgets/SideBar/SideBar'
import SideProfileInfo from '../../widgets/SideProfileInfo/SideProfileInfo'

//* Icons
import arrow from '../../shared/assets/icons/arrow.svg'
import location from '../../shared/assets/icons/location.svg'
import link from '../../shared/assets/icons/link.svg'
import balloon from '../../shared/assets/icons/balloon.svg'
import calendar from '../../shared/assets/icons/calendar.svg'
import banner from '../../shared/assets/mocks/banner.jpg'
import avatar from '../../shared/assets/mocks/avatar1.JPG'
import anon from '../../shared/assets/mocks/anon.jpg'

//* Mocks
import gallery1 from '../../shared/assets/mocks/gallery1.jpg'
import gallery2 from '../../shared/assets/mocks/gallery2.png'
import gallery3 from '../../shared/assets/mocks/gallery3.jpg'
import gallery4 from '../../shared/assets/mocks/gallery4.jpg'
import gallery5 from '../../shared/assets/mocks/gallery5.png'
import gallery6 from '../../shared/assets/mocks/gallery6.jpg'
import user1 from '../../shared/assets/mocks/user1.jpg'


function ProfilePage() {

  const [photos] = useState([
    {img: gallery1, alt: "Котик"},
    {img: gallery2, alt: "Лента"},
    {img: gallery3, alt: "Моя фото"},
    {img: gallery4, alt: "Замок"},
    {img: gallery5, alt: "Тетрадь"},
    {img: gallery6, alt: "Кот курящий"},
  ])
  
  const [users] = useState([
    {avatar: user1, username: "Ilya Grinenko", nickname: "@gpihfdsfjpok"},
    {avatar: anon, username: "Shuhratbek", nickname: "@mrshukhsrat"},
  ])

  const [trends] = useState([
    {topic: "Russia", title: "Revolution", posts: "50.4K"},
    {topic: "Russia", title: "IT", posts: "1.4M"},
    {topic: "Russia", title: "ISAD", posts: "1.4K"},
  ])

  return (
    <div className={cl.profilePage}>
      <div className={cl.profilePage__sidebar}>
        <SideBar/>
      </div>
      <div className={cl.profilePage__content}>
        <div className={cl.profilePage__header}>
          <Link to='/'><img src={arrow} alt="back" /></Link>
          <div className={cl.profilePage__stats}>
            <div className={cl.stats__name}>Dmitry Konoplyannikov</div>
            <div className={cl.stats__posts}>1,070 tweets</div>
          </div>
        </div>
        <div className={cl.profilePage__banner}>
          <img src={banner} alt="banner" />
        </div>
        <div className={cl.profilePage__info}>
          <img src={avatar} alt="avatar" className={cl.info__avatar}/>
          <div className={cl.info__details}>
            <div className={cl.details__name}>Dmitry Konoplyannikov</div>
            <div className={cl.details__nickname}>@Kin1599</div>
          </div>
          <div className={cl.info__description}>UX&UI designer at @abutechuz</div>
          <div className={cl.info__extra}>
            <div className={cl.extra__details}>
              <img src={location} alt="address icon" className={cl.extra__icon} />
              <div className={cl.extra__text}>Moscow, Russia</div>
            </div>
            <div className={cl.extra__details}>
              <img src={link} alt="link icon" className={cl.extra__icon}/>
              <div className={cl.extra__text}><a href="https://t.me/Kin1599">t.me/Kin1599</a></div>
            </div>
            <div className={cl.extra__details}>
              <img src={balloon} alt="birthday icon" className={cl.extra__icon}/>
              <div className={cl.extra__text}>Born July 15, 2005</div>
            </div>
            <div className={cl.extra__details}>
              <img src={calendar} alt="calendar icon" className={cl.extra__icon}/>
              <div className={cl.extra__text}>Joined October 2024</div>
            </div>
          </div>
          <div className={cl.info__stats}>
            <div className={cl.stats__text}><span>67</span> Following</div>
            <div className={cl.stats__text}><span>47</span> Followers</div>
          </div>
        </div>
      </div>
      <div className={cl.profilePage__extra}>
        <SideProfileInfo galleryItems={photos} suggestionItems={users} trendsItems={trends}/>
      </div>
    </div>
  )
}

export default ProfilePage
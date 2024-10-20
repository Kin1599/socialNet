import React from 'react'
import cl from './SideBar.module.scss'
import {Link} from 'react-router-dom'

//* MODULES
import SearchInput from '../../shared/modules/SearchInput/SearchInput'
import SideItem from '../../shared/modules/SideItem/SideItem'

//* ICONS
import logo from '../../shared/assets/icons/logo.svg'
import logoText from '../../shared/assets/icons/logoText.svg'
import home from '../../shared/assets/icons/home.svg'
import lists from '../../shared/assets/icons/lists.svg'
import friends from '../../shared/assets/icons/friends.svg'
import box from '../../shared/assets/icons/box.svg'
import card from '../../shared/assets/icons/card.svg'
import settings from '../../shared/assets/icons/settings.svg'
import questions from '../../shared/assets/icons/questions.svg'
import logout from '../../shared/assets/icons/logout.svg'
import search from '../../shared/assets/icons/search.svg'

function SideBar({avatar}) {
  return (
    <div className={cl.sideBar}>
        <div className={cl.sideBar__main}>
            <div className={cl.sideBar__logo}>
                <Link to="/">
                    <img src={logo} alt="logoImg" className={cl.logoImg}/>
                    <img src={logoText} alt="logoText" className={cl.logoText}/>
                </Link>
            </div>
            <div className={cl.sideBar__search}>
                <SearchInput placeholder="Search..." width="100%"/>
                <img src={search} alt="searchLogo"/>
            </div>
            <div className={cl.sideBar__nav}>
                <SideItem icon={home} text="Feed" countNotification={10}/>
                <SideItem icon={lists} text="Stories" countNotification={0}/>
                <SideItem icon={friends} text="Friends" countNotification={2}/>
                <SideItem icon={box} text="APIs" countNotification={0}/>
                <SideItem icon={card} text="Subscription" countNotification={0}/>
                <SideItem icon={settings} text="Settings" countNotification={0}/>
                <SideItem icon={questions} text="Help & Support" countNotification={0}/>
            </div>
        </div>
        <div className={cl.sideBar__footer}>
            <Link to="/profile">
                <div className={cl.footer__profile}>
                    <div className={cl.profile__avatar}>
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className={cl.profile__info}>
                        <div className={cl.profile__name}>Dmitry Konoplyannikov</div>
                        <div className={cl.profile__nickname}>@Kin1599</div>
                    </div>
                </div>
            </Link>
            <div className={cl.sideBar__logout}>
                <img src={logout} alt="logout" />
            </div>
        </div>
    </div>
  )
}

export default SideBar
import React, { useState } from 'react'
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
import collapseIcon from '../../shared/assets/icons/collapse.svg'

function SideBar({avatar}) {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapseToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

  return (
    <div className={`${cl.sideBar} ${isCollapsed ? cl.collapsed : ''}`}>
        <div className={cl.sideBar__main}>
            <div className={cl.sideBar__logo}>
                <Link to="/" className={cl.logo__wrapper}>
                    <img src={logo} alt="logoImg" className={cl.logoImg}/>
                    <img src={logoText} alt="logoText" className={cl.logoText}/>
                </Link>
                <button className={cl.collapseButton} onClick={handleCollapseToggle}>
                    <img src={collapseIcon} alt="collapse" className={cl.collapseButton__img} />
                </button>
            </div>
            <div className={cl.sideBar__search}>
                <SearchInput placeholder="Search..." width="100%"/>
                <img src={search} alt="searchLogo"/>
            </div>
            <div className={cl.sideBar__nav}>
                <SideItem icon={home} text="Feed" countNotification={10} isCollapsed={isCollapsed}/>
                <SideItem icon={lists} text="Stories" countNotification={0} isCollapsed={isCollapsed}/>
                <SideItem icon={friends} text="Friends" countNotification={2} isCollapsed={isCollapsed}/>
                <SideItem icon={box} text="APIs" countNotification={0} isCollapsed={isCollapsed}/>
                <SideItem icon={card} text="Subscription" countNotification={0} isCollapsed={isCollapsed}/>
                <SideItem icon={settings} text="Settings" countNotification={0} isCollapsed={isCollapsed}/>
                <SideItem icon={questions} text="Support" countNotification={0} isCollapsed={isCollapsed}/>
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
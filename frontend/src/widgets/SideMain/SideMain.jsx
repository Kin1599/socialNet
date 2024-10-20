import React from 'react'
import cl from './SideMain.module.scss'
import {Link} from 'react-router-dom'

//* COMPONENTS
import SuggestionsWidget from '../SuggestionsWidget/SuggestionsWidget'
import ActionIconCircleButton from '../../shared/modules/ActionIconCircleButton/ActionIconCircleButton'

//* ICONS
import chat from '../../shared/assets/icons/questions.svg'
import settings from '../../shared/assets/icons/settings.svg'
import notification from '../../shared/assets/icons/notification.svg'


function SideMain({suggestionItems, avatar}) {
  return (
    <div className={cl.sideMain}>
        <div className={cl.sideMain__header}>
            <div className={cl.sideMain__profile}>
                <Link to="/profile">
                    <img src={avatar} alt="avatar" className={cl.profile__img}/>
                    <div className={cl.profile__status}></div>
                </Link>
            </div>
            <div className={cl.sideMain__actions}>
                <ActionIconCircleButton icon={chat} alt="chat btn"/>
                <ActionIconCircleButton icon={notification} alt="notification btn"/>
                <ActionIconCircleButton icon={settings} alt="settings btn"/>
            </div>
        </div>
        <div className={cl.sideMain__main}>
            <SuggestionsWidget suggestionItems={suggestionItems}/>
        </div>
    </div>
  )
}

export default SideMain
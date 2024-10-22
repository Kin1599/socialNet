import React from 'react'
import cl from './SideItem.module.scss'

function SideItem({icon, text, countNotification, isCollapsed}) {
  return (
    <div className={cl.sideItem}>
        <div className={cl.sideItem__main}>
            <img className={cl.sideItem__icon} src={icon} alt={text}/>
            {
              !isCollapsed && <div className={cl.sideItem__text}>{text}</div>
            }
            { isCollapsed && <div className={cl.sideItem__hoverText}>{text}</div>}
        </div>
        {
          countNotification > 0 && !isCollapsed && <div className={cl.sideItem__notification}>{countNotification}</div>
        }
    </div>
  )
}

export default SideItem
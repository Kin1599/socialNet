import React from 'react'
import cl from './ActionButton.module.scss'

function ActionButton({children, icon}) {
  return (
    <div className={cl.actionButton}>
        <button className={cl.actionButton__btn}>
            {children}
            <img className={cl.actionButton__icon} src={icon} alt="actionIcon" />
        </button>
    </div>
  )
}

export default ActionButton
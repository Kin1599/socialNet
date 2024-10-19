import React from 'react'
import cl from './FollowButton.module.scss'

function FollowButton({children}) {
  return (
    <div>
        <button className={cl.followButton}>{children}</button>
    </div>
  )
}

export default FollowButton
import React from 'react'
import cl from './SuggestionItem.module.scss'
import FollowButton from '../FollowButton/FollowButton';

function SuggestionItem({user}){
    const {avatar, username, nickname} = user;
  return (
    <div className={cl.suggestionItem}>
        <div className={cl.suggestionItem__content}>
            <img src={avatar} alt={username} className={cl.suggestionItem__avatar}/>
            <div className={cl.suggestionItem__info}>
                <div className={cl.info__name}>{username}</div>
                <div className={cl.info__nickname}>{nickname}</div>
            </div>
        </div>
        <FollowButton>Follow</FollowButton>
    </div>
  )
}

export default SuggestionItem
import React from 'react'
import cl from './PostItem.module.scss'

//* COMPONENTS
import ActionIconCircleButton from '../../shared/modules/ActionIconCircleButton/ActionIconCircleButton'

//* ICONS
import verticalDot from '../../shared/assets/icons/DotsThreeOutlineVertical.svg'
import clip from '../../shared/assets/icons/clip.svg'
import smile from '../../shared/assets/icons/smile.svg'
import paperPlane from '../../shared/assets/icons/paperPlane.svg'
import bookmark from '../../shared/assets/icons/bookmark.svg'
import likeIcon from '../../shared/assets/icons/like.svg'
import commentIcon from '../../shared/assets/icons/comment.svg'
import shareIcon from '../../shared/assets/icons/share.svg'


function PostItem({post, avatar}) {
    const {userAvatar, username, description, content, stats} = post;

    const renderTags = () => (
        content.tags && content.tags.map((tag, id) => (
            <span key={id}>#{tag}</span>
        ))
    );

    const renderImages = () => (
        content.images && content.images.map((image, id) => (
            <img className={cl.content__images} src={image} alt="content" />
        ))
    );

  return (
    <div className={cl.postItem}>
        <div className={cl.postItem__header}>
            <div className={cl.postItem__profile}>
                <img src={userAvatar} alt="profile avatar" className={cl.profile__avatar}/>
                <div className={cl.profile__info}>
                    <div className={cl.info__name}>{username}</div>
                    <div className={cl.info__description}>{description}</div>
                </div>
            </div>
            <img src={verticalDot} alt='unfold btn'/>
        </div>
        <div className={cl.postItem__content}>
            <p className={cl.content__text}>
                {content.text}
                {renderTags()}
            </p>
            {renderImages()}
            <div className={cl.content__stats}>
                <div className={cl.stats__left}>
                    <div className={cl.stats}>
                        <img src={likeIcon} alt="like icon" />
                        <span>{stats.likes} Likes</span>
                    </div>
                    <div className={cl.stats}>
                        <img src={commentIcon} alt="comment icon" />
                        <span>{stats.comments.count} Comments</span>
                    </div>
                    <div className={cl.stats}>
                        <img src={shareIcon} alt="share icon" />  
                        <span>{stats.share} Share</span>
                    </div>
                </div>
                <div className={cl.bookmark__btn}>
                    <img src={bookmark} alt="add favorite" />
                </div>
            </div>
        </div>
        <div className={cl.postItem__actions}>
            <div className={cl.actions__left}>
                <img className={cl.profile__avatar} src={avatar} alt="my profile avatar" />
                <input className={cl.actions__input} type="text" placeholder='Write your comment...'/>
            </div>
            <div className={cl.actions__btn}>
                <ActionIconCircleButton 
                    icon={clip} 
                    alt="attach a file" 
                    size={40}
                />
                <ActionIconCircleButton 
                    icon={smile} 
                    alt="open smiles" 
                    size={40}
                />
                <ActionIconCircleButton 
                    icon={paperPlane} 
                    alt="send comment" 
                    size={40} 
                    color='#4F46E5' 
                    filterColor="brightness(0) saturate(100%) invert(25%) sepia(31%) saturate(5265%) hue-rotate(233deg) brightness(102%) contrast(91%)"
                />
            </div>
        </div>
    </div>
  )
}

export default PostItem
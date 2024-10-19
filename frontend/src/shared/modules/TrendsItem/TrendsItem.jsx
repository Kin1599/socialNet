import React from 'react'
import cl from './TrendsItem.module.scss'
import dot from '../../assets/icons/dot.svg'

function TrendsItem({trend}) {
    const {topic, title, posts} = trend;
  return (
    <div className={cl.trendsItem}>
        <div className={cl.trendsItem__main}>
            <div className={cl.main__topic}>Trending in {topic}</div>
            <div className={cl.main__title}>{title}</div>
            <div className={cl.main__posts}>{posts} Posts</div>
        </div>
        <div className={cl.trendsItem__btn}>
            <img src={dot} alt="unfold btn" />
        </div>
    </div>
  )
}

export default TrendsItem
import React from 'react'
import cl from './TrendsWidget.module.scss'
import settings from '../../shared/assets/icons/settings.svg'
import TrendsItem from '../../shared/modules/TrendsItem/TrendsItem'

function TrendsWidget({trendsItems}) {
  return (
    <div className={cl.trendsWidget}>
      <div className={cl.trendsWidget__header}>
        <div className={cl.trendsWidget__title}>Trends for you</div>
        <img src={settings} alt='settings btn' className={cl.trendsWidget__settings}></img>
      </div>
      <div className={cl.trendsWidget__items}>
        {
            trendsItems && trendsItems.map((trend, id) => (
              <TrendsItem trend={trend}/>
            ))
        }
        </div>
      <div className={cl.trendsWidget__moreBtn}>Show more</div>
    </div>
  )
}

export default TrendsWidget
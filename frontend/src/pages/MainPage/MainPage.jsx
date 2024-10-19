import React from 'react'
import cl from './MainPage.module.scss'
import SideBar from '../../widgets/SideBar/SideBar'
import SearchInput from '../../shared/modules/SearchInput/SearchInput'
import ActionButton from '../../shared/modules/ActionButton/ActionButton'
import plus from '../../shared/assets/icons/plus.svg'

function MainPage() {
  return (
    <div className={cl.mainPage}>
      <SideBar/>
      <div className={cl.mainPage__content}>
        <div className={cl.content__header}>
          <SearchInput
            placeholder="Search for friends, groups, pages" 
            width="400px" 
            height="48px"
          />
          <ActionButton icon={plus}>Add New Post</ActionButton>
        </div>
      </div>
    </div>
  )
}

export default MainPage
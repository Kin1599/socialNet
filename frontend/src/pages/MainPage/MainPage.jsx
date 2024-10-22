import React, { useState } from 'react'
import cl from './MainPage.module.scss'
import SideBar from '../../widgets/SideBar/SideBar'
import SearchInput from '../../shared/modules/SearchInput/SearchInput'
import ActionButton from '../../shared/modules/ActionButton/ActionButton'
import plus from '../../shared/assets/icons/plus.svg'
import SideMain from '../../widgets/SideMain/SideMain'
import user1 from '../../shared/assets/mocks/user1.jpg'
import anon from '../../shared/assets/mocks/anon.jpg'
import avatar from '../../shared/assets/mocks/avatar1.JPG'
import postImage from '../../shared/assets/mocks/postImage1.png'
import PostItem from '../../widgets/PostItem/PostItem'

function MainPage() {

  const [users] = useState([
    {avatar: user1, username: "Ilya Grinenko", nickname: "@gpihfdsfjpok"},
    {avatar: anon, username: "Shuhratbek", nickname: "@mrshukhsrat"},
  ])

  const [posts] = useState([
    {
      userAvatar: user1, 
      username: "Ilya Grinenko", 
      nickname: "@gpihfdsfjpok",
      description: "Backend Developer, slothUI",
      content: {
        text: "Habitant morbi tristique senectus et netus et. Suspendisse sed nisi lacus sed viverra. Dolor morbi non arcu risus quis varius.",
        images: [postImage],
        tags: ["amazing", "great", "lifetime", "uiux", "machinelearning"]
      },
      stats: {
        likes: 12,
        comments: {
          count: 25,
          comments: [
            {
              userAvatar: anon,
              username: "Anonimus",
              text: "Very Cool!"
            }
          ]
        },
        share: 187,
      },
      isFavorite: false
    },
    {
      userAvatar: anon, 
      username: "Anonimus", 
      nickname: "@anon",
      description: "Hacker, anonimus",
      content: {
        text: "Habitant morbi tristique senectus et netus et. Suspendisse sed nisi lacus sed viverra. Dolor morbi non arcu risus quis varius.",
        images: [],
        tags: ["hackers", "it"]
      },
      stats: {
        likes: 12,
        comments: {
          count: 25,
          comments: [
            {
              userAvatar: anon,
              username: "Anonimus",
              text: "Very Cool!"
            }
          ]
        },
        share: 187,
      },
      isFavorite: true
    },
  ])

  return (
    <div className={cl.mainPage}>
      <div className={cl.mainPage__sidebar}>
        <SideBar avatar={avatar}/>
      </div>
      <div className={cl.mainPage__content}>
        <div className={cl.content__header}>
          <SearchInput
            placeholder="Search for friends, groups, pages" 
            width="400px" 
            height="48px"
          />
          <ActionButton icon={plus}>Add New Post</ActionButton>
        </div>
        <div className={cl.content__posts}>
          {
            posts && posts.map((post, id) => (
              <PostItem post={post} avatar={avatar} key={id}/>
            ))
          }
        </div>
      </div>
      <div className={cl.mainPage__extra}>
        <SideMain suggestionItems={users} avatar={avatar}/>
      </div>
    </div>
  )
}

export default MainPage
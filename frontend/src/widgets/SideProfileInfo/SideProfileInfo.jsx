import React from 'react'
import cl from './SideProfileInfo.module.scss'
import SearchInput from '../../shared/modules/SearchInput/SearchInput'
import search from '../../shared/assets/icons/search.svg'
import GalleryWidget from '../GalleryWidget/GalleryWidget'
import SuggestionsWidget from '../SuggestionsWidget/SuggestionsWidget'
import TrendsWidget from '../TrendsWidget/TrendsWidget'

function SideProfileInfo({galleryItems, suggestionItems, trendsItems}) {
  return (
    <div className={cl.sideProfileInfo}>
        <div className={cl.sideProfileInfo__search}>
            <SearchInput placeholder="Search Twitter" width="100%"/>
            <img src={search} alt="searchLogo"/>
        </div>
        <GalleryWidget galleryItems={galleryItems}/>
        <SuggestionsWidget suggestionItems={suggestionItems}/>
        <TrendsWidget trendsItems={trendsItems}/>
    </div>
  )
}

export default SideProfileInfo
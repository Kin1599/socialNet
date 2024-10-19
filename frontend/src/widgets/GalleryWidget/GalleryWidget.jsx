import React from 'react'
import cl from './GalleryWidget.module.scss'

function GalleryWidget({galleryItems}) {
  return (
    <div className={cl.galleryWidget}>
      {
        galleryItems && galleryItems.map((galleryItem, id) => (
          <img 
            className={cl.gallery}
            src={galleryItem.img} 
            alt={galleryItem.text} 
            key={id}
          />
        ))
      }
    </div>
  )
}

export default GalleryWidget
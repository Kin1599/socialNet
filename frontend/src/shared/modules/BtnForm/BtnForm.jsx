import React from 'react'
import cl from './BtnForm.module.scss'

function BtnForm({children, onClick, disabled = false}) {
  return (
    <button className={cl.btnForm} onClick={onClick} disabled={disabled}>
        {children}
    </button>
  )
}

export default BtnForm
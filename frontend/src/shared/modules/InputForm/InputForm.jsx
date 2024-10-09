import React from 'react'
import cl from './InputForm.module.scss'

function InputForm({isPassword = false, value, setValue, placeholder, type = "text"}) {
  return (
    <div>
        {
            isPassword 
            ?
                <div className={cl.inputPass}>
                    <input className={cl.inputForm} type="password" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}/>
                </div>
            :   
                <input className={cl.inputForm} type={type} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}/>
        }
    </div>
  )
}

export default InputForm
import { useState,useEffect } from "react";
import React from "react";
import  styles from './Message.module.css';

export default function Message({type,msg}){
    const [visible,setVisible] = useState(false)
    useEffect(()=>{
       if(!msg){
        setVisible(false)
        return
       } 

       setVisible(true)

       const timer = setTimeout(()=>{
          setVisible(false)
       },3000)

       return()=> clearTimeout(timer)
    },[msg])

    return(
       <>
        {visible&&(
            <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
        )}
       </>
    )
}

/*
  <>
        {visible&&(
            <div className="message type">{msg}</div>
        )}
    </>
    Com isso a mensagem de erro, ou acerto, irá sumir.         
*/
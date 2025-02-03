import React from "react"
import {Link}from "react-router-dom"
function map(){
    const arr=[{fname:"akash",age:21},
              {fname:"kiran",age:21}]
              return(
              <>
                {arr.map((a)=>{
                return <h1> {a.fname},{a.age}</h1> 
                })}
               </>
              )
}
export default map
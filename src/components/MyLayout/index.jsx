import React, { Component } from 'react'
import MyHeader from '../MyHeader'

export default function MyLayout(props){

  
    return (
         <>
            <MyHeader />
            {props.container}
         </>
    )

}

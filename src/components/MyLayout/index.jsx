import React, { Component } from 'react'
import MyHeader from '../MyHeader'
import MyFooter from '../MyFooter'

export default function MyLayout(props){

  
    return (
         <>
            <MyHeader />
            {props.container}
            <MyFooter/>
         </>
    )

}

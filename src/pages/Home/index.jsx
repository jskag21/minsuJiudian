import React from 'react'
import MyLayout from '../../components/MyLayout'
import Carousel from '../../components/Carousel'
import Mysection1 from '../../components/MySection1'
import Mysection2 from '../../components/MySection2'
import MySection3 from '../../components/MySection3'


export default function Home() {

   function HomeLayout(){

    return(
        <>
           <Carousel/>
           <Mysection1/>
           <Mysection2 />
           <MySection3 />
        </>
    )
  }
  return (
    <>
        <MyLayout container={<HomeLayout/>}/>
    </>
  )
}

import { Carousel , Image} from 'antd'
import React from 'react'
import './index.css'
import h1 from '../../assets/images/house01.jpg'
import h2 from '../../assets/images/house02.jpg'
import h3 from '../../assets/images/house03.jpg'
import h4 from '../../assets/images/house04.jpg'



export default function index() {
    
    const myimages=[
        {
            src:h1,
            text:'Img 1'
        },
        {
            src:h2,
            text:'Img 2'
        },
        {
            src:h3,
            text:'Img 3'
        },
        {
            src:h4,
            text:'Img 4'
        }
    ]
    function MyImage(props){

        const imgstyle={
            backgroundImage:`url(${props.src})`,
            
        }
        const textstyle={
            position:'absolute',
            top:'0',
            textAlign:'center',
            margin:'auto'

        }
        return(
            <div className='carouselStyle' >
              <Image 
                    width="100%"
                    height="100%"
                    src={props.src}
                    preview={false}
                />
               {/* <p style={textstyle}> {props.text}</p> */}
            </div>
        )
    }


    return (
        <div>
            <Carousel autoplay>
               { 
                myimages.map(item=>{
                    return <MyImage src={item.src} text={item.text} />
                })
               }
               
            </Carousel>

        </div>
    )
}

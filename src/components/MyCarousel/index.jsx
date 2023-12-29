import { Carousel , Image} from 'antd'
import {React , useRef}from 'react'
import './index.css'
import h1 from '../../assets/images/house01.jpg'
import h2 from '../../assets/images/house02.jpg'
import h3 from '../../assets/images/house03.jpg'
import h4 from '../../assets/images/house04.jpg'



export default function MyCarousel() {

    const text1=useRef()
    const text2=useRef()
    const text3=useRef()
    
    const handleBeforeChange=()=>{
        // console.log(text3.current)
        // text3.current.classList.add('animation4')
        // console.log(text3.current.classList)
    }
    const handleAfterChange=()=>{
      
        // text3.current.classList.remove('animation3')
        // console.log(text3.current.classList)
    }
    const startAnimation=()=>{
        
        // console.log(text3.current.classList)
        // text3.current.classList.add('animation4')
        // console.log(text3.current.classList)
    }
    const myimages=[
        {
            key:1,
            src:h1,
            text:'无与伦比的服务'
        },
        {
            key:2,
            src:h2,
            text:'外出时有家的感觉'
        },
        {
            key:3,
            src:h3,
            text:'卓越品质，独特体验'
        },
        {
            key:4,
            src:h4,
            text:'个性化舒适'
        }
    ]
    function MyImage(props){
       
        const imgstyle={
            backgroundImage:`url(${props.src})`,
            
        }
        const textstyle={
            // position:'absolute',
            // top:'0',
            // textAlign:'center',
           
        }
       
        return(
            <div className='carouselStyle' >
              <Image 
                    width="100%"
                    height="100%"
                    src={props.src}
                    preview={false}
                />
                
               <div className='carouselText' style={textstyle} > 
                    <div className='changingText'>
                        <div className='carouselTitle'><span className='animation1' ref={text1}>开始您的</span><br/><span className='animation2' ref={text2}>下一次远足探险</span></div>
                        <p className='animation3' ref={text3}> {props.text}</p>
                    </div>
                    <span onClick={startAnimation} className='button'>了解更多</span>
                </div>
            </div>
        )
    }
    

    return (
        <div>
            <Carousel autoplay  autoplaySpeed={6000} beforeChange={handleAfterChange} afterChange={handleBeforeChange}>
               { 
                myimages.map(item=>{
                    return <MyImage src={item.src} text={item.text} key={item.key} />
                })
               }
               
            </Carousel>

        </div>
    )

    
}

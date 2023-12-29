import React from 'react'
import './index.css'
import sec1Img from '../../assets/images/section1Image.jpg'
import headset from '../../assets/icons/headset.png'
import walking from '../../assets/icons/walking.png'
import map from '../../assets/icons/map.png'
import thumb from '../../assets/icons/thumb.png'
import Item from 'antd/es/list/Item'


export default function Mysection1() {

    let myservices=[
        {
        src:map,
        title:'定位',
        text:'在城市上空服务'
    },
    {
        src:thumb,
        title:'评价',
        text:'最好的服务之一'
    },
    {
        src:headset,
        title:'open hours',
        text:'24个小时为您服务'
    }


]

    function MyService(props){

        return (
            <div className='aService'>
                <i><img src={props.item.src} /></i>
                <div className='servicesDes'>
                    <h4>{props.item.title}</h4>
                    <p>{props.item.text}</p>
                </div>
            </div>
        )
    }


  return (
    <div className='section1'>
       <div className='section1Title'>Dream House</div>
       <section className='section1Content'>
            <img src={sec1Img} />
            <div className='section1Text'>
               <h3>民宿</h3>
               <p>
                    欢迎来到[酒店名称]，在[城市]的心脏地带，豪华与舒适完美交汇。我们的酒店坐落在一个黄金位置，为商务和休闲旅客提供了一个精致的避风港。从您踏入我们酒店的那一刻开始，您将沉浸在优雅和无可挑剔的服务中。
                    我们时尚而贴心设计的客房和套房为您提供了一个放松的避风港，配备了现代化设施和豪华家具。无论您是来度过浪漫的假期，家庭度假，还是商务旅行，我们的住宿都满足您的每一个需求。  
              </p>  
              <a href="">了解更多  </a>        
            </div>

            
       </section>
        <div className='services'>
          { myservices.map(myitem=>{
            return <MyService item={myitem}/>
          })}
        </div>

    </div>
  )
}

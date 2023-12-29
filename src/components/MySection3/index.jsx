import React from 'react'
import './index.css'

 
export default function MySection3() {

   
   let myinputs=[
    {
        text:'联系人',
        placeHolder:'请输入名字请输入名字'

    },
    {
        text:'手机号',
        placeHolder:'请正确输入11位手机号码'

    },
    {
        text:'地址',
        placeHolder:'请输入酒店物业所在地址'

    }
   ]
function MyInput(props){

    return(
        <div className='inputWrapper'>
            <label><span style={{color:'red'}}>*</span>{props.item.text}</label>
            <input type="text" placeholder={props.item.placeHolder}/>
        </div>
    )
   }
  

  return (
    <div className='section3'>
        <img className='section3BackImg' src={require('../../assets/images/room.jpg')}/>
        <div className='sections'>
            <div className='innerSection'>
                <section className='part1'>
                    
                    <div className='description'>
                        <h1>加盟咨询</h1>
                        <p> 如想了解更多酒店加盟信息（加盟政策，回报投资率等），可拨打加盟热线或留下联系方式，将会有专属加盟顾问为您解答               </p>
                    </div>

                    <div className='contactUs'>
                        <h1>加盟热线</h1>
                        <p>187-212-42641</p>
                    </div>
                </section>

                <section className='part2'>
                    <h1>留下您的联系方式</h1>
                    <form>
                    
                        {  myinputs.map(item=>{
                            return <MyInput item={item} />
                        })}
                        <button className='contactButton'>提交信息</button>
                    </form>
                </section>
            </div>
        </div>
    </div>
  )
}

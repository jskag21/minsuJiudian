import React from 'react'
import {Col, Row, Image, Card } from 'antd'

import './index.css'
import i1 from '../../assets/images/huanjing1.jpg'
import i2 from '../../assets/images/huanjing2.jpg'
import i3 from '../../assets/images/huanjing3.jpg'
import i4 from '../../assets/images/huanjing4.jpg'
import i5 from '../../assets/images/huanjing5.jpg'
import i6 from '../../assets/images/huanjing6.jpg'


const {Meta}=Card

export default function Mysection2() {


function MyCard(props){
   
        return(        
                 <img src={props.src}   /> 
                )
    }

const gridStyle = {
       height:'300px',
       with:'100px'
      };
return (
    <div className='section2'>
        <h3 className='section2Title'>我们的环境</h3>
        <div className='section2Content'>           
            {/* <Row >
                <Col span={12}   className='myCol'>
                    <MyCard src={i1} />
                   
                </Col>
                <Col span={12} className='myCol'>
                    <MyCard src={i2} />
                </Col>
            </Row>
            <Row>
                <Col span={8} className='myCol'>
                    <MyCard src={i3} />
                </Col>
                <Col span={8}   className='myCol'>
                    <MyCard src={i4} />
                </Col>
                <Col span={8}  className='myCol'>
                     <MyCard src={i5} />
                </Col>
            </Row> */}
            {/* <Row>
                <Col span={24}  className='myCol'>
                    <MyCard src={i6} />
                </Col>
            </Row> */}
            {/* <table>
                <tr>
                    <td style={{width:'450px'}}><MyCard src={i1} /></td>
                    <td ColSpan={2}><MyCard src={i2} /></td>
                </tr>
                <tr>
                    <td >  <MyCard src={i4} /></td>
                    <td style={{width:'300px'}}><MyCard src={i3} /></td>
                    <td><MyCard src={i5} /></td>
                </tr>
                <tr>
                    <td ColSpan={3}><MyCard src={i6} /></td>
                    
                </tr>
               
            </table> */}

            <span> <MyCard src={i1} /></span>
            <span> <MyCard src={i2} /></span>
            <span> <MyCard src={i3} /></span>
            <span> <MyCard src={i4} /></span>
            <span> <MyCard src={i5} /></span>
            <span> <MyCard src={i6} /></span>
            {/* <span> <MyCard src={i7} /></span> */}
            
        </div>
    </div>
  )
}

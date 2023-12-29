import React from 'react'
import './index.css'
import { QRCode } from 'antd'

export default function MyFooter() {
  return (
    <div className='myFooter'>
        <section className='footerInfo'>
            <div className='qrCodeWrapper'><QRCode type="canvas" value="localhost:300" color='#fff' className='qrCode' size={110}/> <span>微信众号</span></div>
            <div> </div>
            <div className='footerContact'> <span>联系我们</span> 187-212-42641</div>
        </section>

        <section className='certificates'>

             <div > 
                <span >旅悦旅游信息技术（北京）有限公司 丨 北京市海淀区永定路88号12层B03 丨 邮编: 100039 丨 备案号：</span>
                <a  href="https://beian.miit.gov.cn" target="_blank">京ICP备17066056号</a> 
            </div>
        </section>
    </div>
  )
}

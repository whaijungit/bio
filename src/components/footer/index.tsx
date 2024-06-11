
import './index.less'
import zhihu from '@/assets/icon/zhihu.png'
import weibo from '@/assets/icon/weibo.png'
import weixin from '@/assets/icon/wechat.png'

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className='footer-wrap app-design'>
                <div className='footer-item'>
                    <div className='item-title'>联系我们</div>
                    <div className='item-wrap'>
                        <div className='item-label'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.7075 21.2706C13.9493 20.0232 16.4989 17.4628 17.6569 16.3048C20.781 13.1806 20.781 8.11529 17.6569 4.99109C14.5327 1.8669 9.46734 1.8669 6.34315 4.99109C3.21895 8.11529 3.21895 13.1806 6.34315 16.3048C7.5011 17.4628 10.0507 20.0232 11.2925 21.2706C11.6835 21.6633 12.3165 21.6633 12.7075 21.2706ZM12 13.3149C13.4728 13.3149 14.6667 12.121 14.6667 10.6482C14.6667 9.17547 13.4728 7.98156 12 7.98156C10.5272 7.98156 9.33333 9.17547 9.33333 10.6482C9.33333 12.121 10.5272 13.3149 12 13.3149Z" fill="#7D8AA3" />
                            </svg>
                        </div>
                        <div className='item-text'>地址：湖南省长沙市芙蓉区合平路618号</div>
                    </div>
                    <div className='item-wrap'>
                        <div className='item-label'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3.46255 17.8664C2.68151 17.0853 2.6815 15.819 3.46255 15.0379L4.46833 14.0322C5.12382 13.3767 6.14384 13.2575 6.93276 13.7443L7.57481 14.1405C7.78211 14.2684 8.02942 14.3157 8.2603 14.238C8.86211 14.0356 10.1515 13.4599 11.6806 11.9309C13.2097 10.4018 13.7853 9.11239 13.9877 8.51058C14.0654 8.2797 14.0181 8.03239 13.8902 7.82509L13.494 7.18304C13.0072 6.39412 13.1264 5.3741 13.7819 4.71861L14.7877 3.71283C15.5687 2.93178 16.835 2.93178 17.6161 3.71283L18.2393 4.33603C19.7774 5.87419 20.1459 8.23468 18.9437 10.0475C17.9162 11.597 16.5173 13.4829 14.875 15.1253C13.2326 16.7676 11.3468 18.1664 9.79727 19.194C7.9844 20.3962 5.62391 20.0277 4.08576 18.4896L3.46255 17.8664Z" fill="#7D8AA3" />
                            </svg>
                        </div>
                        <div className='item-text'>电话：0731 - 88849090</div>
                    </div>
                    <div className='item-wrap'>
                        <div className='item-label'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="3" y="5" width="18" height="14" rx="2" fill="#7D8AA3" />
                                <path d="M6 8L12 11L18 8" stroke="#2E3A55" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='item-text'>邮箱：huazhi@higentec.com</div>
                    </div>
                </div>
                <div className='footer-item'>
                    <div className='item-title'>友情链接</div>
                    <div className='item-wrap'>华智生物官网</div>
                    <div className='item-wrap'>智慧育种平台</div>
                    <div className='item-wrap'>育种管家</div>
                </div>
                <div className='footer-item'>
                    <div className='item-title'>友情链接</div>
                    <div className='images'>
                        <img src={weixin} className='item-image' alt="" />
                        <img src={weibo} className='item-image' alt="" />
                        <img src={zhihu} className='item-image' alt="" />
                    </div>
                </div>
            </div>
            <div className='footer-ipc app-design'>Copyright©2024 华智生物技术有限公司 All rights reserved. </div>
        </footer>
    )
}

export default Footer;

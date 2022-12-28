import React from 'react';

const Footer = (props) => {
    return (
        <div className='container mx-auto'>
            <div className="txt-sm leading-7 text-xs text-gray-600 flex items-center justify-center h-20">
                <div className="flex items-center">
                    <div className="w-16 text-right">鄂公网安备</div>
                    <div className="mx-3">|</div>
                    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011202001971">
                        42011202001971号
                    </a>
                </div>
                <div className="flex items-center">
                    <div className="w-16 text-right">备案号</div>
                    <div className="mx-3">|</div>
                    <a target="_blank" href="https://beian.miit.gov.cn">
                        鄂ICP备2021009343号
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer;
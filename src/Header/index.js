import React from 'react';

const Header = (props) => {
    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-between h-20 px-4'>
                <div className='flex items-center'>
                    <a href='/' className='italic flex items-center gap-1 color-primary'>
                        <i className='iconfont icon-logo text-3xl'></i>LUFUHU
                    </a>
                    <div className='mx-3 text-gray-200 pl-1'>|</div>
                    <a href='/blog' className='italic flex items-center gap-1 text-gray-400'>
                        <i className='iconfont icon-home text-xl'></i>
                    </a>
                </div>
                <div className='flex items-center gap-3 text-sm'>
                    <a href='https://www.lufuhu.com/console' target="_blank" className='border rounded-full flex items-center justify-center w-7 h-7 hover:bg-gray-100'>
                        <i className='iconfont icon-console'></i>
                    </a>
                    <a href='https://hub.docker.com/u/lufuhu' target="_blank" className='border rounded-full flex items-center justify-center w-7 h-7 hover:bg-gray-100'>
                        <i className='iconfont icon-docker'></i>
                    </a>
                    <a href='https://gitee.com/lufuhu' target="_blank" className='border rounded-full flex items-center justify-center w-7 h-7 hover:bg-gray-100'>
                        <i className='iconfont icon-gitee'></i>
                    </a>
                    <a href='https://www.github.com/lufuhu' target="_blank" className='border rounded-full flex items-center justify-center w-7 h-7 hover:bg-gray-100'>
                        <i className='iconfont icon-github'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Header;
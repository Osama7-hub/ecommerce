import React from 'react'

function HeroPage({title}) {
    return (
        <div className='mt-[60px]'>
            {/* <section className={"h-[20vh] sm:h-[30vh] relative bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center bg-no-repeat"}> */}
            <section className={"h-[20vh] sm:h-[30vh] relative bg-[url('/_next/image?url=%2F.%2Fimages%2Fabout-bg.jpg&w=3840&q=75')] bg-cover bg-center bg-no-repeat"}>
            {/* <section className={"h-[20vh] sm:h-[30vh] relative bg-[url('" + bg + "')] bg-cover bg-center bg-no-repeat"}> */}
                <div className="absolute w-full h-full inset-0 bg-gray-900/75 sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
                {/* <img src="/public/images/about-bg.jpg"
                 alt="" className='w-full h-full bg-cover bg-center bg-no-repeat' /> */}
                </div>
                <div className="flex justify-center items-center mx-auto h-full">
                    <h1 className="text-3xl font-extrabold text-white sm:text-5xl z-10">{title}</h1>
                </div>
            </section>
        </div>
    )
}

export default HeroPage

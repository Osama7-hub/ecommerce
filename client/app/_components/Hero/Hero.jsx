"use client"
import React from 'react'
// Core modules imports are same as usual
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from "swiper";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

import IconSection from './IconSection';

import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Link from 'next/link';
import Image from 'next/image';

const mySlider = [
    { text: "MEN", link: "./images/slide-02.jpg" },
    { text: "WOMEN", link: "./images/slide-01.jpg" },
    { text: "MEN", link: "./images/slide-03.jpg" },
    { text: "WOMEN", link: "./images/slide-04.jpg" },
];

function Hero() {
    return (
        <div className=''>
            <Swiper
                loop={true}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {mySlider.map((item) => {
                    return (
                        <SwiperSlide key={item.link} className="parent-slider relative">
                            <Image src={"/" + item.link} width={10000} height={1000} alt="Swapper-Image" className="w-full lg:mt-20 md:mt-0 lg:!object-top md:!object-cover" />
                            <Card className="h-1/2 absolute top-1/4 md:left-[15%] sm:left-[0%] bg-transparent border-none shadow-none text-left">
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2 text-[#222] uppercase md:text-5xl sm:text-2xl font-normal">
                                        Lifestyle Collection
                                    </Typography>
                                    <Typography variant="h2" className="mb-2 text-[#222] font-bold uppercase">
                                        {item.text}
                                    </Typography>
                                    <div className='flex gap-4'>
                                        <Typography variant="h4" className="mb-2 text-[#222] md:text-4xl sm:text-2xl uppercase">
                                            Sale Up To
                                        </Typography>
                                        <Typography variant="h4" className="mb-2 text-red-600 md:text-4xl sm:text-2xl uppercase">
                                            30% Off
                                        </Typography>
                                    </div>
                                    <Typography variant="h5" color="blue-gray" className="mb-2 text-[#222] uppercase text-md font-normal">
                                        Get Free Shipping on orders over $99.00
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button className='uppercase rounded-none bg-primary'>
                                        <Link href="/shop">Shop Now</Link>
                                    </Button>
                                    {/* <a href="#" className="inline-block">
                                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                                Shop Now
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                    />
                                                </svg>
                                            </Button>
                                        </a> */}
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    )
}

export default Hero

"use client";
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

function BlogCard({src, subject, content, day, date}) {
    return (
        <Card className="overflow-hidden rounded-none my-8 shadow-none">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none relative"
            >
                <Image src={"/" + src} alt="blog-image" className='hover:scale-110 transition-all duration-500 w-full h-full' width={500} height={500} />
                <div className='date flex flex-col items-center justify-center gap-1 bg-[#ffffff7a] absolute top-[15px] left-[10px] w-[70px] min-h-[70px]'>
                    <span className='text-[30px] leading-4 text-center text-[#333]'>{day}</span>
                    <span className='text-[12px] leading-7 text-center text-[#666]'>{date}</span>
                </div>
            </CardHeader>
            <CardBody className="px-0">
                <a href='#' className='hover:text-primary transition-all duration-300 text-[26px] leading-5 text-[#333]'>{subject}</a>
                <Typography variant="lead" color="gray" className="mt-3 font-normal text-[16px]">{content}</Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between px-0">
                <div className="flex items-center space-x-2 text-[14px]">
                    <span className=''>BY: Admin </span>
                    <span>|</span> 
                    <span>StreetStyle, Fashion, Couple</span>
                    <span>|</span> 
                    <span>8 Comments</span>
                </div>
                <a href='#' className='hover:text-primary transition-all duration-300 flex gap-2 items-center uppercase'>Continue Reading <ArrowRightIcon /></a>
            </CardFooter>
        </Card>
    )
}

export default BlogCard


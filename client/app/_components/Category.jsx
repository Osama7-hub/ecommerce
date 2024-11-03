import React from 'react'
// import { Button } from "@material-tailwind/react";
import Link from 'next/link'
import Image from 'next/image';

const cats = [
    { category: "Women", text: "Spring 2024", link: "images/banner-01.jpg" },
    { category: "Man", text: "Spring 2024", link: "./images/banner-02.jpg" },
    { category: "Accessories", text: "New Trend", link: "./images/banner-03.jpg" }
];

function Category() {
    return (
        <section className='container mx-auto mt-14 mb-20'>
            <div className="mg-6 grid grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    cats.map((item) => {
                        return (
                            <a href="#" className="group relative block border-2 bg-primary" key={item.link}>
                                <Image
                                    src={"/" + item.link}
                                    className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity group-hover:opacity-50"
                                    alt="categories banner"
                                    width={300}
                                    height={300}
                                />
                                <div className="relative p-4 sm:p-6 lg:p-8">
                                    <p className="text-2xl font-medium uppercase tracking-widest text-primary">{item.category}</p>
                                    <p className="text-lg font-bold text-gray-700 sm:text-lg">{item.text}</p>
                                    <div className="mt-32 sm:mt-48 lg:mt-64">
                                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                            <button className='uppercase rounded-none bg-white hover:bg-primary text-primary hover:text-white p-3 transition'>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        );
                    })
                }
            </div>
        </section>
    )
}

export default Category

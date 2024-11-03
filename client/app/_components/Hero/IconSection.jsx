import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from 'next/image';

const myContent = [
  { text: "NEW ARRIVALS", link: "./images/banner-15.jpg" },
  { text: "GAMING 4K", link: ".//images/banner-25.jpg" },
];

function IconSection() {

  {
    myContent.map((item) => {
      return (
        <div className='relative' key={item.link}>
          <Image src={item.link} alt={item.text} className='w-[100%]' width={300} height={300} />
          <Card className="w-1/2 h-1/2 absolute top-1 left-1 bg-transparent border-none shadow-none text-left">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-[#222] uppercase text-2xl font-normal">
                Lifestyle Collection
              </Typography>
              <Typography variant="h2" className="mb-2 text-[#222] font-bold uppercase">
                {item.text}
              </Typography>
              <div className='flex gap-4'>
                <Typography variant="h4" className="mb-2 text-[#222] text-3xl uppercase">
                  Sale Up To
                </Typography>
                <Typography variant="h4" className="mb-2 text-red-600 text-3xl uppercase">
                  30% Off
                </Typography>
              </div>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-[#222] uppercase text-md font-normal">
                Get Free Shipping on orders over $99.00
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              {/* <Button className='uppercase rounded-none'>Shop Now</Button> */}
              <a href="#" className="inline-block">
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
              </a>
            </CardFooter>
          </Card>
        </div>
      );
    })
  }

};

export default IconSection;

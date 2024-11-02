"use client";
import React from 'react'
import HeroPage from '../_components/HeroPage'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { Mail, MapPinCheckInside, Phone } from 'lucide-react';

function Contact() {
  return (
    <div>
      {/* <HeroPage title={"Contact"} bg={"/_next/image?url=%2F.%2Fimages%2Fabout-bg.jpg&w=3840&q=75"}/> */}
      <HeroPage title={"Contact"} />

      <div className="container">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 lg:gap-8 mt-16 border-[1px] p-20">
          <div className='col-span-2 xl:border-r-[1px] lg:border-r-0 pr-10'>
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray" className='text-left'>Send Us A Message</Typography>
              <form className="mt-8 mb-2 w-full">
                <div className="mb-1 flex flex-col gap-6">
                  <Input type="email" label="Your Email Address" />
                  <Textarea label="How Can We Help?" />
                </div>

                <Button className="mt-6 uppercase hover:bg-primary" fullWidth>
                  Submit
                </Button>
              </form>
            </Card>
          </div>

          <div className='col-span-1 '>
            <div className='flex gap-5 mb-10'>
              <div><MapPinCheckInside className='text-primary' /></div>
              <div>
                <h3 className='text-2xl'>Address</h3>
                <p className='text-gray-500'>Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
              </div>
            </div>

            <div className='flex gap-5 mb-10'>
              <div><Phone className='text-primary' /></div>
              <div >
                <h3 className='text-2xl'>Lets Talk</h3>
                <p className='text-gray-500'>+1 800 1236879</p>
              </div>
            </div>

            <div className='flex gap-5 mb-10'>
              <div><Mail className='text-primary' /></div>
              <div >
                <h3 className='text-2xl'>Sale Support</h3>
                <p className='text-gray-500'>contact@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

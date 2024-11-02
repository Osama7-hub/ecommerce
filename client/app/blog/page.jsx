"use client";
import React from 'react'
import HeroPage from '../_components/HeroPage'
import BlogCard from './components/BlogCard'
import { Card, Chip, Input, List, ListItem, ListItemPrefix, ListItemSuffix, Typography } from '@material-tailwind/react'
import { Search } from 'lucide-react';

function Blog() {
  return (
    <div>
      {/* <HeroPage title={"Blog"} bg={"/_next/image?url=%2F.%2Fimages%2Fabout-bg.jpg&w=3840&q=75"}/> */}
      <HeroPage title={"Blog"} />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 lg:gap-8 mt-10">
          <div className="lg:col-span-2 lg:pr-28 sm:pr-0">
            <BlogCard
              src={"./images/blog-01.jpg"}
              subject={"8 Inspiring Ways to Wear Dresses in the Winter"}
              content={"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"}
              day={22}
              date={"Jan 2018"}
            />
            <BlogCard
              src={"./images/blog-02.jpg"}
              subject={"The Great Big List of Men’s Gifts for the Holidays"}
              content={"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"}
              day={18}
              date={"Jan 2018"}
            />
            <BlogCard
              src={"./images/blog-03.jpg"}
              subject={"5 Winter-to-Spring Fashion Trends to Try Now"}
              content={"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"}
              day={16}
              date={"Jan 2018"}
            />
          </div>

          <div className="mt-10">
            <div className="search">
              <Input type="search" label="Search" icon={<Search className='w-[20px] h-[20px]' />} />
            </div>

            <div className="categories mt-10">
              <h2 className='text-2xl uppercase'>Categories</h2>
              <Card className="shadow-none">
                <List className='rounded-none'>
                  <ListItem className='border-b-[1px] rounded-none'>Men</ListItem>
                  <ListItem className='border-b-[1px] rounded-none'>Women</ListItem>
                  <ListItem className='border-b-[1px] rounded-none'>Shoes</ListItem>
                  <ListItem className='border-b-[1px] rounded-none'>Watches</ListItem>
                  <ListItem className='border-b-[1px] rounded-none'>Accessories</ListItem>
                </List>
              </Card>
            </div>

            <div className="featured-products mt-10">
              <h2 className='text-2xl uppercase'>Featured Products</h2>
              <Card className="shadow-none">
                <List>
                  <ListItem>
                    <ListItemPrefix>
                      <img src="./images/product-min-01.jpg" alt="PRODUCT" />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">White Shirt With Pleat Detail Back</Typography>
                      <Typography variant="small" color="gray" className="font-normal">$19.00</Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <img src="./images/product-min-02.jpg" alt="PRODUCT" />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">Converse All Star Hi Black Canvas</Typography>
                      <Typography variant="small" color="gray" className="font-normal">$39.00</Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <img src="./images/product-min-03.jpg" alt="PRODUCT" />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">Nixon Porter Leather Watch In Tan</Typography>
                      <Typography variant="small" color="gray" className="font-normal">$17.00</Typography>
                    </div>
                  </ListItem>
                </List>
              </Card>
            </div>

            <div className="archive mt-10">
              <h2 className='text-2xl uppercase'>Archive</h2>
              <Card className="shadow-none">
                <List>
                  <ListItem>
                    July 2018
                    <ListItemSuffix>
                      <Chip
                        value="9"
                        variant="ghost"
                        size="sm"
                        className="rounded-full text-primary"
                      />
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem>
                    June 2018
                    <ListItemSuffix>
                      <Chip
                        value="39"
                        variant="ghost"
                        size="sm"
                        className="rounded-full text-primary"
                      />
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem>
                    May 2018
                    <ListItemSuffix>
                      <Chip
                        value="29"
                        variant="ghost"
                        size="sm"
                        className="rounded-full text-primary"
                      />
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem>
                    April 2018
                    <ListItemSuffix>
                      <Chip
                        value="35"
                        variant="ghost"
                        size="sm"
                        className="rounded-full text-primary"
                      />
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem>
                    March 2018
                    <ListItemSuffix>
                      <Chip
                        value="22"
                        variant="ghost"
                        size="sm"
                        className="rounded-full text-primary"
                      />
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem>
                    February 2018
                    <ListItemSuffix>
                      <Chip
                        value="32"
                        variant="ghost"
                        size="sm"
                        className="rounded-full text-primary"
                      />
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem>
                    January 2018
                    <ListItemSuffix>
                      <Chip
                        value="21"
                        variant="ghost"
                        size="sm"
                        className="rounded-full text-primary"
                      />
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem>
                    December 2017
                    <ListItemSuffix>
                      <Chip
                        value="26"
                        variant="ghost"
                        size="sm"
                        className="rounded-full text-primary"
                      />
                    </ListItemSuffix>
                  </ListItem>
                </List>
              </Card>
            </div>

            <div className="tags mt-10">
              <h2 className='text-2xl mb-3'>Tags</h2>
              <div className='flex flex-wrap items-center gap-3'>
                <Chip variant="outlined" value="Fashion" className='uppercase w-fit' />
                <Chip variant="outlined" value="Lifestyle" className='uppercase w-fit' />
                <Chip variant="outlined" value="Denim" className='uppercase w-fit' />
                <Chip variant="outlined" value="Streetstyle" className='uppercase w-fit' />
                <Chip variant="outlined" value="Crafts" className='uppercase w-fit' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

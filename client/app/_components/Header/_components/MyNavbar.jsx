"use client"
import React, { useState, useEffect, useContext } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Dialog,
  DialogHeader,
  Drawer,
} from "@material-tailwind/react";

import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Footprints, FormInput, Glasses, Laptop, Search, Shirt, ShoppingBag, ShoppingCart, User, UserRound, Watch, X } from "lucide-react";
import Link from 'next/link'

import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import { UserButton } from "@clerk/nextjs";
import { CartContext } from '../../../_context/CartContext';
import CartApis from '../../../_utils/CartApis';
import Cart from '../../Cart'

const navListMenuItems = [
  {
    title: "Men",
    description: "Find the perfect solution for your needs.",
    icon: Shirt,

  },
  {
    title: "Women",
    description: "Meet and learn about our dedication",
    icon: User,
  },
  {
    title: "Watches",
    description: "Find the perfect solution for your needs.",
    icon: Watch,
  },
  {
    title: "Shose",
    description: "Learn how we can help you achieve your goals.",
    icon: Footprints,
  },
  {
    title: "Accessories",
    description: "Reach out to us for assistance or inquiries",
    icon: Glasses,
  },
  {
    title: "Tech",
    description: "Find the perfect solution for your needs.",
    icon: Laptop,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <Link href="#" key={key} className=''>
        <MenuItem className="flex items-center gap-3 rounded-lg hover:dark:!bg-blue-gray-900">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="flex items-center text-sm font-bold dark:text-blue-gray-200">{title}</Typography>
            <Typography variant="paragraph" className="text-xs !font-medium text-blue-gray-500">{description}</Typography>
          </div>
        </MenuItem>
      </Link>
    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 dark:text-white hover:text-primary bg-inherit hover:bg-inherit"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
              Categories
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block dark:bg-[#23272f] dark:border-[#23272f]">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link href="/" className="font-medium dark:text-white">
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-primary hover:bg-inherit">Home</ListItem>
      </Link>
      <Link href="/shop" className="font-medium dark:text-white">
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-primary hover:bg-inherit">Shop</ListItem>
      </Link>

      <NavListMenu />
      <Link href="/blog" className="font-medium dark:text-white">
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-primary hover:bg-inherit">Blog</ListItem>
      </Link>

      <Link href="/about" className="font-medium dark:text-white">
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-primary hover:bg-inherit">About</ListItem>
      </Link>

      <Link href="/contact" className="font-medium dark:text-white">
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-primary hover:bg-inherit">Contact</ListItem>
      </Link>
    </List>
  );
}

export function MyNavbar() {

  const [openNav, setOpenNav] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // const [isLoggedIn, setIsLoggedIn] = useState()
  const { user } = useUser();
  // const [openCart, setOpenCart] = useState(false)
  const { cart, setCart } = useContext(CartContext)
  const [openRight, setOpenRight] = useState(false);

  // const handleOpen = () => setOpenCart(!openCart);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  // useEffect(() => {
  // 	setIsLoggedIn(window?.location?.href.toString().includes('sign-in'))
  // }, [])

  // const { user } = useUser();
  useEffect(() => {
    user && getCartItems();
  }, [user])

  const getCartItems = () => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(res => {
      // console.log('response from cart items', res?.data?.data)
      res?.data?.data.forEach(citem => {
        setCart((oldCart) => [
          ...oldCart,
          {
            id: citem.id,
            product: citem?.attributes?.products?.data[0]
          }
        ])
      })

    })
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="max-w-full px-4 py-2 rounded-none border-none z-[99999] absolute shadow-none top-0 left-0">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-gray-800 dark:text-white flex items-center gap-2">
          {/* <Image src='/logo.svg' alt='logo' width={0} height={0} sizes="100vw" className="w-full h-auto" /> */}
          <ShoppingCart className="text-primary" /> Store
        </Link>

        <div className="hidden lg:block">
          <NavList />
        </div>

        {
          !user
            ?
            <div className="hidden gap-1 lg:flex items-center">
              {/* <Button variant="text" size='sm'><Search className='text-blue-gray-600 dark:text-blue-gray-100 h-5' /></Button> */}
              <Link href="/sign-in" className="text-sm font-semibold leading-6 text-gray-900 inline-block"><UserRound className='text-blue-gray-600 dark:text-blue-gray-100 h-5' /></Link>
            </div>
            :
            <div className='items-center gap-5 hidden lg:flex relative'>
              {/* <Button variant="text" size='sm'><Search className='text-blue-gray-600 dark:text-blue-gray-100 h-5' /></Button> */}
              <Button variant="text" size="sm" onClick={openDrawerRight} className='flex gap-1 z-50 text-blue-gray-600 dark:text-blue-gray-100 hover:text-primary bg-inherit hover:bg-inherit relative'>
                <ShoppingBag className='text-blue-gray-600 dark:text-blue-gray-100 hover:text-primary h-5' />
                <span className='absolute top-0 right-0 rounded-full bg-primary text-white w-[20px] h-[20px]' style={{lineHeight: "20px"}}>{cart?.length}</span>
              </Button>

              <UserButton afterSignOutUrl="/" />
            </div>
        }
        <IconButton
          variant="text" color="blue-gray" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          {
            !user
              ?
              <div className="gap-1 lg:flex items-center">
                <a href="/sign-in" className="text-sm font-semibold leading-6 text-gray-900 inline-block"><UserRound className='text-blue-gray-600 dark:text-blue-gray-100 h-5' /></a>
              </div>
              :
              <div className='flex items-center gap-5 lg:flex'>
                {/* <Button variant="text" size='sm'><Search className='text-blue-gray-600 dark:text-blue-gray-100 h-5' /></Button> */}
                <Button variant="text" size="sm" className='flex gap-1 z-50 text-blue-gray-600 dark:text-blue-gray-100'>
                  <ShoppingBag onClick={openDrawerRight} className='text-blue-gray-600 dark:text-blue-gray-100 h-5' />
                  ({cart?.length})
                </Button>
                <UserButton afterSignOutUrl="/" />
              </div>
          }
        </div>
      </Collapse>

      {openRight &&
        <Drawer placement="right" open={openRight} onClose={closeDrawerRight} className="!max-h-none p-4 dark:bg-bgDark dark:shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className='flex gap-2 text-gray-800 dark:text-gray-200'>
              <ShoppingCart />
              <span>{cart?.length} Items</span>
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawerRight}
            >
              <X className='text-gray-800 dark:text-gray-200' />
            </IconButton>
          </div>
          <Cart />
        </Drawer>}
    </Navbar>

  );
}
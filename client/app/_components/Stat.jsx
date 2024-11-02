import { Car, Clock, CreditCard, HandCoins } from 'lucide-react'
import React from 'react'

function Stat() {
    return (
        <div className='container mx-auto'>
            <dl className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 shadow-sm">
                <div className='flex gap-3 items-center justify-center'>
                    <Car className='w-14 h-14' />
                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="text-xl font-medium text-primary">Fast Delivery</dt>
                        <dd className="font-light text-gray-400 md:text-[16px]">Start from $10</dd>
                    </div>
                </div>


                <div className='flex gap-3 items-center justify-center'>
                    <HandCoins className='w-14 h-14' />
                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="text-xl font-medium text-primary">Money Guarantee</dt>
                        <dd className="font-light text-gray-400 md:text-[16px]">7 Days Back</dd>
                    </div>
                </div>

                <div className='flex gap-3 items-center justify-center'>
                    <Clock className='w-14 h-14' />
                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="text-xl font-medium text-primary">365 Days</dt>
                        <dd className="font-light text-gray-400 md:text-[16px]">For free return</dd>
                    </div>
                </div>

                <div className='flex gap-3 items-center justify-center'>
                    <CreditCard className='w-14 h-14' />
                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="text-xl font-medium text-primary">Payment</dt>
                        <dd className="font-light text-gray-400 md:text-[16px]">Secure system</dd>
                    </div>
                </div>
            </dl>
        </div>
    )
}

export default Stat
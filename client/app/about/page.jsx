import React from 'react'
import HeroPage from '../_components/HeroPage'

function About() {
  return (
    <div>
      <HeroPage title={"About"} />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 lg:gap-8 mt-10 mb-[148px]">
          <div className='lg:col-span-2 pt-[20px] pr-[85px]'>
            <h2 className='text-[25px] leading-5 pb-[26px]'>Our Story</h2>
            <p className='text-gray-500 leading-6 pb-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.</p>
            <p className='text-gray-500 leading-6 pb-[26px]'>Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.</p>
            <p className='text-gray-500 leading-6 pb-[26px]'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
          </div>

          <div className='lg:col-span-1'>
            <div className="border-img1">
              <div className="hov-img block overflow-hidden">
                <img src="./images/about-01.jpg" alt="IMG" className='w-full align-middle border-none hover:scale-110 transition-all duration-500' />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 lg:gap-8 mt-10">
        <div className='lg:col-span-1'>
            <div className="border-img2">
              <div className="hov-img block overflow-hidden">
                <img src="./images/about-02.jpg" alt="IMG" className='w-full align-middle border-none hover:scale-110 transition-all duration-500' />
              </div>
            </div>
          </div>

          <div className='lg:col-span-2 pt-[20px] pl-[85px]'>
            <h2 className='text-[25px] leading-5 pb-[26px]'>Our Mission</h2>
            <p className='text-gray-500 leading-6 pb-[26px]'>
            Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.
            </p>
            <p className='text-gray-500 leading-6 pb-[26px]'>Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.</p>
            <p className='text-gray-500 leading-6 pb-[26px]'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

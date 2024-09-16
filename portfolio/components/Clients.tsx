import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials} from '@/data'

const Clients = () => {
  return (
    <section id="work-experience" className="py-20">
      <h1 className="heading">
      Endorsements from Previous 
        <span className="text-purple"> Company Leaders</span>
      </h1>
      <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
       </div>
       <div className="mt-10 flex items-center flex-col sm:flex-row gap-4 w-full justify-around">
      <div className="flex flex-row  justify-around w-full items-center" >
      <div >
                <img
                  src="/jpmc1.svg"
                  className="w-44 p-4 bg-white rounded-lg "
                />
              </div>
              <div className="">
                <img
                  src="/saviDurga.png"
                  className="w-40 bg-white rounded-lg"
                />
      </div>

      </div>
              
              <div className="flex flex-row justify-around w-full  items-center">
                <div >
                  <img
                    src="/v2_cropped.webp"
                    className="w-40"
                  />
                </div>
                <div className="">
                  <img
                    src="/jkb_logo.png"
                    className="h-14  w-36"
                  />
                </div>
              </div>
        </div>
    </section>
  )
}

export default Clients
import React from 'react'
import { BentoGrid } from './ui/bento-grid'
import { BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about' className='h-full my-5'>
        <BentoGrid  className="w-full h-full " >
            {gridItems.map((item,i) => (
                <BentoGridItem
                id={item.id}
                key={i}
                title={item.title}
                description={item.description}
                className={item.className}
                img={item.img}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}
                spareImg={item.spareImg}
              />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid
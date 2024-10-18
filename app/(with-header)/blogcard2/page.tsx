import React from 'react'
import Image from 'next/image'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

const blogcard2 = () => {
  return (
    <div className='pt-5'>
       <div className='bg-sucess '>
    <div className='container pt-12 pb-40 text-start flex flex-col gap-8'>
        <div className='flex flex-col gap-1'>
            <div className='text-xl font-semibold text-tertiory'>
            Achieve Your Fitness Goals: Insights from our center
                </div>
            <div className='text-sm text-tertiory'>
            Posted on : 15 October 2023
            </div>
        </div>
        <div>
            <Breadcrumb>
            <BreadcrumbList>
<BreadcrumbItem>
  <BreadcrumbLink href="/">
  Home
  </BreadcrumbLink>
</BreadcrumbItem>
<BreadcrumbSeparator />
<BreadcrumbItem>
      <BreadcrumbLink href="blogs">Blogs</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
<BreadcrumbItem>
  <BreadcrumbPage className='text-white hover:text-secondary'>
  Flexit
  </BreadcrumbPage>
</BreadcrumbItem>
</BreadcrumbList>
</Breadcrumb>
        </div>
</div>   
</div>
<div className='container  h-[1335px]'>
<div className='flex flex-col gap-16 absolute top-80'>
  <div className='flex flex-col items-center' >
  <Image 
   src="/bc5.png"
  alt="blogcard5"
  width={1280}
  height={548}>

  </Image>
  </div>
  <div>
  <div className='flex flex-col gap-5'>
    <div className='text-xl tracking-widest font-semibold underline decoration-sucess'>Introduction</div>
    
      <div className='text-md tracking-widest'>Introducing our revolutionary fitness companion, the PowerFlex Pro-XTM. Elevate your workout experience with this state-of-the-art gym product designed for optimal performance and results. Engineered with cutting-edge technology, the PowerFlex Pro-X seamlessly blends functionality and comfort, providing a versatile solution for users of all fitness levels.
With its sleek design and durable construction, this fitness powerhouse offers a comprehensive range of exercises to target every muscle group. The intuitive interface and customizable settings ensure a personalized workout tailored to your fitness goals. Whether youre a seasoned athlete or just starting your fitness journey, the PowerFlex Pro-X is your ultimate partner in achieving peak performan.

</div>
<div className='text-md tracking-widest'>Say goodbye to monotony with the variety of workout options this product offers. From strength training to cardio, the PowerFlex Pro-X adapts to your evolving fitness needs. Compact and easy to use, its the perfect addition to any home gym or professional fitness facility.
Take your fitness journey to the next level with the PowerFlex Pro-X where innovation meets motivation, and results become reality.Other Information of MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb)
Biozyme Performance Whey- Recognized by the World!
MuscleBlaze Biozyme Performance Whey is crafted exclusively for fitness and muscle-building champions who want their protein supplement to be as effective as their efforts. It is scientifically designed with Enhanced Absorption Formula (EAF®) to maximize the bioavailability of protein for the Indian bodies. Its a part of MBs pioneering innovation- the BIOZYME series. The other fitness supplements in this iconic series are Biozyme Whey Iso-Zero & Biozyme Whey Protein.Other Information of MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb)
Biozyme Performance Whey- Recognized by the World!
MuscleBlaze Biozyme Performance Whey is crafted exclusively for fitness and muscle-building champions who want their protein supplement to be as effective as their efforts. It is scientifically designed with Enhanced Absorption Formula (EAF®) to maximize the bioavailability of protein for the Indian bodies. Its a part of MBs pioneering innovation- the BIOZYME series. The other fitness supplements in this iconic series are Biozyme Whey Iso-Zero & Biozyme Whey Protein.  Our revolutionary fitness companion, the PowerFlex Pro-XTM. Elevate your workout experience with this state-of-the-art gym product designed for optimal performance and results. Engineered with cutting-edge technology, the PowerFlex Pro-X seamlessly blends functionality and comfort, providing a versatile solution for users of all fitness levels.
With its sleek design and durable construction, this fitness powerhouse offers a comprehensive range of exercises to target every muscle group. The intuitive interface and customizable settings ensure a personalized workout tailored to your fitness goals. Whether youre a seasoned athlete or just starting your fitness journey, the PowerFlex Pro-X is your ultimate partner in achieving peak performa.</div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default blogcard2

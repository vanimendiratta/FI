
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import Image from 'next/image'

const blogs = () => {
  return (
    <div className='pt-5'>
    <div className='bg-sucess'>
        <div className='container pt-12 pb-40 text-start flex flex-col gap-8'>
            <div className='flex flex-col gap-1'>
                <div className='text-xl font-semibold text-tertiory'>
                    Blogs
                    </div>
                <div className='text-sm text-tertiory'>
                This blog will help you to get more information about your healthy diet , nutrients etc.
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
      <BreadcrumbPage className='text-white hover:text-secondary'>
      Blogs
      </BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
  </Breadcrumb>
            </div>
 </div>   
    </div>
    <div className='bg-tertiory h-[1300px]'></div>
    <div className='container  absolute top-80'>
<div className='flex flex-col gap-16 items-center'>
<div className='grid-cols-3 grid gap-12  '>
    <a href="blogcard1" className='flex flex-col gap-6 border-b-2 tracking-wider border-sucess  w-[393px] '>
       <div> 
        <Image
        src="/blogcard1.png"
        alt="blogcard1"
        width={393}
        height={497}
></Image>
</div>
<div>
    <div className='font-semibold text-md text-sucess'>15 October 2023</div>
    <div className='text-xl font-semibold'>Achieve Your Fitness Goals: Insights from Our Center</div>
</div>
    </a>
    <a href="blogcard2" className='flex flex-col gap-6 border-b-2 tracking-wider border-sucess pb-2 w-[393px] '>
    <div>
        <Image
        src="/blogcard2.png"
        alt="blogcard2"
        width={393}
        height={497}
></Image>
    </div>
    <div>
    <div className='font-semibold text-md text-sucess'>21 September 2023</div>
    <div className='text-xl font-semibold'>Achieve Your Fitness Goals: Insights from Our Center</div>
</div>
</a>
<a href="blogcard3" className='flex flex-col gap-6 border-b-2 tracking-wider border-sucess pb-2 w-[393px] '>
    <div>
        <Image
        src="/blogcard3.png"
        alt="blogcard3"
        width={393}
        height={497}
></Image>
    </div>
    <div>
    <div className='font-semibold text-md text-sucess'>21 February 2024</div>
    <div className='text-xl font-semibold'>Achieve Your Fitness Goals: Insights from Our Center</div>
</div>
    </a>
</div>

<div className='grid-cols-3 grid gap-12'>
    <a href="blogcard1" className='flex flex-col gap-6 border-b-2 tracking-wider border-sucess pb-2 w-[393px] '>
       <div> <Image
        src="/blogcard1.png"
        alt="blogcard1"
        width={393}
        height={497}
></Image>
</div>
<div>
    <div className='font-semibold text-md text-sucess'>15 October 2023</div>
    <div className='text-xl font-semibold'>Achieve Your Fitness Goals: Insights from Our Center</div>
</div>
    </a>
    <a href="blogcard2" className='flex flex-col gap-6 border-b-2 tracking-wider border-sucess pb-2 w-[393px] '>
    <div>
        <Image
        src="/blogcard2.png"
        alt="blogcard2"
        width={393}
        height={497}
></Image>
    </div>
    <div>
    <div className='font-semibold text-md text-sucess'>21 September 2023</div>
    <div className='text-xl font-semibold'>Achieve Your Fitness Goals: Insights from Our Center</div>
</div>
</a>
<a href="blogcard3" className='flex flex-col gap-6 border-b-2 tracking-wider border-sucess  w-[393px] '>
    <div>
        <Image
        src="/blogcard3.png"
        alt="blogcard3"
        width={393}
        height={497}
></Image>
    </div>
    <div>
    <div className='font-semibold text-md text-sucess'>21 February 2023</div>
    <div className='text-xl font-semibold'>Achieve Your Fitness Goals: Insights from Our Center</div>
</div>
    </a>
</div>

</div>
</div>
    </div>
  )
}

export default blogs

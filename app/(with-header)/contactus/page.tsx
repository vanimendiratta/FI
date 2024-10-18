import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import Image from 'next/image'

const contactus = () => {
  return (
    <div className='py-5 bg-tertiory' >
        
        <div className='bg-sucess h-[318px] w-full py-4 '>
            <div className='container mx-auto flex flex-col gap-4'>
                <div>
            <div className='text-2xl font-bold text-tertiory'>Contact Us</div>
            <div className='text-sm font-semibold text-tertiory'>Fill up the form and our team will get back to you within 24 hours.</div>
            </div>

            <div>
            <div>
     <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage className='text-white hover:text-secondary'>Contact Us</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

     </div>
            </div>
            </div>
       
            </div>
        <div className='flex justify-between'>
            <div className=' bg-tertiory shadow-2xl rounded-xl absolute top-80 left-28'>
              <div>
                <div className='p-5 flex flex-col gap-4'>
<div className='flex flex-col gap-1'>
  <div className='font-semibold text-start text-sucess'>Name</div>
  <Input type="Name" placeholder="Enter your Name" />
</div>

<div className='flex flex-col gap-1'>
  <div className='font-semibold text-start text-sucess'>Email</div>
  <Input type="email" placeholder="Enter your Email" />
</div>

<div className='flex flex-col gap-1'>
  <div className='font-semibold text-start text-sucess'>Mobile</div>
  <Input type="Mobile" placeholder="Enter your Mobile Number" />
</div>

<div className='flex flex-col gap-1'>
  <div className='font-semibold text-start text-sucess'>How can we help you?</div>
 <div><Textarea placeholder="Type your message here." /></div>
</div>

<div>
<Button className='text-center font-semibold text-tertiory px-48 py-4'>Submit</Button>
</div>
</div>
</div>

            </div>
            <div className=' absolute top-56 right-16 '>
                <Image 
                src="/contactus.png"
                alt="contactus"
                width={416}
                height={512}>

                </Image>
            </div>
            <div className=' bg-tertiory rounded-xl h-[699px]'>
                <div>
                    <form/>
                </div>
            </div>
        </div>
      
<div className='container mx-auto pt-5 absolute -bottom-52 right-12'>
        <div className=' bg-shade rounded-xl '>
            <div className='p-14 flex gap-24'>
                <div>
                    <div className='text-secondary font-bold text-xl'>A Headline that Grab Users Attentions </div>
                    <div className='text-grey text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                </div>
                <div className='flex gap-6'>
                    <button className='bg-sucess px-9 py-4 text-tertiory font-semibold items-center rounded-xl'>Get Started</button>
                    <button className='bg-tertiory px-9 py-4 text-secondary items-center rounded-xl font-semibold'>View More</button>
                </div>
            </div>
        </div>
        </div>

      
    </div>
  )
}

export default contactus

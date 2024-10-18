import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const login = () => {
  return (
  
     
 
  <div className='py-28'>
  <div className='flex '>
      <div className='bg-shade text-xl flex flex-col gap-10 px-14 py-12 basis-1/2 '>
        <div>
        <a href="/">
      
      <Image
       src="/logo.png"
       alt="logo"
       width={130}
       height={104}/>
    </a>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
        <div className='text-center tracking-widest font-semibold flex flex-col gap-1'>
            <span className='text-secondary text-2xl'>Get your sport</span>
            <span className='text-sucess text-2xl'>accessories at your</span>
            <span className='text-secondary text-2xl'>doorstep with one click</span>
        </div>
        
        <Carousel className='w-[448px]' >
  <CarouselContent className='items-center'>
    <CarouselItem>
      <Image
            src="/loginsignup.png"
            alt="loginsignup"
            width={448}
            height={341}>

            </Image>
            </CarouselItem>
    <CarouselItem><Image
            src="/loginsignup.png"
            alt="loginsignup"
            width={448}
            height={341}>

            </Image></CarouselItem>
    <CarouselItem><Image
            src="/loginsignup.png"
            alt="loginsignup"
            width={448}
            height={341}>

            </Image></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
            
        
        </div>
      </div>

      <div className='flex flex-col  px-20 justify-center bg-tertiory basis-1/2'>
        <div className='fex flex-col gap-4 text-start'>
            <div className='text-grey'>Unlock a World of Shopping Delights:</div>
            <div className='text-secondary text-2xl font-semibold'>Sign In</div>
        </div>
        <div className='pt-6 flex flex-col gap-7 '>
            <div className='gap-2 flex flex-col'>
            <div className='text-sucess tracking-wider'>Email/Phone No.</div>
            <div>
            <Input className='border-2 border-sucess py-5 px-5' type="email" placeholder="Enter your Email Id or Number"/>
            </div>
        </div>
        <div className='gap-2 flex flex-col'>
            <div className='text-sucess tracking-wider'>
                Password
                </div>
                <div>
                    <Input className='border-2 border-sucess py-5' type="password" placeholder='Enter Password'/>
                </div>
                <div>
                    <a className='text-sucess text-sm' href="forgot">Forgot Password</a>
                </div>
                </div>
                <div>
                    <button className='text-tertiory bg-sucess px-44 py-3 rounded-xl '>Submit</button>
                </div>
                </div>
      </div>
    </div>
    </div>


   
  )
}

export default login

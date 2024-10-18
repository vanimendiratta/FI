import React from 'react'
import Image from 'next/image'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
  
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const verification = () => {
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
        <div className='text-secondary text-3xl font-semibold'>Verification</div>
            <div className='text-grey text-xs'>Please enter the code sent on your given email id to verify and reset your account password.</div>
            
        </div>
        <div className='pt-6 flex flex-col gap-7 '>
        <InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

        <div className='gap-2 flex flex-col'>
            
                <div className='flex gap-64 '>
                    <a>Did you receive the code?</a>
                    <a className='text-sucess text-sm' href="forgot">Resend Code</a>
                </div>
                </div>
                <div>
                    <button className='text-tertiory bg-sucess px-64 py-3 rounded-xl j '>Verify</button>
                </div>
               
      </div>
      </div>
    </div>
    </div>


   
  )
}

export default verification


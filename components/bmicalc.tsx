import React from 'react'
import Image from 'next/image';
import { Slider } from "@/components/ui/slider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const Bmicalc = () => {
  return (
    <div className='px-20 py-16'>
      <h1 className='text-center text-3xl font-semibold py-4'>BMI CALCULATOR</h1>
      <div className='py-4 '>
      <div className='flex gap-44 justify-center'>
        <div className='w-[468px]'>
        <div className='font-semibold text-2xl py-4'>
          Easy Steps to Calculate BMI
        </div>
        <div className='py-3 text-lg text-justify'>
          <p>
            This calculator can be used to estimate your body mass index .This calculator can provide some simple guidance about your health and weight.  
            </p>
            </div>
            <div className='py-5 flex gap-4 '>
              <button className='rounded-xl flex bg-sucess gap-2 text-tertiory py-3 px-14'>
                <div>
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 12C11.43 12 13 13.57 13 15.5C13 17.43 11.43 19 9.5 19C7.57 19 6 17.43 6 15.5C6 13.57 7.57 12 9.5 12ZM9.5 10C6.46 10 4 12.46 4 15.5C4 18.54 6.46 21 9.5 21C12.54 21 15 18.54 15 15.5C15 14.34 14.64 13.27 14.03 12.38L18 8.42V11H20V5H14V7H16.58L12.61 10.97C11.73 10.36 10.66 10 9.5 10Z" fill="white"/>
</svg>
                </div>
                <div>
                  Male
                  </div>
              </button>
              <button className='rounded-xl shadow-xl flex text-sucess gap-2  py-3 px-14 ' >
                <div>
                  <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 10.2812C17.5 7.24125 15.04 4.78125 12 4.78125C8.96 4.78125 6.5 7.24125 6.5 10.2812C6.5 12.9812 8.44 15.2112 11 15.6812V17.7812H9V19.7812H11V21.7812H13V19.7812H15V17.7812H13V15.6812C15.56 15.2112 17.5 12.9812 17.5 10.2812ZM8.5 10.2812C8.5 8.35125 10.07 6.78125 12 6.78125C13.93 6.78125 15.5 8.35125 15.5 10.2812C15.5 12.2112 13.93 13.7812 12 13.7812C10.07 13.7812 8.5 12.2112 8.5 10.2812Z" fill="#2AA952"/>
</svg>
</div>
                <div>
                  Female
                  </div>
              </button>
            </div>

     

      <div className='flex flex-col gap-12'>
        <div className='flex flex-col gap-1'>
          <div className='font-semibold'>
            Age
            </div>
            <div>
            <Slider defaultValue={[33]} max={100} step={1} />
            </div>
            <div className='text-xs text-grey flex justify-between'>
              <div>15 Years</div>
              <div>120 Years</div>
            </div>
          
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex justify-between'>
          <div className='font-semibold'>
            Height
            </div>
            <div>
            <DropdownMenu>
  <DropdownMenuTrigger className='flex gap-4 px-4 py-1 items-center shadow-xl rounded-xl'>
    <div>Inches</div>
    <div>
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.5L5 5.5L10 0.5H0Z" fill="#5BB955"/>
</svg>
      </div></DropdownMenuTrigger>
  <DropdownMenuContent className='bg-tertiory'>
    <DropdownMenuLabel>1</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>2</DropdownMenuItem>
    <DropdownMenuItem>3</DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>
</div>
</div>
            <div>
            <Slider defaultValue={[33]} max={100} step={1} />
            </div>
            <div className='text-xs text-grey flex justify-between'>
              <div>30 Cm</div>
              <div>200 Cm</div>
            </div>
          
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex justify-between'>
          <div className='font-semibold'>
            Weight
            </div>
            <div>
            <DropdownMenu>
  <DropdownMenuTrigger className='flex gap-4 px-4 py-1 items-center shadow-xl rounded-xl'>
    <div>Kg</div>
    <div>
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.5L5 5.5L10 0.5H0Z" fill="#5BB955"/>
</svg>
      </div></DropdownMenuTrigger>
  <DropdownMenuContent className='bg-tertiory'>
    <DropdownMenuLabel>1</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>2</DropdownMenuItem>
    <DropdownMenuItem>3</DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

            </div>
            </div>
            <div>
            <Slider defaultValue={[33]} max={100} step={1} />
            </div>
            <div className='text-xs text-grey flex justify-between'>
              <div>10 Kg</div>
              <div>300 Kg</div>
            </div>
          
          </div>
      </div>

      <div className='flex gap-4 py-5 justify-center'>
        <button className='px-10 py-3 bg-sucess text-tertiory rounded-xl'>
          Submit
          </button>
        <button className='px-10 py-3 rounded-xl border-2 border-sucess'>
          Reset
          </button>
      </div>
      </div>
      
<div className='w-[532px]'>
      <div className='flex flex-col text-center gap-7 items-center'>
        <div className='flex flex-col gap-1'>
        <div className='font-semibold text-2xl'>
          Your BMI Result:
          </div>
        <div className='text-3xl text-sucess font-bold'>
19.08
        </div>
        </div>

      <div className='flex flex-col gap-3'>
        <div className='font-semibold text-lg text-grey'>
          Recommendations
          </div>
        <div className='py-2'>
          <p className=''>
            You are currently classified as underweight based on your BMI. Its important to ensure that you are maintaining a balanced and nutritious diet to support your overall health. 
            </p>
            </div>
            </div>
        <div className='items-center'>
          <Image 
        src="/bro.png"
        alt="athlete"
        width={288}
        height={354}
        >

        </Image>
        </div>
        </div>
        </div>
          </div>
          </div>
          <div>
          <p>
            *
            <span className='text-sucess'>
              Note :   
              </span>
              <span>
                   BMI is a general indicator and may not consider individual variations such as muscle mass. Its always advisable to consult with a healthcare professional for a comprehensive health assessment.*
                 </span>
          </p>
          </div>
          </div>
      
    
    
  )
}

export default Bmicalc

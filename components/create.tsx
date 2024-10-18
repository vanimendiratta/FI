import React from 'react'
import Image from 'next/image';

const Create = () => {
  return (
   
    <div className='flex flex-col gap-0 '>
    {/* create */}

    <div className='bg-shade'>
      <div className='container mx-auto lg:flex items-center '>
        <div className='basis-2/3 flex flex-col gap-14'>
        <div className=' text-xl font-semibold'>
          Create your account today and get started for free!
        </div>
        <div className='flex gap-4 '>
<button className='bg-sucess rounded-xl text-sm lg:text-lg text-tertiory px-6 py-3'>Get Started</button>
<button className='flex gap-1 border-2 border-sucess rounded-xl px-6 py-3 items-center'>
  <a href="contactus" className='text-sm lg:text-lg'>Contact Us</a>
<div><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.35938 1.35938L13 6.99995L7.35938 12.6405" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9999 7L1 7" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div></button>
        </div>
        </div>
        <div className='basis-1/3 pt-4 '>
  
        <Image
        src="/contact.png"
        alt="contact"
        width={551}
        height={449}
        >
          </Image></div>
      </div>
    </div>



     

      
      
      
      
      
   {/* download */}
      <div className='bg-[linear-gradient(to_bottom,#000000_0%,#57B248_60%,#000000_100%)]'>
    <div className='container mx-auto py-5 justify-between lg:flex  items-center'>
      <div className='gap-4 flex flex-col'>
        <div className='text-tertiory font-semibold flex gap-1 items-center text-xl'>
          <div>Download the most loved fitness app</div>
          <div><svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_349_16417)">
<path d="M3.59341 22.9725L22.3539 22.9725" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9736 13.7947L22.3539 22.9725L12.9736 32.1504" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_349_16417">
<rect width="31.496" height="31.496" fill="white" transform="matrix(-0.714775 -0.699354 0.714775 -0.699354 22.5127 44.998)"/>
</clipPath>
</defs>
</svg>
</div>
          </div>
        <div className='text-md text-tertiory '>
          Start yor journey with us, join the cult!
        </div>
      </div>
      <div className='items-center pt-2 lg:pt-0'>
      <div className='flex gap-4'>
        <Image
        src="/googleplay2.png"
        alt="googleplay"
        width={134}
        height={43}
        >
        </Image>

        <Image
        src="/appstore2.png"
        alt="applestore"
        width={134}
        height={43}
        >

        </Image>
      </div>
      </div>
</div>
      </div>
    </div>
    
  )
}

export default Create

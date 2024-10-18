import React from 'react'
import Image from 'next/image';

const Download = () => {
  return (
   <div className='bg-[linear-gradient(to_right,#2AA952_0%,#2CC889_57%,#2AA952_100%)] '>
  
    <div className='container mx-auto py-5 lg:justify-between   lg:flex  items-center'>
      
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
      <div className='items-center pt-4 lg:pt-0'>
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
      
   
  
  )
}

export default Download

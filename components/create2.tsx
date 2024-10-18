import React from 'react'
import Image from 'next/image'; 
const create2 = () => {
  return (
    <div className='hidden lg:block'>
    <div className='bg-sucess py-20'>
        <div className='container mx-auto bg-tertiory  '>
<div className='flex justify-between'>
    <div className='basis-2/3 flex flex-col gap-10 py-16 px-20'>
    <h2 className='text-xl font-semibold '>
        Create your account today
        and get started for free!
    </h2>
    <div className='flex gap-6'>
        <a href="login" className='bg-sucess text-tertiory px-8 py-4 rounded-xl shadow-xl'>
Get Started 
        </a>
        <button className='flex items-center gap-1 border-2 border-sucess rounded-xl px-8 py-4'>
<span><a href="contactus">Contact Us</a></span>
<span><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.85938 2.85938L14.5 8.49995L8.85938 14.1405" stroke="black" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.4999 8.5L2.5 8.5" stroke="black" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
        </button>
    </div>

</div>
<div className='basis-1/3'>
<div className='absolute -mt-20 -right-1'>
    <Image
    src="/create2.png"
    alt="create2"
    width={313}
    height={523}>

    </Image>
</div>
</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default create2

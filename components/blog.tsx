import React from 'react'
import Image from 'next/image'

const blog = () => {
  return (
    <div className='hidden lg:block'>
    <div className='container mx-auto py-14 '>
      <div className='flex justify-between items-center '>
        <span className='font-semibold text-xl'>LASTEST BLOG</span>
        <span>
        <svg width="74" height="73" viewBox="0 0 74 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_ddii_249_8372)">
<ellipse cx="37" cy="36.337" rx="32" ry="31.337" fill="#5BB955"/>
</g>
<path d="M37.6523 26.7422L47.9079 36.9978L37.6523 47.2534" stroke="white" stroke-width="3.16832" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M47.9079 36.998L26.0898 36.998" stroke="white" stroke-width="3.16832" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter id="filter0_ddii_249_8372" x="0.076923" y="0.076923" width="73.8462" height="72.52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="0.703297" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_249_8372"/>
<feOffset dx="1.40659" dy="1.40659"/>
<feGaussianBlur stdDeviation="1.40659"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.770667 0 0 0 0 1 0 0 0 0 0.733333 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_249_8372"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="0.703297" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_249_8372"/>
<feOffset dx="-1.40659" dy="-1.40659"/>
<feGaussianBlur stdDeviation="1.40659"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.772549 0 0 0 0 1 0 0 0 0 0.733333 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_249_8372" result="effect2_dropShadow_249_8372"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_249_8372" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="2.81319" operator="erode" in="SourceAlpha" result="effect3_innerShadow_249_8372"/>
<feOffset dx="1.40659" dy="1.40659"/>
<feGaussianBlur stdDeviation="1.40659"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.713833 0 0 0 0 1 0 0 0 0 0.579167 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="shape" result="effect3_innerShadow_249_8372"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="2.81319" operator="erode" in="SourceAlpha" result="effect4_innerShadow_249_8372"/>
<feOffset dx="-1.40659" dy="-1.40659"/>
<feGaussianBlur stdDeviation="1.40659"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.713726 0 0 0 0 1 0 0 0 0 0.580392 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect3_innerShadow_249_8372" result="effect4_innerShadow_249_8372"/>
</filter>
</defs>
</svg>
        </span>
      </div>

      <div className='flex justify-between pt-2'>
        <div className='basis-1/3 flex flex-col justify-between '>
        <h3 className='text-xl font-semibold tracking-widest leading-10 w-[227px] '>Get all the information about healthy diet and nutrition intake on Flexit</h3>
        <div>

            <button className='bg-sucess text-tertiory px-12 py-3 shadow-xl rounded-xl'>
                <a href="blogs">Read More</a></button>
                </div>
                </div>
        <div className='basis2/3 flex gap-12'>
        <div className='flex flex-col gap-9'>
            <div>
                <Image
                    src="/blog1.png"
                    alt="blog1"
                    width={393}
                    height={497}
                    >
                </Image>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-sucess font-semibold'>25 October 2023</div>
                <div className='font-semibold'>Achieve Your Fitness Goals:
                    Insights from our Center
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-9'>
            <div>
                <Image
                    src="/blog1.png"
                    alt="blog1"
                    width={393}
                    height={497}
                    >
                </Image>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-sucess font-semibold'>25 October 2023</div>
                <div className='font-semibold'>Achieve Your Fitness Goals:
                    Insights from our Center
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-9'>
            <div>
                <Image
                    src="/blog1.png"
                    alt="blog1"
                    width={393}
                    height={497}
                    >
                </Image>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-sucess font-semibold'>25 October 2023</div>
                <div className='font-semibold'>Achieve Your Fitness Goals:
                    Insights from our Center
                </div>
            </div>
        </div>
        </div>
      </div>
      </div>
      </div>
  
  )
}

export default blog

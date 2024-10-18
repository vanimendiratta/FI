import React from 'react'
import Image from 'next/image'
import { Command,CommandEmpty,CommandInput,CommandList} from "@/components/ui/command"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from '@/components/ui/button'


const blogcard3 = () => {
  const options=["product-1","product-2","product-3"];
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
      <div className='flex justify-between px-5'>
      <div className='basis-2/3 '>
      <div className='flex flex-col gap-2 '>
        <div>
          <Image className=' '
            src="/bc6.png"
            alt="blogcard5"
            width={1200}
            height={592}>

          </Image>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex gap-1'>
            <span className='text-md text-sucess'>
              Pre Workout
            </span>
            <span className='text-lg tracking-widest text-grey'>
              15 OCTOBER 2023
            </span>
          </div>
        </div>
        <div className='text-secondary font-semibold tracking-wide'>Achieve Your Fitness Goals: Insights from Our Center</div>
      </div>
    
         <div className='flex flex-col gap-2 py-5'>
    <div className='text-xl tracking-widest font-semibold underline decoration-sucess'>Introduction</div>
    <div className='text-lg tracking-wide text-justify flex flex-col'>
      <span>Introducing our revolutionary fitness companion, the PowerFlex Pro-XTM. Elevate your workout experience with this state-of-the-art gym product designed for optimal performance and results. Engineered with cutting-edge technology, the PowerFlex Pro-X seamlessly blends functionality and comfort, providing a versatile solution for users of all fitness levels.</span>
<span>With its sleek design and durable construction, this fitness powerhouse offers a comprehensive range of exercises to target every muscle group. The intuitive interface and customizable settings ensure a personalized workout tailored to your fitness goals. Whether youre a seasoned athlete or just starting your fitness journey, the PowerFlex Pro-X is your ultimate partner in achieving peak.</span>
<span>Say goodbye to monotony with the variety of workout options this product offers. From strength training to cardio, the PowerFlex Pro-X adapts to your evolving fitness needs. Compact and easy to use, its the perfect addition to any home gym or professional fitness facility.</span>
<span>Take your fitness journey to the next level with the PowerFlex Pro-X  where innovation meets motivation, and results become reality.Other Information of MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb)</span>
<span>Biozyme Performance Whey- Recognized by the World!</span>
<span>MuscleBlaze Biozyme Performance Whey is crafted exclusively for fitness and muscle-building champions who want their protein supplement to be as effective as their efforts. It is scientifically designed with Enhanced Absorption Formula (EAF®) to maximize the bioavailability of protein for the Indian bodies. Its a part of MBs pioneering innovation- the BIOZYME series. The other fitness supplements in this iconic series are Biozyme Whey Iso-Zero & Biozyme Whey Protein.Other Information of MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb)</span>
<span>Biozyme Performance Whey- Recognized by the World! MuscleBlaze Biozyme Performance Whey is crafted exclusively for fitness and muscle-building champions who want their protein supplement to be as effective as their efforts. It is scientifically designed with Enhanced Absorption Formula (EAF®) to maximize the bioavailability of protein for the Indian bodies. Its a part of MBs pioneering innovation- the BIOZYME series. The other fitness supplements in this iconic series are Biozyme Whey Iso-Zero & Biozyme Whey Protein.</span>
</div>
    </div> 
</div>

<div className='basis-1/3 p-10'>
<div className='flex flex-col gap-5'>
<div className='shadow-xl px-6 py-4'>

<Command className=' gap-2  border-sucess  border-2 bg-shade  text-secondary rounded-full  '>

<CommandInput className='text-md ' placeholder="Search for Categories......" />
<CommandList>
  {true?(
    <>
{options.map((i,index)=>{
<p key={index}>{i}</p>
})}
    </>
  ):(
    <CommandEmpty>No results found</CommandEmpty>

  )}
</CommandList>
</Command>
</div>

<div className=' px-6 py-4 border-2 border-sucess'>
  <div className='p-4 flex flex-col gap-4 '>
    <div className='text-xl font-semibold'>Categories</div>
<div className='flex gap-8'>
  <div className='bg-shade   px-5 py-3 text-center rounded-3xl  hover:bg-sucess'>Diet</div>
  <div className='bg-shade   px-5 py-3 text-center rounded-3xl  hover:bg-sucess'>Weight Gain</div>
  <div className='bg-shade   px-5 py-3 text-center rounded-3xl  hover:bg-sucess'>Zumba</div>
  </div>
  <div className='flex gap-8 '>
  <div className='bg-shade   px-5 py-3 text-center rounded-3xl  hover:bg-sucess'>Pre Workout</div>
  <div className='bg-shade   px-5 py-3 text-center rounded-3xl  hover:bg-sucess'>Weight Loss</div>
  <div className='bg-shade   px-5 py-3 text-center rounded-3xl  hover:bg-sucess'>Fitness Goal</div>
  </div>
  <div className='flex gap-8 n'>
  <div className='bg-shade   px-5 py-3 text-center rounded-3xl  hover:bg-sucess'>Gym with Yoga</div>
  <div className='bg-shade  px-5 py-3 text-center rounded-3xl  hover:bg-sucess'>Weight Training</div>
  </div>
  <div className='flex gap-8 '>
  <div className='bg-shade px-5 py-3 text-center rounded-3xl hover:bg-sucess'>Health Supplements</div>
  <div className='bg-shade  px-5 py-3 text-center rounded-3xl  hover:bg-sucess'> Post Workout</div>
</div>
  </div>

</div>

<div>
  <Button className='bg-sucess text-tertiory text-md rounded-xl px-5 py-2'>
    Related
  </Button>
</div>

<div className='flex flex-col gap-4'>

  <a href="" className='flex gap-4 border-b border-sucess border-dashed py-4'>
    <div>
      <Image
      src="/blogrightlist.png"
      alt="blogrightlist"
      width={100}
      height={100}>
      </Image>
    </div>
    <div className='flex flex-col gap-2 text-start'>
      <div className='flex gap-4  items-center'>
        <span className='text-sm text-sucess'>Pre Workout</span>
        <span className='text-md text-grey'>21 SEPTEMBER 2023</span>
      </div>
      <div className='text-lg'>
        <div>Achieve Your Fitness Goals: </div>
        <div>Insights from Our Center</div>
      </div>
    </div>

  </a>

  <a href="" className='flex gap-4 border-b border-sucess border-dashed py-4'>
    <div>
      <Image
      src="/blogrightlist.png"
      alt="blogrightlist"
      width={100}
      height={100}>
      </Image>
    </div>
    <div className='flex flex-col gap-2 text-start'>
      <div className='flex gap-4  items-center'>
        <span className='text-sm text-sucess'>Pre Workout</span>
        <span className='text-md text-grey'>21 SEPTEMBER 2023</span>
      </div>
      <div className='text-lg'>
        <div>Achieve Your Fitness Goals: </div>
        <div>Insights from Our Center</div>
      </div>
    </div>

  </a>

  <a href="" className='flex gap-4 border-b border-sucess border-dashed py-4'>
    <div>
      <Image
      src="/blogrightlist.png"
      alt="blogrightlist"
      width={100}
      height={100}>
      </Image>
    </div>
    <div className='flex flex-col gap-2 text-start'>
      <div className='flex gap-4  items-center'>
        <span className='text-sm text-sucess'>Pre Workout</span>
        <span className='text-md text-grey'>21 SEPTEMBER 2023</span>
      </div>
      <div className='text-lg'>
        <div>Achieve Your Fitness Goals: </div>
        <div>Insights from Our Center</div>
      </div>
    </div>

  </a>

  <a href="" className='flex gap-4 border-b border-sucess border-dashed py-4'>
    <div>
      <Image
      src="/blogrightlist.png"
      alt="blogrightlist"
      width={100}
      height={100}>
      </Image>
    </div>
    <div className='flex flex-col gap-2 text-start'>
      <div className='flex gap-4  items-center'>
        <span className='text-sm text-sucess'>Pre Workout</span>
        <span className='text-md text-grey'>21 SEPTEMBER 2023</span>
      </div>
      <div className='text-lg'>
        <div>Achieve Your Fitness Goals: </div>
        <div>Insights from Our Center</div>
      </div>
    </div>

  </a>
</div>

<div>
  <Button className='bg-sucess text-tertiory text-md rounded-xl px-5 py-2'>
    Popular
  </Button>
</div>

<div className='flex flex-col gap-4'>
  <a href="" className='flex gap-4 border-b border-sucess border-dashed py-4'>
    <div>
      <Image
      src="/blogrightlist.png"
      alt="blogrightlist"
      width={100}
      height={100}>
      </Image>
    </div>
    <div className='flex flex-col gap-2 text-start'>
      <div className='flex gap-4  items-center'>
        <span className='text-sm text-sucess'>Pre Workout</span>
        <span className='text-md text-grey'>21 SEPTEMBER 2023</span>
      </div>
      <div className='text-lg'>
        <div>Achieve Your Fitness Goals: </div>
        <div>Insights from Our Center</div>
      </div>
    </div>

  </a>
  <a href="" className='flex gap-4 border-b border-sucess border-dashed py-4'>
    <div>
      <Image
      src="/blogrightlist.png"
      alt="blogrightlist"
      width={100}
      height={100}>
      </Image>
    </div>
    <div className='flex flex-col gap-2 text-start'>
      <div className='flex gap-4  items-center'>
        <span className='text-sm text-sucess'>Pre Workout</span>
        <span className='text-md text-grey'>21 SEPTEMBER 2023</span>
      </div>
      <div className='text-lg'>
        <div>Achieve Your Fitness Goals: </div>
        <div>Insights from Our Center</div>
      </div>
    </div>

  </a>
  </div>

</div>
</div>


</div>
</div>

  )
}

export default blogcard3

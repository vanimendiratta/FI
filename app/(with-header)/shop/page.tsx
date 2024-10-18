import React from 'react'
import Image from 'next/image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const Shop = () => {
  return (
    <div>
     <div className='rounded-xl mx-auto w-full pt-4'>
      <Image 
      src="/sporthero.png"
      alt="sporthero"
      width={820}
      height={338}>
      </Image>
     </div>
     <div>
     <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage className='text-grey'>Shop</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

     </div>
    </div>
  )
}

export default Shop;

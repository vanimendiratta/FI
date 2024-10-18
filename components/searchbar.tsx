import React from 'react'
import { Command,CommandEmpty,CommandInput,CommandList} from "@/components/ui/command"

const Searchbar = () => {
  const options=["product-1","product-2","product-3"];
  return (



    <Command className='flex container mx-auto gap-2  border-sucess  border-2 bg-shade w-full text-secondary rounded-full justify-center'>

  <CommandInput className='text-md ' placeholder="Search for product...." />
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

    
  )
}

export default Searchbar

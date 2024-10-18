
"use client"

import 'react-quill/dist/quill.snow.css'; 
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Command, CommandEmpty, CommandInput, CommandList } from "@/components/ui/command"
import { Table } from '@/components/ui/table'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface BlogCategory {
  name: string;
  slug: string;
  active: boolean;
}

const UserBlog: React.FC = () => {
  const options = ["product-1", "product-2", "product-3"];
  const [category, setCategory] = useState<BlogCategory>({
    name: '',
    slug: '',
    active: true
  });
  const [bodyContent, setBodyContent] = useState('');

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setCategory(prev => ({ ...prev, name }));
  }

  const handleGenerateSlug = () => {
    setCategory(prev => ({ ...prev, slug: generateSlug(prev.name) }));
  }

  return (
    <div className='bg-greybg flex   gap-1'>
      <div className='basis-1/4 w-full '>
        <div>
          <Popover >
            <PopoverTrigger asChild>
              <button>Blog Categories</button>
            </PopoverTrigger>
            <PopoverContent className='flex flex-col gap-8 p-10  
              align="right"
              side="right"
              sideOffset={10}'>
              <h1>Blog Category Details</h1>
              <div className='flex flex-col gap-5'>
                <h2>Name</h2>
                <Input 
                  value={category.name} 
                  onChange={handleNameChange}
                />
              </div>
              <div className='flex flex-col gap-5'>
                <h2>Blog Category</h2>
                <Input 
                  value={category.name} 
                  onChange={handleNameChange}
                />
              </div>
              <div className='flex flex-col gap-5'>
                <h2>Title</h2>
                <Input 
                  value={category.name} 
                  onChange={handleNameChange}
                />
              </div>
              <div className='flex flex-col gap-5'>
                <h2>Author</h2>
                <Input 
                  value={category.name} 
                  onChange={handleNameChange}
                />
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex gap-5 '>
                  <h2>Slug</h2>
                  <Button onClick={handleGenerateSlug}>Generate Slug</Button>
                </div>
                <Input 
                  value={category.slug} 
                  readOnly
                />
              </div>
              
              <div className='flex flex-col gap-5'>
                <h2>Body</h2>
                <ReactQuill 
                  theme="snow"
                  value={bodyContent}
                  onChange={setBodyContent}
                />
              </div>

              <div className='flex flex-col gap-5'>
                <h2>SEO Title</h2>
                <Input 
                  value={category.name} 
                  onChange={handleNameChange}
                />
              </div>

              <div className='flex flex-col gap-5'>
                <h2>SEO Description</h2>
                <Input 
                  value={category.name} 
                  onChange={handleNameChange}
                />
              </div>

              <div className='flex flex-col gap-5'>
                <h2>SEO Keywords</h2>
                <Input 
                  value={category.name} 
                  onChange={handleNameChange}
                />
              </div>
              <div>
                <Checkbox
                  checked={category.active}
                  onCheckedChange={(checked) => 
                    setCategory(prev => ({ ...prev, active: checked as boolean }))
                  }
                >
                  <label>Active</label>
                </Checkbox>
                <Checkbox
                  checked={category.active}
                  onCheckedChange={(checked) => 
                    setCategory(prev => ({ ...prev, active: checked as boolean }))
                  }
                >
                  <label>Popular Blog</label>
                </Checkbox>
              </div>
              <div className='flex gap-5'>
                <Button className='text-tertiory flex text-center bg-red-500 rounded-lg'>Cancel</Button>
                <Button className='text-tertiory flex text-center bg-green rounded-lg'>Save</Button>
              </div>

              
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className=' basis-3/4 flex flex-col gap-9'>
      <div className='bg-tertiory rounded-xl shadow-2xl p-10'>
        <div className='bg-greybg rounded-lg shadow-lg px-5 py-10 flex justify-between'>
          <button className='bg-sucess text-tertiory flex items-center p-5'>New</button>
          <button className='bg-purple-700 text-tertiory flex items-center p-5'>Export</button>
        </div>
<div className='flex justify-between px-5 py-10'>
  <div>Manage Blog Categories</div>
  <div>
    <Command>
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
  </div>

  <div>
    <Table/>
  </div>
</div>


      </div>
      </div>
    </div>
  )
}

export default UserBlog

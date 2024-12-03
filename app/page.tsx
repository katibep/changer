import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
const categories= [
  {
    title: "vegetable",
    description: "local breed",
    image: "/veg4.jpg",
  },
  {
    title: "vegetable",
    description: "local breed",
    image: "/veg1.jpg",
  },
  {
    title: "vegetable",
    description: "local breed",
    image: "/meat.jpg",
  },
  {
    title: "vegetable",
    description: "local breed",
    image: "/veg3.avif",
  },
  {
    title: "vegetable",
    description: "local breed",
    image: "/meta.jpg",
  },
  {
    title: "vegetable",
    description: "local breed",
    image: "/veg2.jpg",
  },
  
 
 
];
const products = [
  {
    title: "vegetable",
    category: "local breed",
    image: "/veg4.jpg",
  },
  {
    title: "vegetable",
    category: "local breed",
    image: "/veg4.jpg",
  },
  {
    title: "vegetable",
    category: "local breed",
    image: "/veg1.jpg",
  },
  {
    title: "vegetable",
    category: "local breed",
    image: "/veg1.jpg",
  },
  {
    title: "vegetable",
    category: "local breed",
    image: "/meat.jpg",
  },
  {
    title: "vegetable",
    category: "local breed",
    image: "/meat.jpg",
  },
  {
    title: "vegetable",
    category: "local breed",
    image: "/veg3.avif",
  },
  {
    title: "vegetable",
    category: "local breed",
    image: "/meta.jpg",
  },
  {
    title: "vegetable",
    category: "local breed",
    image: "/meta.jpg",
  },
  {
    title: "vegetable",
    category: "local breed",
    image: "/meta.jpg",
  },
  {
    title: "vegetable",
    category: "local breed",
    image: "/veg2.jpg",
  },
  {
    title: "vegetable",
    category: "local breed",
    image: "/veg2.jpg",
  },
  
 
 
];


export default function Gromuse(){
  return (
    <div className="">
      <div className=' p-3 flex items-center justify-center gap-3 text-green-800 text-[2rem] '>Gromuse 
      <Input className='width-[49rem]' type='text'placeholder='search pro...'/>
      <Link className='text-[1rem] bg-black text-white text-center rounded-2xl' href='/add-new'>add new categories</Link>
    </div>
    <div className=" p-3 flex bg-green-900 h-[40%]">
      <div className=" flex justify-center flex-col gap-1">
      <p className='text-[4rem] text-white'>we bring the stores to your door</p>
      <p className='text-white'>get organic products and sastainably sorced <br /> gloceries delivery at up to 4% of glocery</p>
      <Button className='bg-yellow-400 w-20 mt-[2rem] rounded-3xl text-white'>shop now</Button>
      </div>
      <div className="">
        <Image className='rounded-2xl' src="/floor.jpg" alt="food" width={1060} height={658} />
      </div>
    </div>
    {/* categories */}
    <p className="ml-[8rem] mt-5 text-[3rem]">CATEGORIES</p>
    <div className="flex mt-4 gap-3 text-white bg-slate-100 p-3">
    {
      categories.map((category,i)=>{
        return(
          <div className=" bg-slate-800 p-2 rounded-2xl flex flex-col justify-center items-center ">
      <p>{category.title}</p>
      <p>{category.description}</p>
      <Image className='w-[150px] h-[100px] rounded-2xl' src={category.image} alt="vegetable" width={1060} height={658} />
    </div>
        )
      })
    }
    </div>
    {/* products */}
    <p className="ml-[8rem] mt-5 text-[3rem]">YOU MIGHT NEED</p>
    <div className="pl-[8rem] pr-[8rem] grid grid-cols-3  text-green-800 gap-2  ">
     {
      products.map((product,i)=>{
        return(
          <div className="rounded-2xl bg-slate-400 flex flex-col justify-center items-center p-3">
        <p className=''>{product.title}</p>
        <p className=''>{product.category}</p>
        <Image className='w-[300px] h-[200px] rounded-2xl' src={product.image} alt="vegetable" width={1060} height={658} />
      </div>
        )
        
      })
     }
    </div>
    </div>
  )
}


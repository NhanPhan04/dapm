import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useState } from 'react';
import './index.css'

export default function DropdownMenuVer2({title,list,imgSrc,description}) {
  const [state,setState]= useState(title)
  
  const pickTitle=()=>{
    setState(state = +1)
  }
  console.log(state)

  const getTitle = ()=>{
    
  }

  return (
    <Menu as="div" className="DropdownMenuVer2-wrapper relative inline-block text-left py-6">
      <div>
        <MenuButton className="inline-flex w-full justify-center items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ">
          <img src={imgSrc} alt={title} className='-mr-1 h-12'/>
          <div className='text-start ml-2'>
            <h2 className='text-lg bold'>
             {title}
            </h2>
            <p className='text-xs'><em>154.270</em> người đăng <br/> tin mua bán</p>
           </div>
           <div className='separate-Line'></div>
        </MenuButton>
      </div>
    
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {list.map((item,index)=>(
            <MenuItem>
            <a key={index} className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
              {item.describe}</a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}

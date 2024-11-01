import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';



export default function DropdownMenuVer1() {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ">
           Danh mục
          <ExpandMoreIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>
      

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
           <div className='block px-4 py-2 text-sm cursor-pointer text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
            <Link to="/sellListScreen">
              Mua bán
            </Link>
           </div>
          </MenuItem>
          <MenuItem>
           <div className='block px-4 py-2 text-sm cursor-pointer text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
            <Link to="/rentListScreen">
              Cho thuê
            </Link>
           </div>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}

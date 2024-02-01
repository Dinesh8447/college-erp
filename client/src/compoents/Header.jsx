import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { AiOutlineFileSearch, AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import Footers from './Footer'

export default function Header() {
  const path = useLocation().pathname
  return (
    <div>

      <Navbar className='border-b-2'>
        <Link to={'/'} className='self-center text-sm sm:text-xl whitespace-nowrap font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            AAA
            </span>
            Collage
        </Link>

        {/* form */}
        <form action="">
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineFileSearch}
            // icon={<AiOutlineSearch/>}
            className='hidden lg:inline'
          />
        </form>

        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch />
        </Button>

        <div className='flex items-center gap-2 md:order-2'>
          <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaMoon />
          </Button>

          <Link to={'/signin'}>
            <Button gradientDuoTone='purpleToBlue' >
              Sign In
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {/* home */}
          <Navbar.Link active={path === '/'} as={'div'} >
            <Link to={'/'}>
              Home
            </Link>
          </Navbar.Link>

          {/* about */}
          <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to={'/about'}>
              About
            </Link>
          </Navbar.Link>
          {/* project */}
          <Navbar.Link active={path === '/projects'} as={'div'}>
            <Link to={'/projects'}>
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>

      </Navbar>





      <Outlet />

      <Footers/>
    </div>

  )
}
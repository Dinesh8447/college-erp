import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineFileSearch, AiOutlineSearch } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa'
import Footers from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {signoutsuccess} from '../redux/user/userslice'
import { themetoggle } from '../redux/theme/theme'


export default function Header() {
  const path = useLocation().pathname
  const { currentuser } = useSelector(state => state.user)
  const { theme } = useSelector(state => state.theme)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handlesignout = async() => {
    try {
      // axios.post('/api/auth/signout')
      //   .then(() => {
          dispatch(signoutsuccess())
          navigate('/')
          console.log('sign out')
        // })
        // .catch(e => console.log(e))
    } catch (error) {
      console.log(error)
    }
  }


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
            className='hidden lg:inline'
          />
        </form>

        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch />
        </Button>

        <div className='flex items-center gap-2 md:order-2'>
          <Button className='w-12 h-10 hidden sm:inline' color='gray' pill onClick={() => dispatch(themetoggle())}>
            {theme === 'light' ? <FaSun /> : <FaMoon />}
          </Button>

          {currentuser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar
                alt='img'
                img={currentuser.photourl}
                rounded
                status="online"
                statusPosition="top-right"
              />}
            >
               
              <Dropdown.Header>
                <span className='block text-sm font-medium truncate'>{currentuser.role}</span>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handlesignout}>
                signout
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to={'/signinoption'}>
              <Button gradientDuoTone='purpleToBlue' >
                Sign In
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>


          {/* home */}
          <Navbar.Link  active={path === '/'} as={'div'} >
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

          {currentuser && currentuser.role === 'student' && (
            <>
             <Navbar.Link active={path === '/viewstudentdata'} as={'div'}>
              <Link to={'/viewstudentdata'}>
                View Data
              </Link>
             </Navbar.Link>

              <label onClick={handlesignout} className='cursor-pointer'>
                Sign Out
              </label>
            </>
          )}

          {currentuser && currentuser.role === 'teacher' && (
            <Navbar.Link active={path === '/dashboard'} as={'div'}>
              <Link to={'/dashboard'}>
                DashBoard
              </Link>
            </Navbar.Link>
          )}

          {currentuser && currentuser.role === 'admin' && (
            <Navbar.Link active={path === '/dashboard'} as={'div'}>
              <Link to={'/dashboard'}>
                AdminDashboard
              </Link>
            </Navbar.Link>
          )}

        </Navbar.Collapse>

      </Navbar>


      <Outlet />
      <Footers />
    </div>

  )
}
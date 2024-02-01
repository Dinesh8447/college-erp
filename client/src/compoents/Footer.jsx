import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook,BsInstagram,BsTwitch,BsGithub, BsTwitterX, BsDiscord} from 'react-icons/bs'
export default function Footers() {
  return (
    <Footer container className="border border-t-8 border-teal-400">

      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link to={'/'} className='self-center text-lg sm:text-xl whitespace-nowrap font-semibold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                AAA
                </span>
                College
            </Link>
          </div>

          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            {/* about col */}
            <div>

              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'  rel='noopener noreferrer'>
                  About page
                </Footer.Link>
              </Footer.LinkGroup>

              <Footer.LinkGroup className='mt-2' col>
                <Footer.Link href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                  AAA College
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

           
            {/* legal */}
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>
                  Privacy Policy
                </Footer.Link>
              </Footer.LinkGroup>

              <Footer.LinkGroup className='mt-2' col>
                <Footer.Link href='#' >
                  Terms & Condition
                </Footer.Link>
              </Footer.LinkGroup>
            </div>


          </div>

        </div>
        <Footer.Divider/>
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright  href='#' by='Mern Blog' year={new Date().getFullYear()}/>
          <div className='flex gap-6  sm:mt-0  sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitterX}/>
            <Footer.Icon href='#' icon={BsTwitch}/>
            <Footer.Icon href='#' icon={BsDiscord}/>
          </div>
        </div>

      </div>
    </Footer>
  )
}
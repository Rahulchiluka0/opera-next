import React from 'react'
import Hero from '../components/HomeComponents/Hero'
import Whoarewe from '../components/HomeComponents/Whoarewe'
import Smartturb from '../components/HomeComponents/Smartturb'
import Working from '../components/HomeComponents/Working'
import Client from '../components/HomeComponents/Client'
import Blog from '../components/HomeComponents/Blog'

const page = () => {
  return (
    <div>
        <Hero/>
        <Whoarewe/>
        <Smartturb/>
        <Working/>
        <Client/>
        <Blog/>
    </div>
  )
}

export default page
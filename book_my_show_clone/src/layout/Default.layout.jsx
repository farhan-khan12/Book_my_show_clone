import React from 'react'
import Navbar from '../Components/Navbar/Navbar.Component'


const Defaultlayout = (Component) =>({...props})  => {
  return (
    <div>
      <Navbar/>
      <Component {...props}/>
    </div>
  )
}

export default Defaultlayout
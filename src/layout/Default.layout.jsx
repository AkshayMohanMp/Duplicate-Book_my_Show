import React from 'react'
import Navbar from '../Components/Navbar/Navbar.Component'

const DefaultlayoutHoc = (Component) =>({...props})=> {
  return (
    <div>
      <Navbar/>
      <Component {...props}/>
    </div>
  )
}

export default DefaultlayoutHoc

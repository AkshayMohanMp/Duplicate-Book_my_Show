import React from 'react'

import MovieLayoutHoc from '../Components/Navbar/MovieNavbar.Component'

const Movielayout = (Component) =>({...props})=> {
  return (
    <div>
        <MovieLayoutHoc/>
      <Component {...props}/>
    </div>
  )
}

export default Movielayout

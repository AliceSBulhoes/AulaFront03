import React from 'react'
import { Link } from 'react-router-dom'
import { NavStyle } from '../css/NavStyle'

const Nav = () => {
  return (
    <>
    <NavStyle>
        <section className='nav'>
            <Link className='link night' to={'/'}>EverNight</Link>
            <Link className='link fool' to={'/the-fool'}>The Fool</Link>
        </section >
    </NavStyle>
    </>
  )
}

export default Nav
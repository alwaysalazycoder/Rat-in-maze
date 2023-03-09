import React from 'react'
import {AiFillGithub,AiFillInstagram,AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <>
    <footer>
    <div >
        Made with ❤♥ in india
    </div>
    <div className='div'>

    <AiFillGithub/>
    <AiFillLinkedin/>
    <AiFillInstagram/>
    </div>
    </footer>
    </>
  )
}

export default Footer
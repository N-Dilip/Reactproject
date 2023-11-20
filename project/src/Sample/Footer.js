import React from 'react'

const Footer =()=> {
    const year = new Date();
  return (
    <footer style={{background:'aqua', fontSize:'250%', }}>Copyright &copy; {year.getFullYear()}</footer>
  )
}
export default Footer;
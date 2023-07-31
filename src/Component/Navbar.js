import React from 'react'
import './Form.css';

export default function Navbar() {

const topnav = document.querySelector('.topnav')
const icon = document.querySelector('.icon')


const Click = ()=>{
    topnav.classList.toggle('h-nav')
    icon.classList.toggle('v-class')
}
  return (
    <>
   <nav id="navbar" className="topnav h-nav">
    <h2>Convert Case</h2>
        <ul className="nav-list icon v-class">
           <li className="nav-item"><a href="/">Chnage to UpperCase</a></li>
           <li className="nav-item"><a href="/">CHange to LowerCase</a></li>
           <li className="nav-item"><a href="/">Capatilize Case</a></li>
           <li className="nav-item"><a href="/">Sentence Case</a></li>
           <li className="nav-item"><a href="/">AlTeRnAtIvE Case</a></li>
           <li className="nav-item"><a href="/">Inverse Case</a></li>
           <li className="nav-item"><a href="/">Reverse Case</a></li>
           <li className="nav-item"><a href="/">Word Reverse Case</a></li>
        </ul>
         <div className="burger" onClick={Click}>
           <div className="burlin"></div>
           <div className="burlin"></div>
           <div className="burlin"></div>
           </div>
           </nav>
    </>
  )
}

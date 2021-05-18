import React, { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../images/logo.png'
import thumb1 from '../images/thumb1.png'
import thumb2 from '../images/thumb2.png'
import thumb3 from '../images/thumb3.png'

import { Link } from "react-router-dom"

const transition = { duration: .5, ease: [0.43, 0.13, 0.23, 0.96] }

const Main = () => {
    const [clickHumbuger, setClickHumbuger] = useState(false)

    return (
        <div className="app container position-relative">
            <div className={clickHumbuger ? "bg-humburger active" : "bg-humburger"}></div>
            <header className="py-3">
                <div className="d-flex justify-content-between align-items-center position-relative z-index-5">
                    <a href="/">
                        <img src={logo} alt="logo" className="w-75"></img>
                    </a>
                    <ul className={clickHumbuger? "list-unstyled active" : "list-unstyled"}>
                        <motion.li whileHover = {{
                            y: -5,
                            scale: 1.2, 
                            }} 
                            transition={transition} 
                            className="d-inline-block responsive px-5">
                            <a href="/" className="text-black size-18">Home</a>
                        </motion.li>
                        <motion.li whileHover = {{
                            y: -5,
                            scale: 1.2, 
                            }} 
                            transition={transition} 
                            className="d-inline-block responsive px-5">
                            <a href="/" className="text-black size-18">Menu</a>
                        </motion.li>
                        <motion.li whileHover = {{
                            y: -5,
                            scale: 1.2, 
                            }} 
                            transition={transition} 
                            className="d-inline-block responsive px-5">
                            <a href="/" className="text-black size-18">What's New</a>
                        </motion.li>
                        <motion.li whileHover = {{
                            y: -5,
                            scale: 1.2, 
                            }} 
                            transition={transition} 
                            className="d-inline-block responsive px-5">
                            <a href="/" className="text-black size-18">Contact</a>
                        </motion.li>
                    </ul>
                    <div className="humburger" onClick={() => setClickHumbuger(!clickHumbuger)}>
                            <div className={clickHumbuger ? "line line-1 active" : "line line-1"}></div>
                            <div className={clickHumbuger ? "line line-2 active" : "line line-2"}></div>
                            <div className={clickHumbuger ? "line line-3 active" : "line line-3"}></div>
                    </div>
                </div>
            </header>


            <section id="text" className=" w-100 p-0 position-fixed center-y">
                <div className="w-40">
                    <h3 className="size-30 spacing-5">It's not just Coffee</h3>
                    <h1 className="size-50 spacing-3 mb-5">It's <span className="font-weight-bold text-green">Starbucks</span></h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a href="/">
                        <motion.button 
                            whileHover = {{
                                x: [5 , -5, 5, -5] ,
                            }} 
                            transition={transition}  
                            className="rounded-pill px-5 py-3 border-0 font-weight-bolder bg-green text-white">LEARN MORE
                        </motion.button>
                    </a>
                </div>
            </section>

            <section id="select-img" className="w-100 d-flex justify-content-center position-fixed bottom-0 center-x mb-5">
                <Link className="link-img mx-5 mb-5" to="/">
                    <motion.img whileHover={{
                        y: -10,
                        scale: 1.2,
                    }}
                        transition={transition}
                        whileTap={{ scale: 0.9 }}
                        src={thumb1} alt="" className="thumb">
                    </motion.img>
                </Link>

                <Link className="link-img mx-5 mb-5" to="/light-pink">
                    <motion.img whileHover={{
                       y: -10,
                       scale: 1.2,
                    }}
                       transition={transition}
                       whileTap={{ scale: 0.9 }}
                        src={thumb2} alt="" className="thumb">
                    </motion.img>
                </Link>

                <Link className="link-img mx-5 mb-5" to="/dark-pink">
                    <motion.img whileHover={{
                        y: -10,
                        scale: 1.2
                    }}
                        transition={transition}
                        whileTap={{ scale: 0.9 }}
                        src={thumb3} alt="" className="thumb">
                    </motion.img>
                </Link>
            </section>
        </div>

    );
}

export default Main

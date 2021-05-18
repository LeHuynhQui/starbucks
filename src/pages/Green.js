import React from 'react'
import img1 from '../images/img1.png'

import { motion } from 'framer-motion'
const transition = { duration: .5, ease: [0.43, 0.13, 0.23, 0.96] }
const transition1 = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }


const Green = () => {
    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}  
            exit={{opacity:0,}} 
            transition={transition} 
            className="circle bg-green rounded-circle position-fixed">
            <motion.img
                initial={{opacity:0}} 
                animate={{
                    scale: [0, 1],
                    rotate: [-360, 0],
                    opacity:1,
                }} 
                exit={{
                    scale: [1.5, 0],
                    rotate: [0, 360],
                    opacity:0,
                }}
                transition={transition1} 
                src={img1} class="product-img responsive position-absolute" alt="" />
        </motion.div>
    )
}

export default Green

import React, { useEffect, useState} from 'react';
import './chart.css'
import { 
        height, 
        minWidth, 
        pathOfsunLine, 
        pathOftideLine } from '../../Data/chartData';
import {gsap} from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const D3Chart = () => {
    const [moonIsHidden, setMoonIsHidden] = useState(true)
    const [ time, setTime ] = useState("")
    
     useEffect(()=>{
        
        gsap.to("#sun",{
            duration: 5,
            repeat: 12,
            repeatDelay:3,
            yoyo: true,
            ease: "power1.inOut",
            motionPath:{
                path: "#motionPath",
                align: "#motionPath",
                autoRotate: true,
                alignOrigin: [0.5, 0.5]
            }
        })
    },[])
    
  return (
    <div className='chart'>
        {/* <div className='nightFilter'></div> */}
        <div className='d3_canvas'>
            <svg height={height} width={12 * minWidth}>
                <g>
                    <path 
                    fill="#c1e5f7" 
                    stroke="none" 
                    d={pathOftideLine}/>
                </g>
                <g>
                    <path 
                    id="motionPath"
                    fill="none" 
                    stroke="orange" 
                    d={pathOfsunLine}/>
                </g>
                <g>
                    <circle
                    id="moon"
                    fill="#7988A2"
                    r={15}
                    // style={{
                    //     display: `${moonIsHidden ? "none" : "block"}`,
                    // }}
                    />
                </g>
                <g>
                    <circle
                    id='sun'
                    fill="#fcdb33"
                    r={15}
                    // style={{
                    //     display: `${moonIsHidden ? "block": "none"}`,
                    // }}
                    />
                </g>
                <g>
                    <circle
                        fill='none'
                        stroke='orange'
                    />
                </g>
            </svg>
        </div>
        <div className='chart_title'>
            <h5 className='chart_titleTide'>Tide</h5>
            <span>•</span>
            <h5 className='chart_titleSun'>Sunrise & Sunset</h5>
        </div>
        <div className='chart_measure'></div>
        <div className='chart_time'>07.00 am</div>

    </div>
  )
}

export default D3Chart

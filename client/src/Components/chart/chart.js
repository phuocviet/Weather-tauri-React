import React, { useEffect, useRef, useState } from 'react';
import './chart.css'
import * as d3 from 'd3';
import { chartdata } from '../../Data/chartData';

const D3Chart = () => {
    const [data] = useState([25,30,45,60,20,0,25,30,45,60,20])
    const [data2] = useState([10,30,45,0,20,0,25,10,45,10,20])
    const svgRef = useRef()
    const svgRef2 = useRef()
    useEffect(()=>{
        
        const svg =d3.select(svgRef.current) 
        const svg2 =d3.select(svgRef2.current)
        const xScale = d3.scaleLinear()
            .domain([0, data.length -1])
            .range([0,900])
        const yScale = d3.scaleLinear()
            .domain([0, 400])
            .range([400, 0])
        const myLine = d3.line()
            .x((value, index) => xScale(index) )
            .y(yScale)
            .curve(d3.curveCardinal)
        svg.selectAll(".line")
            .data([data])
            .join("path")
            .attr("d",value => myLine(value))
            .attr("fill","none")
            .attr("stroke", "orange");
        const secondLine = d3.line()
            .x((value, index) => index * 900 )
            .y(value => value)
            .curve(d3.curveCardinal)
        svg2.selectAll("path")
            .data([data2])
            .join("path")
            .attr("d",value => secondLine(value))
            .attr("fill","cyan")
            .attr("stroke", "cyan")
            .attr("opacity", ".6")

    },[data,data2])
    // <div className='nightFilter'></div>
    //     <div className='dayFilter'></div>
    //     <div className='nightFilter'></div>
  return (
    <div className='chart'>
        <div className='d3_canvas'>
            <svg ref={svgRef} className='sunLevel'/>
            <svg ref={svgRef2} className='tideLevel'/>
        </div>
        <div className='chart_title'>
            <h5>Tide</h5>
            <span>•</span>
            <h5>Sunrise & Sunset</h5>
        </div>
        <div className='chart_measure'></div>
        <div className='chart_time'>07.00 am</div>
    </div>
  )
}

export default D3Chart

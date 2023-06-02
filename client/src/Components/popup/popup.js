import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import './popup.css'
import axios from 'axios'

const Popup = ({setIsPopUp}) => {
    const [cities, setCities] = useState([])
    const [newcity, setNewcity] = useState("")
    const dataUrl = 'http://localhost:400'
    const handleAdd = (e) => {
        e.preventDefault()
        const citiesList =([...cities, newcity])
        setCities(citiesList)
    }
    const handleSave = async(e) => {
        e.preventDefault()
        localStorage.setItem('cities',...cities)
        await axios.post(`${dataUrl}/cities`,{
            "name":newcity
        })
        .then((res)=>console.log(res.status))
        .catch((err)=>console.error(err.message))
    }
    const handleChange = (e) => {
        setNewcity(e.target.value)
    }
    
  return (
    <div className='popupContainer'>
      <form onSubmit={handleAdd} className='formContainer'>
        <AiOutlineClose onClick={()=>setIsPopUp(false)}/>
        <h3>Add a city</h3>
        <div className='inputForm'>
            <label
                htmlFor='city'
            >City's name</label>
            <input 
                type='text' 
                required
                id='city'
                value={newcity}
                onChange={handleChange}
            />
            <button type='submit'>Add</button>
            <button onClick={handleSave}>Save</button>
        </div>
        <div className='citiesList'>
            {
                cities.map((city,i)=><span key={i}>{city}</span>)  
            }  
        </div>
        
    </form>  
    </div>
    
  )
}

export default Popup
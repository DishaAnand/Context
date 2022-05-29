import React,{useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import Apptheme from '../colors'

const Hero=()=>{
    const theme=useContext (ThemeContext)[0]
    const currentTheme=Apptheme[theme]
    return (
        <div
        style={{
            padding:"1rem",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`,
            textAlign:"center"
        }}>
            <h1>context api</h1>
            <p>nice paragraph</p>
            <button style={{
                backgroundColor:"26ae60",
                padding:"10px 150px",
                fontSize:"20px",
                color:"FFF",
                border:`${currentTheme.border}`
            }}>click me</button>
        </div>
    )

}
export default Hero
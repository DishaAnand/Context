import React,{useContext} from 'react'

import ThemeContext from '../Context/ThemeContext'

const Themetoggler=()=>{
    const [themeMode,setThemeMode]=useContext(ThemeContext)

    return (
        <div
            onClick={()=>{
                setThemeMode(themeMode==="light"?"dark":"light")
            }}>
            <span>
                {themeMode==="light"?"turn off":"light on"}
            </span>
        </div>
    )
}
export default Themetoggler
import React from "react"
import './HomepageImage.css'


const HomepageImage = ({background}) => {
    return (
        <div className="homepageImage" 
        style={{ backgroundImage: `url(${background})` }}
        >
           
        </div>
    )
}

export default HomepageImage
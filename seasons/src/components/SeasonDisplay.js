import React from 'react'
import '../SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    icon: 'sun'    
  },
  winter: {
    text: 'Burr it is cold',
    icon: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 & month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, icon} = seasonConfig[season] // returns {text, icon}

    // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'
    // const icon = season === 'winter' ? 'snowflake' : 'sun'
   
    return(
      <div className={`season-display ${season}`}>
        <i className={`icon-left huge ${icon} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${icon} icon`} />
      </div>
    )
  
}

export default SeasonDisplay
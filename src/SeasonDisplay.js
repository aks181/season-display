import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    winter : {
        text: 'Hey you, It\'s chilly time of the year. Happy Winters!',
        iconName: 'snowflake' 
    },
    summer : {
        text: `Hey wassup, It's getting hotter. Happy Summers!`,
        iconName : 'sun'
    }
};

const getSeason = (lat, month) =>  {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {

    const season= getSeason( props.lat, new Date().getMonth() )
    const { text, iconName } = seasonConfig[season] ;  

    return(
        <div className={`season-display ${season}`} >
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h3>{text}</h3>
            <i className={` icon-right massive ${iconName} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;
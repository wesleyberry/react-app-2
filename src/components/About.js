import React, { useState, useEffect } from 'react';

function About() {

    let [time, setTime] = useState(String(new Date()));

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);
        return () => clearInterval(interval);
    }, []);

    let tick = () => {
        console.log(`Set new time`);
        setTime(String(new Date()));
    }

    return (
        <div>
            <h2>{ time }</h2>
        </div>
    )
}

export default About

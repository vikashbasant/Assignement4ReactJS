import React from 'react';

function Greeting(){
    let currTime = new Date(2020,10,6,19);
    currTime = currTime.getHours();
    let greeting;
    // here this is nothing but object in javascript.
    const showColor={};

    if(currTime >=1 && currTime <=11){
        greeting = "Good Morning";
        showColor.color = "green";
    }else if(currTime>=12 && currTime <=17){
        greeting = "Good AfterNoon";
        showColor.color = "orange";
    }else if(currTime >=18 && currTime<=24){
        greeting = "Good Night";
        showColor.color = 'black';
    }

    return (
        <span style = {showColor}> {greeting} </span>
    );
};


export default Greeting;
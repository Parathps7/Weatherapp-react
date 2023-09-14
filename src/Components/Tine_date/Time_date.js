import React, { useEffect, useState } from "react";
import './Time_date.css';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c1d3eb52bmsh5099254d767003ap13464ajsn9b181b31f5c6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = async (rec) => {
    try{
    let web=await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+rec,options);
    web = await web.json();
    return web;
    }
    catch(e)
    {
        return {};
    }
}



const Time_date=()=>
{
    const [txt,setstxt]=useState("")
    const [rec,setrec]=useState("")
    const [print,setpr]=useState()

    useEffect( ()=>
    {
        async function fetchW ()
        {
            if(rec != "")
            {
                let ans=await getWeather(rec);
                setpr(ans);
            }
        }
        fetchW();
    }
    ,[rec]);

    console.log(print);

    return(
        <>
        <div className="waallpaper">
            <input type="text" className="myInput" placeholder="Enter city" value={txt} onChange={(e)=>setstxt(e.target.value)} onKeyDown={(e)=>{if(e.key == 'Enter'){setrec(txt);setstxt("");}} }/>
            <ul>
                <li>
                    sunrise: {print.sunrise} 
                </li>
                <li>sunset: {print.sunset}</li>
                <li>cloud_pct: {print.cloud_pct}</li>
                <li>humidity: {print.humidity}</li>
                <li>sunrise: {print.sunrise}</li>
                <li>sunset: {print.sunset}</li>
                <li>wind_degrees: {print.wind_degrees}</li>
                <li>wind_speed: {print.wind_speed}</li>
            </ul>
            <span>Max Temp: {print.max_temp}</span>
            <br/>
            <span>        Feels like :{print.feels_like}</span>
            <br/>
            <span>        Min Temp: {print.min_temp}</span>
            <br/>
            {(print.feels_like >= 30)?(<img src="sunicon.png" ></img>):(<img src="def.png"></img>)}
        </div>
        </>
    )
}

export default Time_date;
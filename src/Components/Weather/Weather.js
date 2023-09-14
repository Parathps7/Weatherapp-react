import React, { useEffect, useState } from "react";
import './Weather.css';

const GetW =async () =>
{
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c1d3eb52bmsh5099254d767003ap13464ajsn9b181b31f5c6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let weat = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=paris',options);
weat = await weat.json();
console.log(weat);
console.log(weat.cloud_pct);

}

function Time() {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const updateCurrentTime = () => {
        setCurrentTime(new Date());
      };
  
      const intervalId = setInterval(updateCurrentTime, 1000);
      
      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="time">
        <h1>{currentTime.toLocaleTimeString()}</h1>
      </div>
    );
    
}


function Daate()
{
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

    const [currentTime, setCurrentTime] = useState( new Date() );
  
    useEffect(() => {
      const updateCurrentTime = () => {
        setCurrentTime(new Date());
      };
  
      const intervalId = setInterval(updateCurrentTime, 1000);
      
      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="date">
        <h1>{currentTime.getDate()} {months[currentTime.getMonth()]} {currentTime.getUTCFullYear()}</h1>
        <h1>{days[currentTime.getDay()]}</h1>
      </div>
    );
}

// let fetchF = async(rec)=>{
//     try
//     {
//     let film=await fetch('http://127.0.0.1:5000/recommend/'+rec,{method: 'GET'});
//     film= await film.json();
//     console.log(film);
//     return film;
//     }
//     catch(e)
//     {console.log(e+" error hai");}
// }
// fetchF("Avatar")

 const Movie_recommender = ()=>
{
    const [txt,setstxt]=useState("");
    const [rec,setrec]=useState("");
    const [print,setprint]=useState([]);

    useEffect(()=>{
        if(rec != "")
        {
            console.log(rec);
            let par=async ()=>
            {
                try
                {
                let film=await fetch('http://127.0.0.1:5000/recommend/'+rec,{method: 'GET'});
                film= await film.json();
                setprint(film);
                }
                catch(e)
                {console.log(e+" error hai");}
            }
            par();
        }
    },[rec])

    // console.log(print);
    return (
        <>
        <div className="myInput">
        <input type="text" className="myInput" placeholder="Movie recommender" value={txt} onChange={(e)=>setstxt(e.target.value)} onKeyDown={(e)=>{if(e.key == 'Enter'){setrec(txt);setstxt("");}} }/>
        </div>
        <div >
        <h1><ul className="list">
        {print.map((item, index) => (
          <li key={index} className="list">{item}</li>
        ))}
      </ul></h1>
        </div>
        </>
    );
}


const Wallpaper = ()=>{

    return(
        <div className="wallpaper">
            <Time/>
            <Daate/>
            <Movie_recommender/>
        </div>
    )

}


const Weather = ()=>{
    return (
        <>
            <Wallpaper />;
        </>
    )
}

export default Weather;
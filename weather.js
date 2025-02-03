let ApiKey="9a47cc7621ff4b3b3176826887ae0646";

let searchBox=document.querySelector(".search");
let searchBtn=document.querySelector("button");
let cityName=document.querySelector(".cityName");
let humidity=document.querySelector(".humidity");
let temp=document.querySelector(".temp");
let wind=document.querySelector(".wind");
let pressure=document.querySelector(".pressure");

searchBtn.addEventListener("click",()=>{
    let city=searchBox.value.trim();
    if(city===""){
     cityName.innerText=" ! please enter city name..";
     humidity.textContent="";
     wind.textContent="";
     temp.textContent="";
     pressure.textContent="";
     return;
    }
    getWeather(city);
});

const getWeather=async(city)=>{
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
    try{
        let response=await fetch(URL);
        if (!response.ok) throw new Error(`city not found`);
        let data=await response.json();
        console.log(data);
        cityName.textContent=searchBox.value;
        humidity.textContent=`Humidity: ${data.main.humidity}%`;
        wind.textContent=`Wind: ${data.wind.speed}m/s`;
        temp.textContent=`Temperature: ${data.main.temp}°C`;
        pressure.textContent=`Pressure: ${data.main.pressure}hPa`;
        
    }
   catch(error){
    console.log("error");
    cityName.textContent="Error City Not Found";
    humidity.textContent="";
    wind.textContent="";
    temp.textContent="";
    pressure.textContent="";

   }
};

getWeather("Bhadrapur");
searchBox.value="bhadrapur";




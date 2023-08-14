//Enter the city in url to check availability..
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7007608781msh238c280179a3851p11b3a0jsn7e646b843a0e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

//We have put city datas by innerHTML and finaally assigned this all in a function names getWeather of argument taking city ..
const getWeather = (city)=>{
    cityName.innerHTML=city; //and weather for delhi ki place par weather for id="cityName" in span<> section
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)
        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_speed2.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
}

//get weather function is run by city argument by default.. if anyone clicks on submit button then this function is called 
// getWeather(city);
submit.addEventListener("click",(e)=>{
    e.preventDefault(); //to prevent reloading of the page..
  getWeather(city.value);  // for city.value here submit k input me id="city" set kar diya in html file.
})

getWeather("Delhi") //by default getWeather is called for city Delhi
const apikey = "864758fab7dd78077efd85064c4cc361";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const wi = document.querySelector(".wi");

async function checkweather(city)
{
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404 ){
        document.querySelector(".error").style.display = "inline-block";
        document.querySelector(".weather").style.display ="none";
    }
    var data = await response.json();

    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +` °C`;
    document.querySelector(".wind").innerHTML = data.wind.speed + ` Km/h`;


   if(data.weather[0].main == 'Clouds')
    {
        wi.src = "images/clouds.png";
    }
    else if(data.weather[0].main == 'Drizzle')
    {
        wi.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == 'Mist')
    {
        wi.src = "images/mist.png";
    }
    else if(data.weather[0].main == 'Rain')
    {
        wi.src = "images/rain.png";
    }
    else if(data.weather[0].main == 'Snow')
    {
        wi.src = "images/snow.png";
    }
    else
    {
        wi.src = "images/clear.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display ="block"
}

searchbtn.addEventListener("click", ()=> {
    checkweather(searchbox.value);
})


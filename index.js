const sumbit = document.getElementById("submit");

sumbit.addEventListener("click", weather);

function weather(){
    const input = document.getElementById("input").value;
 
     fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=735699ef89e61d237e4cc177c907feef')
     .then(response => response.json())
     .then(data =>{
         const cityName = data.name;
         const tem =data.main.temp;
         const temp = tem-279.15; 
         const description = data.weather[0].description;
         const icon = data.weather[0].icon;
 
 
 
         document.getElementById("cityName").innerHTML = cityName;
         document.getElementById("temp").innerHTML = temp.toFixed(2);
         document.getElementById("description").innerHTML = description;
        
        if(description == "haze"){
            document.getElementById("icon").innerHTML ='<img src="weather/haze.png">';
        }else if(description == "clear sky"){
            document.getElementById("icon").innerHTML ='<img src="weather/sun .png">';
        }else if(description == "scattered clouds" || description == "broken clouds"){
            document.getElementById("icon").innerHTML ='<img src="weather/scattered clouds.png">';
        }else if(description == "light rain"){
            document.getElementById("icon").innerHTML ='<img src="weather/rain.png">';
        }else if(description == "overcast clouds"){
            document.getElementById("icon").innerHTML ='<img src="weather/cloudy-day.png">';
        }
 
 
         console.log(data)
     })
 
     .catch(res => alert("Please Enter Right city name"))
 }





 function windowload(){
    const input = document.getElementById("input").value;
 
     fetch('https://api.openweathermap.org/data/2.5/weather?q='+"Dhaka"+'&appid=735699ef89e61d237e4cc177c907feef')
     .then(response => response.json())
     .then(data =>{
         const cityName = data.name;
         const tem =data.main.temp;
         const temp = tem-279.15; 
         const description = data.weather[0].description;
         
 
 
 
         document.getElementById("cityName").innerHTML = cityName;
         document.getElementById("temp").innerHTML = temp.toFixed(2);
         document.getElementById("description").innerHTML = description;
         if(description == "haze"){
            document.getElementById("icon").innerHTML ='<img src="weather/haze.png">';
        }else if(description == "clear sky"){
            document.getElementById("icon").innerHTML ='<img src="weather/sun .png">';
        }else if(description == "scattered clouds" || description == "broken clouds"){
            document.getElementById("icon").innerHTML ='<img src="weather/scattered clouds.png">';
        }else if(description == "light rain"){
            document.getElementById("icon").innerHTML ='<img src="weather/rain.png">';
        }else if(description == "overcast clouds"){
            document.getElementById("icon").innerHTML ='<img src="weather/cloudy-day.png">';
        }
 
 
        
     })
 
 };

 window.addEventListener("mousemove", windowload())
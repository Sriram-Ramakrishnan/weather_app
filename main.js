container=document.querySelector(".container");
search=container.querySelector(".search");
city=container.querySelector(".city");
temp=container.querySelector(".temp");
input=search.querySelector("searchbar")
b1=document.getElementById("searchtag");
b2=document.getElementById("getloc");
file=container.querySelector(".data");


b2.addEventListener("click",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess,onError);

    }
    else{
        console.log("Geolocation not supported");
    }
});
b1.addEventListener("click",()=>{
    city=document.getElementById("searchbar").value;
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ce422ce969878bf76a6eaedf4acdfea`;
    fetch(api).then(response => response.json()).then(result => weather(result));
    city.innerText="Location: "+city;

});


function onSuccess(position){
    const{latitude,longitude}=position.coords;
    let api=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5ce422ce969878bf76a6eaedf4acdfea`;
    fetch(api).then(response => response.json()).then(result => weather(result));
}


function onError(error){
    console.log(error);
}


function weather(info){
    const cityy=info.name;
    const tempp=info.main;
    const op=info.weather[0];

    document.getElementById("searchbar").value=cityy;
    temp.innerHTML=op.description;
    file.innerText=("Temperature: "+Math.round(tempp.temp-273.00).toFixed(2))+"°C";       
}
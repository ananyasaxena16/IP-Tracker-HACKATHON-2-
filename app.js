const lookupbtn = document.querySelector(".btn");
const isDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const geoDisplay = document.querySelector(".geolocation-display");
const loader = document.querySelector(".loader-container");
const details = document.querySelector(".details");
lookupbtn.addEventListener("click", function(){
    loader.style.display = "flex";
    details.style.display = "none";
    axios.get("https://ipapi.co/json/").then((response) => {
        loader.style.display = "none";
        details.style.display = "block";
        isDisplay.textContent = `IP: ${response.data.ip}`;
        locationDisplay.textContent = `Location: ${response.data.city}, ${response.data.region}, ${response.data.country_name}`;
        geoDisplay.textContent = `Geo Location: ${response.data.latitude}, ${response.data.longitude}`;


    });

});

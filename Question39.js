function city_country(city, country="Pakistan"){
    const sentence = city+","+country;
    return sentence;
}

console.log(city_country("Karachi","Pakistan"));
console.log(city_country("Delhi", "India"));
console.log(city_country("Peshawar"));
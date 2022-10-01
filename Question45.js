function car(manufacturerValue, modelValue, arbitraryNumberValue = 0000000, colorValue, optionalFeatureValue= "none"){
    const carObject = {};

    carObject.manufacturer = manufacturerValue;
    carObject.model = modelValue;
    carObject.arbitraryNumber = arbitraryNumberValue;
    carObject.color = colorValue;
    carObject.optionalFeature = optionalFeatureValue;

    return carObject;
}

var objectresult = car("Toyota", "2021",00001,"Black");
console.log(objectresult);
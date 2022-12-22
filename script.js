document.querySelector('.convert').addEventListener('click', () => {
    converterFunction();
});

let converterFunction = () => {
    let valueToConvert = parseInt(document.querySelector('.valueToConvert').value);
    let convertFrom = document.querySelector('.fromS').value;
    let convertTo = document.querySelector('.toS').value;
    let result = document.querySelector('.result');

    //temp values
    let conversionC, conversionF, conversionK;

    //if the celsius field changes
    if (convertFrom === "Celsius") {
        conversionC = valueToConvert;
        conversionF = valueToConvert * 9 / 5 + 32;
        conversionK = conversionC + 273.15;
    }
    //if the fahrenheit field changes
    else if (convertFrom === "Fahrenheit") {
        conversionC = (valueToConvert - 32) * 5 / 9;
        conversionF = valueToConvert;
        conversionK = conversionC + 273.15;
    }
    //if the kelvin field changes
    else if (convertFrom === "Kelvin") {
        conversionC = valueToConvert - 273.15;
        conversionF = conversionC * 9 / 5 + 32;
        conversionK = valueToConvert;
    }

    // Put the result
    if (convertTo === 'Celsius')
        document.querySelector('.result').value = `${conversionC} 'C`;
    else if (convertTo === 'Fahrenheit')
        result.value = `${conversionF} 'F`;
    else if (convertTo === "Kelvin")
        result.value = `${conversionK} K`;
}

// Dark Theme To Light Them Logic
document.querySelector('input[name=checkbox]').addEventListener("change", () => {
    if (document.body.classList.contains("light")) {
        document.body.classList.replace("light", "dark")
        document.querySelector('nav').style = "background-color: black; color: white;";
        document.querySelector('.wrapper').style = "background-color: #192347; color: white;";
        document.querySelector('.text').style = "background-color: #7c7c84; color: white;";
    }
    else {
        document.body.classList.replace("dark", "light")
        document.querySelector('nav').style = "background-color: rgb(190, 188, 188); color: black;";
        document.querySelector('.wrapper').style = "background-color: white; color: black;";
        document.querySelector('.text').style = "background-color: white; color: black;";
    }
})
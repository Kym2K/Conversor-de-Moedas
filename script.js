const convertButton = document.querySelector(".botao-converter")
const currencySelect = document.querySelector(".currency-select")

const convertValues = async() =>{
    const inputCurrencyValue = document.querySelector(".input-value").value
    const currencyValueToConvert = document.querySelector(".currency-value")
    const currencyValueConverted = document.querySelector(".currency-value-converted");

   const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

   const dolar = data.USDBRL.high
   const euro = data.EURBRL.high


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolar);

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euro);

    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-RU", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraTuday);

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);

};

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./img/dolar.png"

    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra esterlina"
        currencyImage.src = "./img/libra.jpg"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./img/Euro.png"

        convertValues()

    }
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

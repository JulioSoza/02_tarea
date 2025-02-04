function convertCurrency() {
    // Obtiene el valor de la cantidad ingresada
    const inputAmount = parseFloat(document.getElementById('inputAmount').value);
    // Obtiene la moneda seleccionada
    const inputCurrency = document.getElementById('inputCurrency').value;

    // Verifica si el valor ingresado es un número válido
    if (isNaN(inputAmount)) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }

    // Tasas de cambio (valores aproximados)
    const exchangeRates = {
        RUB: { RUB: 1, CNY: 0.08, USD: 0.011 },
        CNY: { RUB: 12.5, CNY: 1, USD: 0.14 },
        USD: { RUB: 89.5, CNY: 7.14, USD: 1 }
    };

    // Realiza las conversiones
    const rubResult = inputAmount * exchangeRates[inputCurrency].RUB;
    const cnyResult = inputAmount * exchangeRates[inputCurrency].CNY;
    const usdResult = inputAmount * exchangeRates[inputCurrency].USD;

    // Actualiza los resultados en el DOM
    document.getElementById('rubResult').textContent = `${rubResult.toFixed(2)} RUB`;
    document.getElementById('cnyResult').textContent = `${cnyResult.toFixed(2)} CNY`;
    document.getElementById('usdResult').textContent = `${usdResult.toFixed(2)} USD`;
}
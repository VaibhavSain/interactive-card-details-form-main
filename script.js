function hideDiv() {
    // Get the input values
    const nameInput = document.getElementById("name-input");
    const numberInput = document.querySelector(".number-input"); // Changed to use class selector
    const monthInput = document.getElementsByClassName("month-input");
    const yearInput = document.getElementsByClassName("year-input");
    const cvcInput = document.getElementsByClassName("cvc-input");

    // Update the card display
    const cardNumber = document.getElementById("card-number");
    const cardName = document.getElementById("card-name");

    cardNumber.textContent = numberInput.value; // Set card number
    cardName.textContent = nameInput.value; // Set card name

    // Optionally, you can also set the expiration date and CVC if needed
    const year = document.getElementsByClassName('year');
    const month = document.getElementsByClassName("month");
    const cvc = document.getElementById("cvc");

    year.textContent = yearInput.value; // Set year
    month.textContent = monthInput.value; // Set month
    cvc.textContent = cvcInput.value; // Set CVC

    
}
document.getElementById('Btn').addEventListener('click', hideDiv);

const btn = document.getElementById("btn");
const form = document.getElementById("form");

form.addEventListener("submit", () => {
    const inputValue = parseInt(document.getElementById("numero").value);
    console.log(inputValue);

    if ( inputValue % 2 === 0) {
        alert("Es par")
    } else {
        alert("Es impar")
    }
})

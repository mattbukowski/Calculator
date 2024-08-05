const container = document.querySelector(".container")
container.style.cssText = `width: 800px; height: 800px;`
const results = document.querySelector(".results")
const btnDigit = document.querySelectorAll(".digitsButton")
const btnOperat = document.querySelectorAll(".operatButton")
const equals = document.querySelector("#equals")
const number1 = [];
const operat = [];
const number2 = [];
const result = [];

btnDigit.forEach(button => {
    button.addEventListener("click", e => {
        if (operat.length < 1) {
            const clickedSymbol = button.dataset.selection
            number1.push(clickedSymbol)
            results.append(clickedSymbol)
            console.log(clickedSymbol)
        }
    })
})
results.append(number1)
console.log(number1)

btnOperat.forEach(button => {
    button.addEventListener("click", e => {
        const clickedSymbol = button.dataset.selection
        operat.push(clickedSymbol)
        results.append(clickedSymbol)
        console.log(clickedSymbol)
    })
})

results.append(operat)
console.log(operat)

btnDigit.forEach(button => {
    button.addEventListener("click", e => {
        if (operat.length > 0) {
            const clickedSymbol = button.dataset.selection
            number2.push(clickedSymbol)
            results.append(clickedSymbol)
            console.log(clickedSymbol)
        }
    })
})

results.append(number2)
console.log(number2)

equals.addEventListener("click", e => {
    const clickedSymbol = equals.dataset.selection
    result.push(clickedSymbol)
    results.append(clickedSymbol)
    if (operat[0] == "+") {
        const adding = +number1.join("") + +number2.join("")
        console.log(adding)
        results.append(adding)
    } else if (operat[0] == "-") { 
        const adding = +number1.join("") - +number2.join("")
        console.log(adding)
        results.append(adding)
    } else if (operat[0] == "*") {
        const adding = +number1.join("") * +number2.join("")
        console.log(adding)
        results.append(adding)
    } else if (operat[0] == "/") {
        const adding = +number1.join("") / +number2.join("")
        console.log(adding)
        results.append(adding)
    }
}
)

results.append(result)
console.log(result)
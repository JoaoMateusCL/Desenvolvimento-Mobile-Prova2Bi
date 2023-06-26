function comecar()
{
    document.getElementById("btn1").removeAttribute("hidden")
    document.getElementById("btn2").removeAttribute("hidden")
    document.getElementById("btn3").removeAttribute("hidden")
    document.getElementById("btn4").removeAttribute("hidden")
    document.getElementById("btn5").removeAttribute("hidden")
    document.getElementById("btn6").removeAttribute("hidden")
    document.getElementById("btn7").removeAttribute("hidden")
    let entradaDados = window.prompt("Digite uma lista de números separados por virgula: ")
    numeros = entradaDados.split(",").map(Number)
    if (numeros.some(isNaN)) 
    {
        document.getElementById("resultado").textContent = "Entrada inválida. Certifique-se de digitar apenas números separados por vírgula."
    }
    else
    {
        window.alert("Tudo certo!!, agora clique nos botões para ver o que o metodo reduce pode fazer!!")
    } 
}

function revelar()
{
    document.getElementById("menuNavegacao").removeAttribute("hidden")
}

function calcularMedia() 
{
    const soma = numeros.reduce((acumulador, valorAual) => acumulador + valorAual)
    const media = soma / numeros.length

    document.getElementById("resultado").textContent = `A media dos números foi: ${media}`
}

function calcularSoma()
{
    const soma = numeros.reduce((acumulador, valorAual) => acumulador + valorAual)
    document.getElementById("resultado").textContent = `A soma de todos os números foi: ${soma}`
}

function calcularSub()
{
    const sub = numeros.reduce((acumulador, valorAual) => acumulador - valorAual)
    document.getElementById("resultado").textContent = `A subtração de todos os números foi: ${sub}`
}

function calcularMult()
{
    const mult = numeros.reduce((acumulador, valorAual) => acumulador * valorAual)
    document.getElementById("resultado").textContent = `A subtração de todos os números foi: ${mult}`
}

function calcularDiv()
{
    const div = numeros.reduce((acumulador, valorAual) => acumulador / valorAual)
    document.getElementById("resultado").textContent = `A subtração de todos os números foi: ${div}`
}

function calcularMax()
{
    const max = numeros.reduce((acumulador, valorAual) => Math.max(acumulador, valorAual))
    document.getElementById("resultado").textContent = `O maior número digitdo foi: ${max}`
}


function calcularMin()
{
    const min = numeros.reduce((acumulador, valorAual) => Math.min(acumulador, valorAual))
    document.getElementById("resultado").textContent = `O menor número digitdo foi: ${min}`
}
let egale = [6/8]

function printValue() {
    const selector = document.querySelector('.button-3')
    const pop = document.querySelector('.pop-up')
    const value = pop.innerHTML += Number('7')
    pop.innerHTML = value
    console.log()


}
function printValue2() {
    const selector2 = document.querySelector('.button-3')
    const pop2 = document.querySelector('.pop-up')
    const value2 = pop2.innerHTML += Number('8')
    pop2.innerHTML = value2

}
function printValue3 () {
    const selector3 = document.querySelector('.button-3')
    const pop3 = document.querySelector('.pop-up')
    const value3 = pop3.innerHTML += Number('9')
}
function printValue4 () {
    const selector4 = document.querySelector('.button-5')
    const pop4 = document.querySelector('.pop-up')
    const value4 = pop4.innerHTML += Number('4')
}
function printValue5 () {
    const selector4 = document.querySelector('.button-5')
    const pop4 = document.querySelector('.pop-up')
    const value4 = pop4.innerHTML += Number('5')
}
function printValue6 () {
    const selector5 = document.querySelector('.button-5')
    const pop5 = document.querySelector('.pop-up')
    const value5 = pop5.innerHTML += Number('6')
}
function printValue7 () {
    const selector4 = document.querySelector('.button-7')
    const pop4 = document.querySelector('.pop-up')
    const value4 = pop4.innerHTML += Number('1')
}
function printValue8 () {
    const selector4 = document.querySelector('.button-7')
    const pop4 = document.querySelector('.pop-up')
    const value4 = pop4.innerHTML += Number('2')
}
function printValue9 () {
    const selector4 = document.querySelector('.button-7')
    const pop4 = document.querySelector('.pop-up')
    const value4 = pop4.innerHTML += Number('3')
}
function printValue10 () {
        const selector4 = document.querySelector('.button-9')
        const pop4 = document.querySelector('.pop-up')
        const value4 = pop4.innerHTML += Number('0')
}
function printValue11 () {
    const selector4 = document.querySelector('.button-10')
    const pop4 = document.querySelector('.pop-up')
    const value4 = pop4.innerHTML += '.'
}
function AC() {
    const selector4 = document.querySelector('.button-1')
    const pop8 = document.querySelector('.pop-up')
    const value4 = pop8.innerHTML = ''
}
function devide() {
    const selector4 = document.querySelector('.button-2')
    const pop4 = document.querySelector('.pop-up')
    const value4 = pop4.innerHTML += '/' 
}
function multiply() {
    const selector4 = document.querySelector('.button-4')
    const pop4 = document.querySelector('.pop-up')
    const value4 = pop4.innerHTML += '*' 
}
function minus() {
    const selector4 = document.querySelector('.button-6')
    const pop4 = document.querySelector('.pop-up')
    const value4 = pop4.innerHTML += '-' 
}
function plus() {
    const selector4 = document.querySelector('.button-8')
    const pop4 = document.querySelector('.pop-up')
    const value4 = pop4.innerHTML += '+' 
}
function equal () {
    for (let i = 0; i < egale.length; i++) {
        const main = document.querySelector('.pop-up').innerHTML = eval( document.querySelector('.pop-up').innerHTML)
        console.log(egale)
    }
}


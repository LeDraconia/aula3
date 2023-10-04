
let velocidade = 0
let nave = prompt("Seja bem vindo,digite o nome da nave")



/*
let contador = 1

while(contador <= 100){
    console.log(contador)
    contador++
}
*/

let opcao = true

while(opcao){
    let menu = prompt("1 - Acelerar a nave em 5km \n 2 - Desacelerar em 5km - \n 3 Imprimir dados de bordo - \n 4 Sair")

    if(menu == 1){
        Acelerar()
    } else if(menu == 2){
        desacelerar()
    } else if(menu == 3){
        dados()
    } else if(menu == 4){
        alert("Obrigado(a) por viajar conosco!")
        opcao = false
    } else {
        alert("Opção Inválida")
    }
}

function Acelerar(){
    velocidade += 5 /*velocidade +5 */
    return alert(velocidade)
}

function desacelerar(){
    if(velocidade <=0){
        alert("A nave já está parada")
    } else {
        velocidade -=5
    }
    return alert(velocidade)
}

function dados(){
    return alert("O nome da nave é "+nave+" e a velocidade atual é"+velocidade)
}

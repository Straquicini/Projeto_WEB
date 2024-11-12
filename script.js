/** MOSTRAR UMA MSG AO USER **/
alert ( "*** BEM VINDO AO JOGO DO GALO ***")

// MUDAR O CONTEUDO EM HTML DO
// ELEMENTO COM O ID Q5



document.getElementById ("q5").innerHTML = "X";

let q1 = document.getElementById("q1").innerHTML;
let q5 = document.getElementById("q5").innerHTML;
//alert(q1)
if (q1 == 1 && q5 == "X"){
    alert ("GANHOU ?!")
}

document.getElementById("q2").addEventListener("click", altera);

function altera (x){
    let qx = document.getElementById('q'+ x).innerHTML;
    if (x != undefined){
        //alert("cliquei")
        if (x == qx){
            //("alert posição livre")
            document.getElementById('q' + x).innerHTML = 'O'
        }
    } else {
        //alert ("sera que cliquei !")
    }
}









/** msg de consola **/
/**console.log("a minha página leu com sucesso")

let x, y, z
x = 10
y = 1
z = x + y
console.log(x + " + " + y + " = " + z)**/

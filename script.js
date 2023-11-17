//h1 {color:red}
//.parrafito {...}
// #pid {....}

const form = document.querySelector('#form');
const h1 = document.querySelector('h1'); //diferente a
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//forma B:
//btn.addEventListener('click',btnOnClick); //escuchamos el evento click del botón y llamamos la función btnOnclick

//forma C:
form.addEventListener('submit',btnOnClick) // escuchemos el evento submit del form y cuando eso pase lo mandamos a ejecutar la fnc btnOnclick

function btnOnClick(event){
    //console.log('se presiona el btn bien');
    //console.log(input1.value+input2.value)
    console.log({event})
    event.preventDefault();//para que no se recargue la página y no cambie la URL
    const sumaInputs = Number(input1.value)+Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}


/*
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito')
const pid=document.querySelector('#pid')
const input=document.querySelector('input');
*/


/*
console.log(h1) //diferente a

console.log(input.value);

console.log(
    {
        h1,
        p,
        parrafito,
        pid,
        input,
    }
)

h1.innerHTML="santi <br> Lindo";
//h1.innerText="santi <br> Lindo";
console.log(h1.getAttribute('class'))
//console.log(p.getAttribute('class'))
h1.setAttribute('class','rojo')

h1.classList.add('amarillo')
h1.classList.remove('amarillo')


input.value="15234"

const img= document.createElement('img');

img.setAttribute('src','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tycsports.com%2Fseleccion-argentina%2Fseleccion-argentina-messi-modelo-nueva-coleccion-retro-id547527.html&psig=AOvVaw1tT3QuMBwK8Ht1HvTtmdKS&ust=1700078735582000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLii-fqkxIIDFQAAAAAdAAAAABAE')

console.log(img)

pid.append(img)

*/
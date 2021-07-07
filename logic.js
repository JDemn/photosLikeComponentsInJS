const names = ["juan", "Melissa", "Jazmin", "Janeth", "Gerzaín"];
//generear aleatorios con el tamaño del arreglo
let numberRandom = Math.floor(Math.random()*names.length);
//console.log('nombre dado por número aleatorio' + names[numberRandom]);

const $cuerpo = document.getElementById("cuerpo");

const Avatar = params=>{
    const src = `https://randomuser.me/api/portraits/men/${params.id}.jpg`;     
    return `
    <picture>
    <img src = "${src}"/>
    ${params.name}
    </picture>
    `
};

//show imagen with params
$cuerpo.innerHTML += Avatar({id : 3, name : names[numberRandom]});
$cuerpo.innerHTML += Avatar({id : 1, name : names[numberRandom]});
$cuerpo.innerHTML += Avatar({id : 4, name : names[numberRandom]});
$cuerpo.innerHTML += Avatar({id : 5, name : names[numberRandom]});

//recorrer todas las imagenes con js .  classList, añade una clase como si fuera atributo class= "whethever"
$cuerpo.querySelectorAll('img').forEach(img=>{
    img.addEventListener('click', ()=>{
        img.classList.toggle('disabled');
    })
})
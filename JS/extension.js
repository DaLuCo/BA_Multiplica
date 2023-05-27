let nombre = "Daniela";
let apellido = "Comes";
let edad = 35;
let profesion = "actriz y bailarina";
console.log("Hola. Mi nombre es "+nombre+" "+apellido+", tengo "+edad+" "+"años "+"y soy "+profesion);

alert("¡Bienvenidos/as! 👋😊");

let toggle = document.getElementById('toggle');
toggle.addEventListener('click', (event)=>{
  let checked= event.target.checked;
  document.body.classList.toggle('dark');
    if (checked==true){}
  })

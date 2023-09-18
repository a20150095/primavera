alert("Bienvenido a la Pagina de javascript");
var nom = prompt("Ingrese su nombre y apellido");
var res1 = prompt("¿Como se llama el primer dia de la Primavera? \nA: Primer día de la Primavera\nB: Equinoccio de primavera\nC: Equinoccio de Invierno");
if(res1=="B"){
  res1 = 25;
}else{
    res1 = 0;
}

var res2 = prompt("¿Que sucede en el Polo Norte cuando llega la Primavera? \nA: 6 meses de luz diurna ininterrumpida\nB: 6 meses de oscuridad ininterrumpida\nC: 6 meses de alternancia de luz y oscuridad");
if(res2=="A"){
    res2 = 25;
  }else{
      res2 = 0;
  }

  var res3 = prompt("¿En que mes empieza la Primavera en el Hemisferio Norte? \nA: Septiembre\nB: 6 Junio\nC: Marzo");
if(res3=="C"){
    res3 = 25;
  }else{
      res3 = 0;
  }
  
  var res4 = prompt("¿Que es la Fiesta de la Primavera en China? \nA: La navidad\nB: 6 El año nuevo\nC: Fiestas patrias");
  if(res4=="C"){
      res4 = 25;
    }else{
        res4 = 0;
    }
  

var total = res1 + res2 + res3 + res4





document.write("<h1>Condicionales</h1>")
document.write("Respuesta <br>")
document.write(nom + " tus resultados son <br> ");
document.write(total + "% de respuestas correctas");

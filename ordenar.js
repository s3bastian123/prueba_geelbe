function ejecutar(){
  document.getElementById("imprimir").innerHTML="";
  var parrafo = document.getElementsByTagName("input")[0].value,
  separa = " ",
  arrayPalabras = parrafo.split(separa);

  for (var i = 0; i < arrayPalabras.length; i++) {
    let palabra = arrayPalabras[i],
    letras = palabra.split(''),
    resultado = combinar(letras).map(function(a) {
      return a.join('');
    });

    resultado = resultado.sort();

    let original = document.createElement("p"),
    combinaciones  = document.createElement("div"),
    todas = document.createTextNode(resultado),
    inicial = document.createTextNode(palabra);
    original.appendChild(inicial);
    combinaciones.appendChild(todas);
    document.getElementById("imprimir").appendChild(original);
    document.getElementById("imprimir").appendChild(combinaciones);
  }
}

function combinar(texto) {
  var info = texto.slice(),
  resultados = [],
  numLetras = info.length;

  if (numLetras > 0) {
    var primera = info.shift(),
    palabras = combinar(info);

    palabras.forEach(function(palabra) {
      for (var i = 0; i < numLetras; ++i) {
        let temporal = palabra.slice();
        temporal.splice(i, 0, primera)
        resultados.push(temporal);
      }
    });
  }
  else {
    return [
      []
    ];
  }
  return resultados;
}

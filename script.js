// Carne - 400g por pessoa + de 6h - 650g
// Cerveja - 1200ml por pessoa + 6h - 2000ml  (1 lata cerv = 355ml)
// Refrigerante/agua - 1000ml por pessoa + 6h 1500ml
// Crianças valem por 0,5

function cal() {
  var d = document.getElementById('somatoria')
  var a = document.getElementById('adultos').value
  var c = document.getElementById('crianças').value
  var t = document.getElementById('duração').value
  var carne
  var cerveja
  var refri
  if (t <= 6) {
    carne = a * 400 + c * 0.5 * 400
    cerveja = a * 1200
    refri = a * 1000 + c * 0.5 * 1000
  } else {
    carne = a * 650 + c * 0.5 * 650
    cerveja = a * 2000
    refri = a * 1500 + c * 0.5 * 1500
  }
  d.innerHTML = `<h4>Carne, Cerveja e Refrigerante:</h4>`
  d.innerHTML += `<p>Quantidade de Carne: ${carne / 1000} kg </p>`
  d.innerHTML += `<p>Cerveja (latinha): ${Math.ceil(cerveja / 355)} </p>`
  d.innerHTML += `<p>Refrigerante (Garrafas de 2l): ${Math.ceil(
    refri / 2000
  )} </p>`
}

const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura?',
  'daaale si siempre sos curiosa',
  'daaa que te haces ahora la que no :(',
  'porfi mirá',
  'Piensalo muy bien',
  'Piensalo',
  'Mirá el otro botón',
  'Pero es algo bueno',
  'Te prometo que te va a gustar'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})
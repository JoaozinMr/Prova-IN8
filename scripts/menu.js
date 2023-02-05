const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('#navMenu')
let img = document.querySelector('#burger')

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active')
  img.setAttribute('src', './icons/hamburguer-aberto0.svg')
  hamburger.classList.toggle('active')
})

document.querySelectorAll('li').forEach(n =>
  n.addEventListener('click', () => {
    navMenu.classList.remove('active')
    img.setAttribute('src', './icons/hamburguer.svg')
    hamburger.classList.remove('active')
  })
)

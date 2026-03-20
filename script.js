function carregar(){
    let fun = document.querySelector('p#fun')
    let atual = new Date()
    let dia = atual.getDay()
    let hora = atual.getHours()

    if(dia > 0 && hora >= 8 && hora <=17){
        fun.innerHTML = '<strong>Aberto Agora</strong>'
        fun.style.color = 'green'
    }else{
        fun.innerHTML = '<strong>Fechado a agora</strong>'
        fun.style.color = 'red'
    }
}
const btn = document.getElementById('btn-mobile')
function mostramenu(){
    let menu = document.querySelector('nav#menu')
    let simbol = document.getElementById('simbol')
    menu.classList.toggle('active')
    if(menu.classList.contains('active')){
        simbol.innerHTML = 'close'
    }else{
        simbol.innerHTML = 'menu'
    }
}
const myobserver = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const elements = document.querySelectorAll('.hiden')
elements.forEach((element)=> myobserver.observe(element))

window.addEventListener('load', carregar)
btn.addEventListener('click', mostramenu)
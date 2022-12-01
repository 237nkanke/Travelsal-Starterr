const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

let me = document.getElementById('me')
let you = document.getElementById('l1')
let comes = document.querySelectorAll('.price-bo')

console.log(comes)
// console.log(blo)
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        me.style.borderColor = 'white'
        me.style.bordercolor= 'white'
        you.style.borderColor = 'white'
        rt.style.Color = 'white'
        comes.forEach(come  => {
            come.classList.remove('price-bo')
            come.classList.add('price')
            // come.style.bordercolor= 'white'
        })
       
       
       
       
       
        
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          me.style.borderColor = 'black'
          you.style.borderColor = 'black'
          comes.forEach(come  => {
            come.classList.remove('price')
            come.classList.add('price-bo')
            // come.style.bordercolor= 'white'
        })
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);













const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.slider .simage')
const pre = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')

let counter = 1;

const size = images[0].clientWidth;
console.log(size)


slider.style.transform = 'translateX(' + (-size * counter) + 'px)';




next.addEventListener('click' , () => {
    if(counter >= images.length -1) return;
    slider.style.transition = 'transform 0.4s ease-in-out'
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
pre.addEventListener('click' , () => {
    if(counter <= 0) return;
    slider.style.transition = 'transform 0.4s ease-in-out'
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})


slider.addEventListener('transitionend', () =>
{
    if(images[counter].id === 'last') {
        slider.style.transition = 'none';
        counter = images.length - 2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } 
    if(images[counter].id === 'first') {
        slider.style.transition = 'none';
        counter = images.length - counter;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } 
})
let num1 = document.querySelector('[data-v1]')
let num2 = document.querySelector('[data-v2]')
let display=document.querySelector('[data-answer]')
let minb=document.querySelector('[data-btn1]')
let maxb=document.querySelector('[data-btn2]')

//function to identify min value
function minMax(a,b) {
    let min=a
    let max=b
    if (min<max) {
        display.value = Math.min(a, b);
    } 
}

//add min function to min btn
minb.addEventListener('click' , function() {
let num1 = document.querySelector('[data-v1]').value
let num2 = document.querySelector('[data-v2]').value
minMax(num1,num2)
    
})

//function to identify max value
function maxMin(a,b) {
    let min=a
    let max=b
    if (max>min) {
        display.value = Math.max(a, b);
    }
    
}

//adds max function to max btn
maxb.addEventListener('click' , function() {
    let num1 = document.querySelector('[data-v1]').value
    let num2 = document.querySelector('[data-v2]').value
    maxMin(num1,num2)
    
        
    })
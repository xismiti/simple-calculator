function insert(num){

    var number = document.getElementById('display').innerHTML
    if (display){
        document.getElementById('display').innerHTML = number + num
    }
}
function clean(){
    document.getElementById("display").innerHTML = ''
}
function back(){
    var result = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = result.substring(0, result.length - 1 )
}

function rest(){
    var result = document.getElementById("display").innerHTML;

    if(result){
        document.getElementById('display').innerHTML = eval(result)
    }

}

function easteregg(){
    
    var a = document.querySelector("div.gif")
    a.style.display= ('block')
    

}

const btn = document.querySelector('div.btn')
const container = document.querySelector("div.container")



btn.onclick = function theme(){
    this.classList.toggle('active')
    container.classList.toggle('active')


}



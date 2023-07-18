const bars = document.getElementById('bars');
const close = document.getElementById('close');
const popup = document.querySelector('.options');
const sta = document.getElementById('sta');
const science = document.getElementById('science');
var stand = document.getElementById('stand');
var scientific = document.getElementById('scientific');

sta.addEventListener('click', ()=>{
    stand.classList.add('active');
    scientific.classList.remove('active');
    popup.classList.remove('active')
})
science.addEventListener('click', ()=>{
    scientific.classList.add('active');
    stand.classList.remove('active');
    popup.classList.remove('active')
})
bars.addEventListener('click', ()=>{
    popup.classList.toggle('active');
    document.getElementById('answer').value = '';
    document.getElementById('initial-value').value = '';
});

var answer = document.getElementById('answer');

var initialValue = document.getElementById('initial-value');

function calculate(value){
    answer.value+= value;
    initialValue.value+= value;    
}
document.getElementById("modul").addEventListener("click", (el)=>{
    console.log(el.target);
    if(document.getElementById('answer').value == ""){
        el.target.disabled = "true";
    } else{
        document.getElementById("answer").value += el.target.innerHTML;
        document.getElementById("initial-value").value += el.target.innerHTML;
    }
})


function evalu(){
    var initialValue = document.getElementById('initial-value').value;
    var total = eval(initialValue);
    document.getElementById('answer').value = total;
}

function deleteAll(){
document.getElementById('initial-value').value = '';

document.getElementById('answer').value = '';
    
}
function clearTotal(){
    document.getElementById('answer').value = '';
}

function deleteOne(){
    var whatToDelete = document.getElementById('answer').value;
    var len = whatToDelete.length;
    document.getElementById('answer').value = whatToDelete.slice(0,len-1);
}

function sqrtOf(){
    var number = document.getElementById('initial-value').value;
    var root = Math.sqrt(number);
    document.getElementById('answer').value = root;
}
function squareOf(){
    var number = document.getElementById('initial-value').value;

    var square = Math.pow(number, 2);
    document.getElementById('answer').value = square;
}

function oneOfNum(){
    var number = document.getElementById('initial-value').value;

    var ans = 1/number;
    // document.getElementById('answer').value = ans;
    if(document.getElementById('initial-value').value == '0' || document.getElementById('initial-value').value == ''){
        document.getElementById('answer').value = 'Cannot divide by zero';
    } else {
        document.getElementById('answer').value = ans;
    }
}


// scientific functions
var answer2 = document.getElementById('answer2');

var initialValue2 = document.getElementById('initial-value2');

function calculate2(value){
    answer2.value+= value;
    initialValue2.value+= value;
}

function evalu2(){
    var initialValue2 = document.getElementById('initial-value2').value;
    var total = eval(initialValue2);

    document.getElementById('answer2').value = total;
}

function deleteAll2(){
document.getElementById('initial-value2').value = '';

document.getElementById('answer2').value = '';
    
}
function clearTotal2(){
    document.getElementById('answer2').value = '';
}

function deleteOne2(){
    var whatToDelete2 = document.getElementById('answer2').value;
    var len2 = whatToDelete2.length;
    document.getElementById('answer2').value = whatToDelete2.slice(0,len2-1);
}

function del(){

    var whatToDel = document.getElementById('initial-value2').value;
    var le2 = whatToDel.length;
    document.getElementById('initial-value2').value = whatToDel.slice(0,le2-1);
    document.getElementById('answer2').value = '';
}

function sqrtOf2(){
    var number = document.getElementById('initial-value2').value;
    var root = Math.sqrt(number);
    document.getElementById('answer2').value = root;
}

function tenRaise(){
    var number = document.getElementById('initial-value2').value;
    var answer = Math.pow(10, number);
    document.getElementById('answer2').value = answer;
}
function squareOf2(){
    var number = document.getElementById('initial-value2').value;

    var square = Math.pow(number, 2);
    document.getElementById('answer2').value = square;
}

function oneOfNum(){
    var number = document.getElementById('initial-value').value;

    var ans = 1/number;
    // document.getElementById('answer').value = ans;
    if(document.getElementById('initial-value').value == '0' || document.getElementById('initial-value').value == ''){
        document.getElementById('answer').value = 'Cannot divide by zero';
    } else {
        document.getElementById('answer').value = ans;
    }
}

function sineOf(){
    var val = document.getElementById('initial-value2').value;
    var sineOfNumber = Math.sin(val);
    document.getElementById('answer2').value = sineOfNumber;
}

function cosOf(){
    var val = document.getElementById('initial-value2').value;
    var sineOfNumber = Math.cos(val);
    document.getElementById('answer2').value = sineOfNumber;
}
function tanOf(){
    var val = document.getElementById('initial-value2').value;
    var sineOfNumber = Math.tan(val);
    document.getElementById('answer2').value = sineOfNumber;
}

function logOf(){
    var val = document.getElementById('initial-value2').value;
    var sineOfNumber = Math.log(val);
    document.getElementById('answer2').value = sineOfNumber;
}

window.addEventListener("keydown", (event)=>{
    // answer.value += event.key;
    // initialValue += event.key;
    switch (event.key) {
        case "0":
            answer.value += event.key;
            initialValue += event.key;
            break;
            case "Backspace":
                var whatToDel1 = document.getElementById('answer').value;
                var whatToDel2 = document.getElementById('initial-value').value;
                var le1 = whatToDel1.length;
                var le2 = whatToDel2.length;
                document.getElementById('answer').value = whatToDel1.slice(0,le1-1);
                document.getElementById('initial-value').value = whatToDel2.slice(0,le2-1);
                var whatToDel3 = document.getElementById('answer2').value;
                var whatToDel4 = document.getElementById('initial-value2').value;
                var le3 = whatToDel3.length;
                var le4 = whatToDel4.length;
                document.getElementById('answer2').value = whatToDel3.slice(0,le3-1);
                document.getElementById('initial-value2').value = whatToDel4.slice(0,le4-1);
                break;
            case "1":
            var num = Number(event.key);
            document.getElementById("answer").value += num;
            document.getElementById("initial-value").value += num;
            document.getElementById("answer2").value += num;
            document.getElementById("initial-value2").value += num;
            break;
        case "2":
            var num = Number(event.key);
            document.getElementById("answer").value += num;
            document.getElementById("initial-value").value += num;
            document.getElementById("answer2").value += num;
            document.getElementById("initial-value2").value += num;
            break;
        case "3":
            var num = Number(event.key);
            document.getElementById("answer").value += num;
            document.getElementById("initial-value").value += num;
            document.getElementById("answer2").value += num;
            document.getElementById("initial-value2").value += num;
        case "4":
            var num = Number(event.key);
            document.getElementById("answer").value += num;
            document.getElementById("initial-value").value += num;
            document.getElementById("answer2").value += num;
            document.getElementById("initial-value2").value += num;
            break;
        case "5":
            var num = Number(event.key);
            document.getElementById("answer").value += num;
            document.getElementById("initial-value").value += num;
            document.getElementById("answer2").value += num;
            document.getElementById("initial-value2").value += num;
            break;
        case "6":
            var num = Number(event.key);
            document.getElementById("answer").value += num;
            document.getElementById("initial-value").value += num;
            document.getElementById("answer2").value += num;
            document.getElementById("initial-value2").value += num;
            break;
        case "8":
            var num = Number(event.key);
            document.getElementById("answer").value += num;
            document.getElementById("initial-value").value += num;
            document.getElementById("answer2").value += num;
            document.getElementById("initial-value2").value += num;
            break;
        case "9":
            var num = Number(event.key);
            document.getElementById("answer").value += num;
            document.getElementById("initial-value").value += num;
            document.getElementById("answer2").value += num;
            document.getElementById("initial-value2").value += num;
            break;
        default:
            break;
    }
})


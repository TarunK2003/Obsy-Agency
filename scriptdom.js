/*Accessing  Element:
    document.querySelector()

Modifying Elements:
    innerHTML, textContent
*/

/*
var btn = document.querySelector('button');
btn.textContent += "Staring Now!!";

var h1 = document.querySelector('h1');
h1.innerHTML = '<i>Hello guys</i>';


/*Manipulating Styles and Classes:
    style
    classList*/
  /*  var btn = document.querySelector('button');
    btn.style.color = "red";
    btn.style.fontSize = "13px";
    btn.style.fontFamily = "monument";
    btn.classList.add("btn");
*/

//creating and deleating Elemets
//createElemts se ma koi bhi elemts bana sak tha hu bina use html me likhe 
/*var h1 = document.createElement('h1');
h1.textContent = "Hello Guys";
h1.classList.add('makeitred');
document.querySelector("body").appendChild(h1);//iski help se ma apne child ko jod sak tha hu kisi bhi parents ke sath bs bosy ki jagha uska nam aa jayega
*/

//event Handling:
    //addEventListener()
/*
var btn = document.querySelector('button');
btn.addEventListener('click', function(){
    btn.textContent = "Start Downloading";
    btn.style.background = "yellow";
    btn.style.fontFamily = "monument";
    console.log(btn);
})
*/
//event object
 /*document.querySelector('body')
.addEventListener('mousemove', function(event){
    console.log(event);
    })
    

    */


//pratice of java script dom 
/*
var btn = document.querySelector('button');
var p = document.querySelector('p');
btn.addEventListener("click", function(){
    p.textContent = "Downloading Now";
})
*/

/*
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');

document.querySelector('button').addEventListener("click" , function(){
    var src1 = img1.src;
    var src2 = img2.src;

    img1.src = src2;
    img2.src = src1;

})
        */


//question 3
/*var form = document.querySelector("form");
/*
var inp1 = document.querySelector("input1");
var inp2 = document.querySelector("input2");
*/
/*var inps = document.querySelectorAll('input[type="text"]'); 
var h4 = document.querySelector("h4");

form.addEventListener("submit" , function (ev){
    ev.preventDefault();//stop for refresh
    inps.forEach(function(inp){
        if(inp.value === ''){
            h4.textContent = "Fill this Feild";
            h4.style.color = "red";
        }
    })
    })
    */

//question 4
/*
var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp = document.querySelector("input");
var ul = document.querySelector('ul');

var li;
add.addEventListener("click" , function(){
    if( inp.value.trim() === ''){}
    else{
         li = document.createElement('li');
        li.textContent = inp.value;
        document.querySelector("ul").appendChild(li);
        inp.value = '';//blank kr ne ka liye
        ul

    }
})

remove.addEventListener("click" , function(){
    ul.removeChild(li);
})
*/

/*                        //question 5
var start = document.querySelector("#start");
var h3 = document.querySelector("h3");
var stop = document.querySelector("#stop");

start.addEventListener("click" , function(){
    var count = 0;//ham eventListner ke andhr kisi bhi function ko call nai kr sak the ha like =) "var int"
    int = setInterval(function(){
        h3.textContent = count;
        count++;
    }, 1000);
});

stop.addEventListener("click" , function(){
    clearInterval(int);
})
*/
  
//question 6
/*
var home = document.querySelector("#hometab");
var about = document.querySelector("#abouttab");
var contact = document.querySelector("#contacttab");

var homeh3 = document.querySelector("#homeh3");
var abouth3 = document.querySelector("#abouth3");
var contact3 = document.querySelector("#contacth3");


home.addEventListener("click", function(){
    clearscreen();
    homeh3.style.display = "block";
    homeh3.style.color = "green";
    home.style.cursur = "pointer";
})

about.addEventListener("click", function(){
    clearscreen();
    abouth3.style.display = "block";
    abouth3.style.color = "green";
    about.style.cursur = "pointer";
})

contact.addEventListener("click", function(){
    clearscreen();
    contacth3.style.display = "block";
    contacth3.style.color = "green";
    contact.style.cursur = "pointer";
})

function clearscreen(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = "none";
    })
}

*/

  /*              //question 7
                var prg = document.querySelector("#progress");

                var count = 0;
                var int = setInterval(function(){
                    if(count === 100){
                        clearInterval(int);
                    }
                    count++;
                    prg.style.width = count+'%';
                },100)
*/

//question 8




































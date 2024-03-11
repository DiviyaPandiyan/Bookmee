var popupoverlay =document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

// cancelbutton
 var cancelbtn=document.getElementById("cancel-btn")

 cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

 })
 
//  select container,add-btn,book-title,book-auther,book-discreption
 var container=document.querySelector(".container")
 var addbtn=document.getElementById("add-btn")
 var booktitle=document.getElementById("book-title")
 var bookauther=document.getElementById("book-auther")
 var bookdiscreption=document.getElementById("book-discreption")

 addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h4>${bookauther.value}</h4>
    <p>${bookdiscreption.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
 })

 function deletebook(event)
 {
event.target.parentElement.remove()
 }
  
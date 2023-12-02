//Open input field on clicking the "add new item" button
var input = document.querySelector("input");
var add = document.querySelector(".addbtn");
var btn = document.querySelector("button");
function openner(){
    input.style.display ="block";
    add.style.display ="block";
    btn.style.display ="none";
}

// Create a "close" button and append it to each list item
var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("item").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Write something before submitting!");
    } else {
      document.getElementById("myList").appendChild(li);
    }
    document.getElementById("item").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
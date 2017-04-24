//main card data list
  var to_do_list = document.getElementsByClassName("to-do-list");
  
  function populate(){
    var data = localStorage.getItem("data");
    to_do_list[0].innerHTML = data;
  }  

function add(){
  var text = prompt("To-do Note: ");
  to_do_list[0].innerHTML += "<div class='to-do-card'><p>"+ text +"</p></div>";
  console.log(to_do_list[0].innerHTML);
  
  //updating storage
  localStorage.setItem("data",to_do_list[0].innerHTML);
  
}

function reset(){
  //flush
  localStorage.removeItem("data");
  
  //re pop
  populate();
}
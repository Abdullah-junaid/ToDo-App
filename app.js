
var ul = document.getElementById('main-case')
var textBar = document.getElementById('text-bar')
var addBtn = document.getElementById('add-btn')
var database = firebase.database().ref('todos')
firebase.database().ref('todos').on('child_added',function(data){
    console.log(data.val())

    var li =document.createElement('li')
     var liText =document.createTextNode(data.val().value)
    li.appendChild(liText)
    ul.appendChild(li)


    textBar.value=""



    var dltBtn = document.createElement('Button')
    dltBtn.setAttribute("onclick","dlt(this)")
    dltBtn.setAttribute("id",data.val().key)
    var itag = document.createElement('i')
    itag.setAttribute("class","gg-close-o")
    dltBtn.appendChild(itag)
    li.appendChild(dltBtn);


    
    var edtbtn = document.createElement('Button')
    edtbtn.setAttribute("onclick","edit(this)")
    edtbtn.setAttribute("id",data.val().key)
    var edittagi = document.createElement('i')
    edittagi.setAttribute("class","gg-edit-markup")
    edtbtn.appendChild(edittagi)
    li.appendChild(edtbtn)

    
})




function dlt(e){
    e.parentNode.remove()
    firebase.database().ref('todos').child(e.id).remove()
}

function edit(e){
          var updatedvalue = prompt("Edit Your Task", e.parentNode.firstChild.nodeValue);
      var editTodo = {
          value : updatedvalue,
          key: e.id
      }
      firebase.database().ref('todos').child(e.id).set(editTodo)
      e.parentNode.firstChild.nodeValue = updatedvalue


}    
    

function addTodo(){
    
     var key = database.push().key;
     console.log(key)
     var todo = {
         value : textBar.value,
         key: key
     }
     database.child(key).set(todo)
     

    



    


 
  
}

function dltAll(){
    ul.innerHTML=""
   
}






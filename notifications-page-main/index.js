let notificationNumber = document.getElementById("notification");
let redDot = document.getElementById(`red-dot`)
let messege = document.querySelectorAll(`.afterRead`);

let totalNotifications = 3;
let messegeRead = false
function getMessegeRead(){
    
    for (let i = 0; i < messege.length; i++){
        messege[i].style.backgroundColor = `white`;
    }
     notificationNumber.innerHTML = 0
}
function mm(){
    
    if (totalNotifications === 0){
        notificationNumber.innerHTML = 0
    }
    else{
        notificationNumber.innerHTML =  totalNotifications-=1
    }   
}
function jj(){
    messegeRead = false
}
function getFirstMessege(){
  
    if(messegeRead  != true ){
        let firstMessege = document.getElementById("firstmessege")
        firstMessege.style.backgroundColor = `white`;
        redDot.style.display = `none`;
        mm()   
    }
}
function getSecondMessege(){
  
    if(messegeRead  != true ){
        let secondMessege = document.getElementById("secondmessege")
        secondMessege.style.backgroundColor = `white`;
        redDot.style.display = `none`;
       mm()  
    }
}
function getThirdMessege(){
  
    if(messegeRead  != true ){
        let thirdMessege = document.getElementById("thirdmessege")
        thirdMessege.style.backgroundColor = `white`;
        redDot.style.display = `none`;
        mm()   
    }

}

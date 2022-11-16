let notificationNumber = document.getElementById("notification");
let redDot = document.getElementById(`red-dot`)
let messege = document.querySelectorAll(`.afterRead`);


let secondMessege = document.getElementById("secondmessege");
let firstMessege = document.getElementById("firstmessege");
let thirdMessege = document.getElementById("thirdmessege")


















let totalNotifications = 3;
let messegeRead = false
function getMessegeRead(){
    totalNotifications = 0    
    for (let i = 0; i < messege.length; i++){
        messege[i].style.backgroundColor = `white`;
    }
     notificationNumber.innerHTML = totalNotifications
}
function notificationReduction(){
    
    if (totalNotifications === 0){
        notificationNumber.innerHTML = 0
    }
    else{
        notificationNumber.innerHTML = (totalNotifications=totalNotifications-1)
    }
  
    console.log(totalNotifications);
}
function getFirstMessege(){
     
    if(   firstMessege.style.backgroundColor != `white`){
        firstMessege.style.backgroundColor = `white`;
        document.querySelector(`.afterReadFirstMessege`).style.display = `none`
        notificationReduction()   
    }
}
function getSecondMessege(){
    
    if(secondMessege.style.backgroundColor = `white`){
        secondMessege.style.backgroundColor = `white`;
        document.querySelector(`.afterReadSecondMessege`).style.display = `none`
       notificationReduction()  
    }
}
function getThirdMessege(){
    
    if( thirdMessege.style.backgroundColor = `white`){
        thirdMessege.style.backgroundColor = `white`;
        document.querySelector(`.afterReadThirdMessege`).style.display = `none`
        notificationReduction()   
    }

}

$(document).ready(function(){
    let users=JSON.parse(localStorage.getItem("users")) || [];
    let userlist=$("#Regusers");

    if(users.length === 0){
        alert("no users Registered Yet");
    }else{
        users.forEach(user=>{
            userlist.append(`<li>User_Name:${user.User_Name} , Email_Id:${user.Email_Id} <li>`);
        });
    };
});
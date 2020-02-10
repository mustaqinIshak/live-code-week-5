"use strict"

// import { method } from "bluebird"
// import { response } from "express"

// import { method } from "bluebird"
// import { response } from "express"

$("#login-form").show()
$("#register-form").hide()
$("#home-page").hide()
$("#alert").hide()
$("#btn-logout").hide()
$("#edit-comic").hide()

checkLogin()

$("#register-button").on("click", function(event) {
    event.preventDefault()
    $("#login-form").hide()
    $("#register-form").show()
})

$("#login-button").on("click", function(event) {
    event.preventDefault()
    $("#login-form").show()
    $("#register-form").hide()
})

$("#register-form").on("submit", function(event){
    event.preventDefault()
    var name = $(".name-register").val()
    var email = $(".email-register").val()
    var password = $(".password-register").val()

    register(name, email, password)
})

$("#login-form").on("submit", function(event){
    event.preventDefault()
    var email = $(".email-login").val()
    var password = $(".password-login").val()

    login(email, password)    
})

$("#btn-logout").on("click", function(event) {
    event.preventDefault()
    localStorage.clear()
    checkLogin()
})

$("#edit-button").on("submit", function(event) {
    event.preventDefault()
    $("#edit-comic").show()
})

$("#edit-comic").on("click", function(event) {
    event.preventDefault()
    var title = $(".edit-title").val()
    var name = $(".name-title").val()
    var img = $(".edit-img").val()

    editComic(title, name, img)

})
function checkLogin() {
    if(localStorage.getItem("token")) {
        $("#home-page").show()
        $("#login-form").hide()
        $("#register-form").hide()
        $("#btn-logout").show()

        $.ajax({
            url: "http://localhost:3000/comics/",
            method: "GET",
            headers: {
                access_token: localStorage.getItem("token")
            }
        })
        .done(response => {
            console.log(response)
        })
        .fail(err => {
            console.log(err)
        })

    } else {
        $("#home-page").hide()
        $("#login-form").show()
        $("#register-form").hide()
        $("#btn-logout").hide()
    }
}

function register(name, email, password) {
    console.log(name, email, password)
    $.ajax({
        url: "http://localhost:3000/users/register",
        method: "POST",
        data: {
            name,
            email,
            password,

        }
    })
    .done(response => {
        console.log(response)
        localStorage.setItem("token", response.access_token)
        checkLogin()
    })
    .fail(err => {
        console.log(err)
    })
}

function login(email, password){
    $.ajax({
        url: "http://localhost:3000/users/login",
        method: "POST",
        data: {
            email,
            password
        }
    })
    .done(response => {
        console.log(response)
        localStorage.setItem("token", response.access_token)
        checkLogin()
    })
    .fail(err => {
        console.log(err)
    })
}

function editComic(title, name, img) {

}
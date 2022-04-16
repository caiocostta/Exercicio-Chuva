var commentDel = document.getElementById("createComment");
var commentForm = document.getElementById("commentForm");
var btnCreateComment = document.getElementById ("btnCreateComment");
var btnNewTopic = document.getElementById("btnNewTopic");
var commentSubmit = document.getElementById("commentSubmit");
var commentSent = document.getElementById("commentSent");
var newComment = document.getElementById("newComment");
var btnNav = document.getElementById("btnNav");
var navMobile = document.getElementById("navMobile");


btnCreateComment.addEventListener("click", createTopic);
btnNewTopic.addEventListener("click", createTopic);

function createTopic(){
    commentDel.style.display = "none";
    commentForm.style.display = "flex";
    commentSent.style.display = "none";
    newComment.style.display = "none";
}

commentSubmit.addEventListener("click", topicSent)

function topicSent(){
    commentForm.style.display = "none";
    commentSent.style.display = "flex";
    newComment.style.display = "flex";
}

btnNav.addEventListener("click", viewNav)

function viewNav(){
    if(navMobile.style.display == "none"){
        navMobile.style.display = "inline-flex";
    }else{
        navMobile.style.display = "none";
    }
}
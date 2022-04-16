function readMore(){
    var points=document.getElementById("points");
    var moreText=document.getElementById("more");
    var btnReadMore=document.getElementById("btnReadMore");

    if(points.style.display == "none"){
        points.style.display = "inline";
        moreText.style.display = "none";
        btnReadMore.style.display = "inline";
    }else{
        points.style.display = "none";
        moreText.style.display = "inline";
        btnReadMore.style.display = "none";
    }
}

var commentDel = document.getElementById("createComment")
var commentForm = document.getElementById("commentForm")
var btnCreateComment = document.getElementById ("btnCreateComment")
var btnNewTopic = document.getElementById(btnNewTopic)

btnCreateComment.addEventListener("click", createTopic)
btnNewTopic.addEventListener("click", createTopic)
function createTopic(){
    commentDel.style.display = "none";
    commentForm.style.display = "flex";
}

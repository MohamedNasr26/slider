var getPrevElemnet = document.querySelector(".fa-arrow-left");
var getNextElemnet = document.querySelector(".fa-arrow-right");
var HideImage = document.querySelector(".fa-circle-xmark");
var allImgs = Array.from(document.querySelectorAll("figure img"));
var innerDiv = document.querySelector(".innerDiv");
var myLayer = document.querySelector(".myLayer");
var IndexOfCkicledImage = 0;

for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].addEventListener("click", function (e) {

        //   get Image Src  

        var clickedImage = e.target;
        var clickedImageSrc = clickedImage.getAttribute("src");


        IndexOfCkicledImage =allImgs.indexOf(clickedImage);


        // change Backgorund
        
        innerDiv.style.backgroundImage = `url(${clickedImageSrc})`;


        myLayer.classList.remove("d-none");
    })

}

function getNextElement() {
    IndexOfCkicledImage++;
    if(IndexOfCkicledImage==allImgs.length){
        IndexOfCkicledImage =0;
    }else{
        var SrcOfNextElemnt=allImgs[IndexOfCkicledImage].getAttribute("src");
        innerDiv.style.backgroundImage=`url(${SrcOfNextElemnt})`;
    }
    
}
function getPrevElement() {
    IndexOfCkicledImage--;
    if(IndexOfCkicledImage == -1){
        IndexOfCkicledImage =allImgs.length;
    }else{
        var SrcOfPrevElemnt=allImgs[IndexOfCkicledImage].getAttribute("src");
        innerDiv.style.backgroundImage=`url(${SrcOfPrevElemnt})`;
    }
    
}
function hideElemnet(){
    myLayer.classList.add("d-none");
    
}

getNextElemnet.addEventListener("click", getNextElement)
getPrevElemnet.addEventListener("click", getPrevElement)
HideImage.addEventListener("click", hideElemnet)

document.addEventListener("keydown",function(e){
    if(e.code =="ArrowLeft"){
        getPrevElement();
    }else if(e.code =="ArrowRight"){
        getNextElement();
    }else if(e.code =="Escape"){
        hideElemnet();
    }
    
})

myLayer.addEventListener("click",function(e){
    if(e.target == myLayer){
        hideElemnet();
    }
})

let $keyword=$("#keyword");
const $imgArea=$("#imgArea");


$("#submit").on("click", async function(e){
    e.preventDefault();
    let keyWord=$("#keyword").val();
    let response= await axios.get("http://api.giphy.com/v1/gifs/search", {params:{q: keyWord, api_key:"qemeAgZSw9Zf1fZYe5Lz07QX6FIThkAI"}})
    $("#keyword").val("");
    createGif(response.data);
});



function createGif(gif){
   let $newDiv = $("<div>", {class: "col-md-4 col-12 mb-4"})
   let $newGif = $("<img>", {src : gif.data[0].images.original.url});
   $newDiv.append($newGif);
   $imgArea.append($newDiv);
    
}

$("#reset").on("click",function(){
    let imgs=document.querySelectorAll("img");
    for (let i of imgs){
        i.remove();
    }
})
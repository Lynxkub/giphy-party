
let $keyword=$("#keyword");
const imgArea=document.querySelector("#imgArea");


$("#submit").on("click", function(e){
    e.preventDefault();
    request();
    
})

async function request(){
    let keyWord=$("#keyword").val();
    let response= await axios.get("http://api.giphy.com/v1/gifs/search", {params:{q: keyWord, api_key:"qemeAgZSw9Zf1fZYe5Lz07QX6FIThkAI"}})
    
   createGif(response.data.data[0].url)
   $("#keyword").val("")
    
    }

function createGif(gif){
    let img=document.createElement("img");
    img.setAttribute("src", gif);
    img.setAttribute("sameSite", "None")
    img.classList.add("w-100");
    imgArea.append(img);
    
}

$("#reset").on("click",function(){
    let imgs=document.querySelectorAll("img");
    for (let i of imgs){
        i.remove();
    }
})
const containerE1 = document.querySelector(".container");

for(let index=0;index<30;index++){
    const colorcontainerE1 =document.createElement("div");
    colorcontainerE1.classList.add("color-container");
    containerE1.appendChild(colorcontainerE1);
}

const colorcontainerE1s =document.querySelectorAll(".color-container");

genarateColors();

function genarateColors(){
    colorcontainerE1s.forEach((colorcontainerE1)=>{
        const newColorCode =randomColor();
        colorcontainerE1.style.backgroundColor = "#" + newColorCode;
        colorcontainerE1.innerText = "#" + newColorCode;
    })
}

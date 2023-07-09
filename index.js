const input = document.getElementById("numberofword")
const container = document.querySelector(".container")

const generateWords =(n) => {
    let text ="";
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i <n ;++i)
    {
     const random = (Math.random()*25).toFixed(0); // randomly letter chunne ke liye
     text += letters[random];
    }

return text;

}





 const GeneratePara = () =>
 {
    const numofWords = Number(input.value);

    const para = document.createElement("p");

    let data ="";

    for(let i = 0 ;i<numofWords ;++i)
    {
        const randomnumber = (Math.random()*15).toFixed (0); // randomly words chunne ke liye
        data += generateWords(randomnumber); 
        data +=" ";
    }
    
    para.innerText  = data;


    para.setAttribute("class","paras");

    container.append(para);
 }



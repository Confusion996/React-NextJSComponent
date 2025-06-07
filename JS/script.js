//variable
let name = "gwapo";

//arrays
const array = ["hatdog","itlog","rise"];
//DOM
document.getElementById("pamahaw").innerHTML= array;

//object
let shrimpfriedrice = {
    carbohydrates: "rice",
    protien: "shrimp",
    status: function(){
        return "you made shrimp fried rice";
    }
};

//functions
function cookRice(){
    document.getElementById("cook").innerHTML= shrimpfriedrice.status();

    const shrimp = getElementById("shrimp");

   const img = document.createElement("img");
   img.src= "shrimpfriedrice.png";
   img.id="shrmppic";
   img.alt="its a literal shrimp frying rice";

   shrimp.appendChild(img);
}

//event handling
document.getElementById("fry").onclick = cookRice;



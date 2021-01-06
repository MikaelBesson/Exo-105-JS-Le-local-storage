
let result = document.getElementById("result");

const storage = window.localStorage;
storage.setItem("police","18");
storage.setItem("type" , "Material");
storage.setItem("theme" , "Black");

function affichage (){

    for(let i=0; i < window.localStorage.length; i++){

        result.innerHTML += window.localStorage+" : "+window.localStorage+"<br>";

        console.log(window.localStorage);
    }

}
affichage();




/*
 result.innerHTML = storage.getItem("police")+"<br>";
    result.innerHTML += storage.getItem("type")+"<br>";
    result.innerHTML += storage.getItem("theme");
    console.log(storage.getItem("police")+storage.getItem("type")+storage.getItem("theme"))
 */

let result = document.getElementById("result");

const storage = window.localStorage;
storage.setItem("police","18");
storage.setItem("type" , "Material");
storage.setItem("theme" , "Black");

function affichage (){

    for(let i=0; i < localStorage.length; i++){
        result.innerHTML += localStorage+" : "+localStorage+"<br>";

        console.log(localStorage);
    }

}
affichage();


/*
 result.innerHTML = storage.getItem("police")+"<br>";
    result.innerHTML += storage.getItem("type")+"<br>";
    result.innerHTML += storage.getItem("theme");
    console.log(storage.getItem("police")+storage.getItem("type")+storage.getItem("theme"))
 */
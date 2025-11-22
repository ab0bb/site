function rez(){
    let input = document.getElementById("nik").value ;
    inp= "Nah ai apasat?";
    let txt = document.getElementsByTagName("h1")[0];
    txt.remove();

}

document.getElementById("butt").addEventListener("click", rez);
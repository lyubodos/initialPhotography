function solve(){
    const logo  = document.getElementsByClassName("logo")[0];


    logo.addEventListener("click", flashNav);
    
    
    function flashNav(e){
        e.preventDefault();

        const navSel = document.getElementById("nav");
    
        console.log("works!");
        navSel.style.backgroundColor = "white";
    }
}

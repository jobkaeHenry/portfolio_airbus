let hideShow = () => {
    let callAll = document.getElementById("all");
    let status = callAll.style.display
    
    if (status == "flex") {
        callAll.style.display = "none";
    } else {
        callAll.style.display = "flex";
    }
}
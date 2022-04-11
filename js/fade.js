function fadeIn() {
    let currY = document.documentElement.scrollTop;
    let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let fadingItem = document.getElementsByClassName("fade");
    console.log(totalY);


    if (currY >= 100) {
        $("." + fadingItem).fadeIn();
    }

}
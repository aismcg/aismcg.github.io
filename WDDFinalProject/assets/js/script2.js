
function changeBackgroundColor(color) {
    document.body.style.background = color;
 }

 function blacktextClicked() {
   changeBackgroundColor("#000000")
}

 document.getElementById("black-text-container").onclick = blacktextClicked

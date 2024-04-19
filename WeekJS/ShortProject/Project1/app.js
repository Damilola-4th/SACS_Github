const closedFace = document.querySelector(".closed")
const openMonkeyface = () => {
    console.log(closedFace.innerHTML)
    if (closedFace.innerHTML ===  '🙉') {
        closedFace.innerHTML = '🙈'
    }else{
        closedFace.innerHTML = '🙉'
    }
}
closedFace.addEventListener("click", openMonkeyface)
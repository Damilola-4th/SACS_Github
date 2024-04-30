countButton = document.querySelector('.click-me-button')
console.log(countButton)
current_num = 0
const addNumber = () =>{
    console.log('yes')
    current_num += 1
    countButton.innerHTML = `Current Count: ${current_num}`
    
}

countButton.addEventListener("click", addNumber )
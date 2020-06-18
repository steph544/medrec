// const selectMainBody = document.querySelector('.home')
const selectLogin = document.querySelector('.inactive')

selectLogin.addEventListener('click', function(){
    event.preventDefault()
    // animate background growth?
    // const bgImage = document.querySelector('.background_image')
    // animate title content fade out?
    

    const homeTitle = document.querySelector('.home_title').remove()
    const homeText = document.querySelector('.home_text').remove()
    const selectLoginCard = document.querySelector('.access')
    // animate fade-in from left for log-in card?
    selectLoginCard.style.display = 'flex'
});

const loginSubmit=document.querySelector(".login-card form")
loginSubmit.addEventListener("submit", (e)=>{
    e.preventDefault();
    window.location.replace("index.html")
})


//     const createDiv = document.createElement('div')
//     createDiv.setAttribute("class", "login-card")
//     // createDiv.style.lineHeight = "100 vh";
//     // createDiv.style.zIndex = 1
//     // createDiv.style.backgroundColor = "white";
//     const createForm = document.createElement('form')
//     const createInput = document.createElement('input')

//     createInput.setAttribute("placeholder", "username")
//     createInput.setAttribute("type", "text")
//     createForm.append(createInput)
//     createDiv.append(createForm)
//     selectMainBody.append(createDiv)
const url = 'localhost:3000/patients'

fetch(url)
.then(res => res.json())
.then(patients => {
    console.log
})


document.querySelector('.col text-center')
document.createElement('div')

const selectButton = document.querySelector(`.patients-form`)
selectButton.addEventListener(`submit`, () =>{
    event.preventDefault();
    const selectH2 = document.querySelector(`.display-patient-name`)
    selectH2.innerHTML = "Patient Added"
    selectButton.reset()
})
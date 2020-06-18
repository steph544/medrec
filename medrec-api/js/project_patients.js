const url = 'http://localhost:3000/patients'

fetch(url)
.then(res => res.json())
.then(patientsArray => {
    // displayPatientstwo(patientsArray)
    console.log(patientsArray[0].first_name)
})

// function displayPatientstwo(data){
//     const selectParentDiv = document.querySelector('.empty-patient-display')

//     for(const element of data){
//     const createPatientHeader = document.createElement('p')
//     createPatientHeader.innerHTML = `${element.last_name}, ${element.first_name}`

//     selectParentDiv.append(createPatientHeader)
//     }
// }

const selectButton = document.querySelector('.patients-form')

selectButton.addEventListener('submit', () =>{
    event.preventDefault()
    const selectH2 = document.querySelector('.display-patient-name')
    selectH2.innerHTML = "Patient Added"

    selectButton.reset()
})

// function displayPatients(data){
// // create containing element and set its class.
//     const createDiv = document.createElement('div')
//     createDiv.setAttribute('class', 'current-patients')
// // select the parent that the previous element will be appended to.
//     const selectParent = document.querySelector('.col text-center')
//     selectParent.append(createDiv)
// // create the element that will be appended to the newly create container
//     const createUl = document.createElement('ul')
//     createDiv.append(createUl)
// // iterate through the passed in data via a for of loop.
//     for(const element of data){
//         const createLi = document.createElement('li')
//         createLi.textContent = `${element.last_name}, ${element.first_name}`
//         createUl.append(createLi)
//         createLi.addEventListener('click',function(){
//             patientDisplay(element)

//         })
//     }
// }

function patientDisplay(element){
    const selectHeading = document.querySelector('.display-patient-name')
    selectHeading.textcontent = `${element.first_name} ${element.last_name}`
}





// //******************************/

// // define the object that will recieve the event listener
// const selectPatientsNav = document.querySelector('.patients-nav')

// selectPatientsNav.addEventListener('click', function(){
// // define const for grabbing the HTML that will replace the current child.
//     const grabPatientHTML = document.querySelector('.patient-form-container')
//     const cloneHTML = grabPatientHTML.cloneNode(true)
// // find the current child that will be removed. **note that this doesnt change between blocks
//     selectCurrentElement = document.querySelector('.home_container div')
//     selectCurrentElement.remove()

// // find the parent that will recieve the new addition and append it.
//     const selectParent = document.querySelector('.home_container')
//     selectParent.append(cloneHTML)

// })

// // define the object that will recieve the event listener
// const selectRequestNav = document.querySelector('.requests-nav')

// selectRequestNav.addEventListener('click', function(){
// // define the const for grabbing the HTML that will replace the current child
//     const grabRequestHTML = document.querySelector() //need to add in the HTML
//     const cloneHTML = grabRequestHTML.cloneNode(true)
// // find the current child that will be removed. **note that this doesnt change between blocks
//     selectCurrentElement = document.querySelector('.home_container div')
//     selectCurrentElement.remove()

// // find the parent that will recieve the new addition and append it.
//     const selectParent  = document.querySelector('.home_container')
//     selectParent.append(cloneHTML)
// })
// const selectRecordsNav = document.querySelector('.records-nav')

// selectRecordsNav.addEventListener('click', function(){
// // define the const for grabbing the HTML that will replace the current child
//     const grabRecordHTML = document.querySelector() //need to add in the HTML
//     const cloneHTML = grabRecordHTML.cloneNode(true)
// // find the current child that will be removed. **note that this doesnt change between blocks
//     selectCurrentElement = document.querySelector('.home_container div')
//     selectCurrentElement.remove()

// // find the parent that will recieve the new addition and append it.
//     const selectParent  = document.querySelector('.home_container')
//     selectParent.append(cloneHTML)
// })
// const selectHomeNav = document.querySelector('.home-nav')

// selectHomeNav.addEventListener('click', function(){
// // define the const for grabbing the HTML that will be cloned?
//     const grabHomeHTML = document.querySelector('.home-replace-html') //need to add in the HTML
//     const cloneHTML = grabHomeHTML.cloneNode(true)
// // find the current child that will be removed. **note that this doesnt change between blocks
//     selectCurrentElement = document.querySelector('.home_container div')
//     selectCurrentElement.remove()

// // find the parent that will recieve the new addition and append it.
//     const selectParent  = document.querySelector('.home_container')
//     selectParent.append(cloneHTML)
// })

// //*********************************/





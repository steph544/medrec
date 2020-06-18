/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. InitDeptSlider
5. Init Accordions


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var menu = $('.menu');
	var menuActive = false;

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initDeptSlider();
	initAccordions();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger').length && $('.menu').length)
		{
			var hamb = $('.hamburger');
			var close = $('.menu_close_container');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

			close.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

	
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	4. Init Dept Slider

	*/

	function initDeptSlider()
	{
		if($('.dept_slider').length)
		{
			var deptSlider = $('.dept_slider');
			deptSlider.owlCarousel(
			{
				items:4,
				autoplay:true,
				loop:true,
				nav:false,
				dots:false,
				margin:30,
				smartSpeed:1200,
				responsive:
				{
					0:{items:1},
					768:{items:2},
					992:{items:3},
					1200:{items:4}
				}
			});

			if($('.dept_slider_nav').length)
			{
				var next = $('.dept_slider_nav');
				next.on('click', function()
				{
					deptSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	5. Init Accordions

	*/

	function initAccordions()
	{
		if($('.accordion').length)
		{
			var accs = $('.accordion');

			accs.each(function()
			{
				var acc = $(this);

				if(acc.hasClass('active'))
				{
					var panel = $(acc.next());
					var panelH = panel.prop('scrollHeight') + "px";
					
					if(panel.css('max-height') == "0px")
					{
						panel.css('max-height', panel.prop('scrollHeight') + "px");
					}
					else
					{
						panel.css('max-height', "0px");
					} 
				}

				acc.on('click', function()
				{
					if(acc.hasClass('active'))
					{
						acc.removeClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
					else
					{
						acc.addClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
				});
			});
		}
	}

});
const url="http://127.0.0.1:3000"


    fetch(`${url}/records`)
	.then(resp=>resp.json())
	.then(records => {
		for (const record of records){
			showRecord(record)
			}
		})


const modal2 = document.getElementById("myModal2");
const updateBtn2 = document.getElementById("myBtn2");
const span2 = document.getElementsByClassName("close2")[0];
updateBtn2.style.padding = "10px 10px 10px 10px";
updateBtn2.style.width = "300px"; 
updateBtn2.style.backgroundColor = "MediumAquaMarine";
updateBtn2.textContent= "Update Record"
// When the user clicks on the button, open the modal
updateBtn2.addEventListener("click",()=>{
	modal2.style.display = "block";
  })
  
  // When the user clicks on <span> (x), close the modal
  span2.onclick = function() {
	modal2.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
	if (event.target == modal2) {
	  modal2.style.display = "none";
	}
  }

// fetch(`${url}/records`)
// .then(resp=>resp.json())
// .then(records => {
// 	modalContent.textContent= "Record has been updated."

// })


function showRecord(record){
const accordian= document.querySelector(".accordions")

const div= document.createElement("div")
div.classList.add("accordion_container")
div.dataset.divId=record.id 

const divFlex=document.createElement("div")
divFlex.setAttribute("id", "accordian_panel");
divFlex.classList.add("accordion")
divFlex.classList.add("d-flex")
divFlex.classList.add("flex-row")
divFlex.classList.add("align-items-center")

const emptyDiv=document.createElement("div")
emptyDiv.textContent=`Record Number #${record.id}`

divFlex.append(emptyDiv)

const accordianPanel=document.createElement("div")
accordianPanel.classList.add("accordion_panel")
accordianPanel.style.maxHeight="0px"

const secondEmptyDiv= document.createElement("div")
accordianPanel.append(secondEmptyDiv)


const p=document.createElement("p")
p.innerHTML=`Patient ID:${record.patient_id}</br> Clinic ID: ${record.clinic_id}</br>Description: ${record.description}`
const btn=document.createElement("button")
const br=document.createElement("br")
btn.style.padding = "0px 0px 0px 0px";
btn.style.width = "300px"; 
btn.style.backgroundColor = "MediumAquaMarine";
btn.textContent= "Delete Record"




p.append(br, btn)

btn.addEventListener("click", (e)=>{
	e.preventDefault();
	const options = {
		method: 'DELETE', 
		body: JSON.stringify({
			id: record.id, 
		})
	};
	fetch(`${url}/records/${record.id}`, options)
	.then(res => res.json())
	.then(record => {
		div.remove()
	})
})

secondEmptyDiv.append(p)

accordianPanel.append(secondEmptyDiv)

div.append(divFlex, accordianPanel)
accordian.append(div)

div.addEventListener('click', function() {
    if(accordianPanel.style.maxHeight === '0px') {
        divFlex.classList.add("active")
        accordianPanel.style.maxHeight="180px"
    }      
    else {
      divFlex.classList.remove("active");
      accordianPanel.style.maxHeight="0px"
    }      
  });
}

const modalBtn=document.getElementById("myBtn")
modalBtn.style.padding = "10px 10px 10px 10px";
modalBtn.style.width = "300px"; 
modalBtn.style.backgroundColor = "MediumAquaMarine";
modalBtn.textContent="New Record Request"

const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("myModal");
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

modalBtn.addEventListener("click", (e)=>{
    modal.style.display = "block"; 
})

fetch(`${url}/clinics`)
.then(resp=>resp.json())
.then(clinics => {
for (const clinic of clinics){
	clinicSelection(clinic)
}
})

function clinicSelection(clinic){
	const selectForm=document.getElementById("info_form_requesting")
	const option=document.createElement("option")
	option.textContent=clinic.name; 
	selectForm.append(option)
	option.dataset.clinicId=clinic.id 
}

fetch (`${url}/patients`)
.then(resp=>resp.json())
.then(patients => {
for (const patient of patients){
	showPatient(patient)
}
})

function showPatient(patient){
	const selectPatientForm=document.getElementById("info_form_patient")
	const option=document.createElement("option")
	option.textContent=`${patient.first_name} ${patient.last_name}`; 
	selectPatientForm.append(option)
    option.dataset.optionId=patient.id 
}

const recordRequestBtn=document.querySelector(".requestBtn")
recordRequestBtn.style.padding = "10px 10px 10px 10px";
recordRequestBtn.style.width = "300px"; 
recordRequestBtn.style.backgroundColor = "MediumAquaMarine";
recordRequestBtn.style.border="0px"
recordRequestBtn.textContent="New Record Request"

const formTextArea=document.querySelector(".record_form")
formTextArea.style.width="350px"

const requestForm=document.querySelector(".info_form")
requestForm.addEventListener("submit", (e)=>{
	e.preventDefault(); 
    createNewRecord()
    
})

function createNewRecord(){
    const formTextArea=document.querySelector(".record_form").value 
    const clinic=document.getElementById("info_form_requesting") 
	var myclinic = clinic.options[clinic.selectedIndex].dataset.clinicId
	
	const patient=document.getElementById("info_form_patient")
    var patient1=patient.options[patient.selectedIndex].dataset.optionId
    
    const requestForm=document.querySelector(".info_form")
    const p=document.createElement("p")
   
    

    const options = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
            patient_id: patient1,
            clinic_id: myclinic, 
            description: formTextArea
        })
    }
    
    fetch(`${url}/records`, options)
    .then(resp=>resp.json())
    .then(record => {
       showRecord(record)
       requestForm.reset()
       p.textContent="Your Request has been Sent."
       requestForm.append(p)
    })
}


function deleteBtn(record){
	const btn=document.createElement("button")
	// const modalContent=document.querySelector(".modal-p")
	// const br=document.createElement("br")

	btn.style.padding = "10px 10px 10px 10px";
	btn.style.width = "300px"; 
	btn.style.backgroundColor = "MediumAquaMarine";
	btn.textContent= "Delete Request"
	modalContent.append(br, btn)

	btn.addEventListener("click", (e)=>{
		e.preventDefault();
		const options = {
			method: 'DELETE', 
			body: JSON.stringify({
				id: record.id, 
			})
		};
		fetch(`${url}/records/${record.id}`, options)
		.then(res => res.json())
		.then(request => {
			console.log("deleted")
		})
	})
}
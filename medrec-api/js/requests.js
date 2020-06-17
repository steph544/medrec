/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu


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
	var ctrl = new ScrollMagic.Controller();

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

});

const url="http://127.0.0.1:3000"

fetch(`${url}/clinics`)
.then(resp=>resp.json())
.then(clinics => {
for (const clinic of clinics){
	clinicSelection(clinic)
	otherClinics(clinic)
}
})

function clinicSelection(clinic){
	const selectForm=document.getElementById("info_form_dep")
	const option=document.createElement("option")
	option.textContent=clinic.name; 
	selectForm.append(option)
	option.dataset.clinicId=clinic.id 
}



function otherClinics(clinic){
	const clinicValue=document.getElementById("info_form_dep").value 
		if (clinic.name !== clinicValue)
		{requestingClinic(clinic)}
}


function requestingClinic(clinic){
	const requestingSelect=document.getElementById("info_form_requesting")
	const option=document.createElement("option")
	option.textContent=clinic.name; 
	requestingSelect.append(option)
	option.dataset.otherClinicId=clinic.id 
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

const requestForm=document.querySelector(".info_form")

requestForm.addEventListener("submit", (e)=>{
	const firstName=document.querySelector(".patient_first_name").value 
	const lastName=document.querySelector(".patient_last_name").value 
	const social=document.querySelector(".social").value 
	const birthday=document.querySelector(".birthday").value 
	e.preventDefault(); 
	
	const existing=document.getElementById("info_form_patient").value

	if (existing === "Choose One"){
		createNewPatient()
	} else if (existing !== "Choose One") {
		const patientInput=document.getElementById("info_form_patient") 
		var patientChosen = patientInput.options[patientInput.selectedIndex]
		var uid = patientChosen.getAttribute('optionId');
		const patientId=patientChosen.dataset.optionId
		existingNewRequest(patientId)
	}

	submissionNotice()
})

function createNewPatient(){
	const firstName=document.querySelector(".patient_first_name").value 
	const lastName=document.querySelector(".patient_last_name").value 
	const social=document.querySelector(".social").value 
	const birthday=document.querySelector(".birthday").value 

	const options={
		method: 'POST', 
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify({
			first_name: firstName, 
			last_name: lastName, 
			social: social, 
			birthday: birthday, 
		})
	}

	fetch(`${url}/patients`, options)
	.then(resp=>resp.json())
	.then(patient => {
		console.log("patient",patient)
	createNewRequest(patient)
	})
}

function createNewRequest(patient){
	const user_clinic=document.getElementById("info_form_dep") 
	var myclinic = user_clinic.options[user_clinic.selectedIndex].dataset.clinicId

	
	const other_clinic=document.getElementById("info_form_requesting")
	var otherClinic=other_clinic.options[other_clinic.selectedIndex].dataset.otherClinicId

	
	const options={
		method: 'POST', 
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify({
			user_clinic_id: myclinic, 
			other_clinic_id: otherClinic,
			status: "Open", 
			patient_id: patient.id, 
		})
	}
	
	fetch(`${url}/requests`, options)
	.then(resp=>resp.json())
	.then(request => {
	console.log("request")
	})
}

function submissionNotice(){
	const div= document.querySelector(".col-log-5")
	const p=document.createElement("p")
	p.textContent="Your Request has been Submitted"

	div.append(p)

}

function existingNewRequest(patientId) {
	const user_clinic=document.getElementById("info_form_dep") 
	var myclinic = user_clinic.options[user_clinic.selectedIndex]
	var uid = myclinic.getAttribute('clinicId');
	
	const other_clinic=document.getElementById("info_form_requesting")
	var otherClinic=other_clinic.options[other_clinic.selectedIndex]
	var uid = otherClinic.getAttribute('otherClinicId');
	
	const options={
		method: 'POST', 
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify({
			user_clinic_id: myclinic.dataset.ClinicId, 
			other_clinic_id: otherClinic.dataset.otherClinicId, 
			status: "false", 
			patient_id: patientId, 
		})
	}
	const requestForm= document.querySelector(".info-form")
	
	fetch(`${url}/requests`, options)
	.then(resp=>resp.json())
	.then(request => {
		requestForm.reset();
	})
}

const requestButton=document.querySelector(".request_button")
requestButton.style.padding = "10px 10px 10px 10px";
requestButton.style.width = "350px"; 
requestButton.style.backgroundColor = "MediumAquaMarine";

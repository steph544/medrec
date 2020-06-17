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

fetch(`${url}/requests`)
	.then(resp=>resp.json())
	.then(requests => {
		for (const request of requests){
			if (request.user_clinic_id === 22 && request.status === "Open"){
				showRequest(request)
			} else if (request.user_clinic_id === 22 && request.status === "Completed"){
				completedRequest(request)
			} else if (request.other_clinic_id === 22 && request.status === "Open"){
				requestReceived(request)
			}
			}
		})
	

function showRequest(request){
	const requestSent=document.querySelector(".request_sent_box")
	const modal = document.getElementById("myModal");
	const btn = document.createElement("button");
	btn.textContent=`Request Number #${request.id}` 
	btn.style.padding = "10px 10px 10px 10px";
	btn.style.width = "300px"; 
	btn.dataset.requestId=request.id 
	const p =document.createElement("p")
	requestSent.append(btn, p)

	const span = document.getElementsByClassName("close")[0];
	span.onclick = function() {
  	modal.style.display = "none";
	}

	window.onclick = function(event) {
  		if (event.target == modal) {
    	modal.style.display = "none";
  		}
		}

	btn.addEventListener("click", (e)=>{
		const requestId=e.target.dataset.requestId 
		modal.style.display = "block";
		modalContentRequestsSent(request)
	})
}

function completedRequest(request){
	const requestComplete=document.querySelector(".request_completed_box")
	const modal = document.getElementById("myModal");
	const btn = document.createElement("button");
	const p=document.createElement("p")

	btn.textContent=`Request Number #${request.id}` 
	btn.style.padding = "10px 10px 10px 10px";
	btn.style.width = "300px"; 
	btn.dataset.requestId=request.id 

	requestComplete.append(btn, p)

	const span = document.getElementsByClassName("close")[0];
	span.onclick = function() {
  	modal.style.display = "none";
	}

	window.onclick = function(event) {
  		if (event.target == modal) {
    	modal.style.display = "none";
  		}
		}

	btn.addEventListener("click", (e)=>{
		const requestId=e.target.dataset.requestId 
		modal.style.display = "block";
		modalContentRequestsComplete(request)
	})
}

function requestReceived(request){
	const requestReceived=document.querySelector(".request_received_box")
	const modal = document.getElementById("myModal");
	const btn = document.createElement("button");
	const p=document.createElement("p")

	btn.style.padding = "10px 10px 10px 10px";
	btn.style.width = "300px"; 
	

	btn.textContent=`Request Number #${request.id}` 
	btn.dataset.requestId=request.id 
	requestReceived.append(btn, p)

	const span = document.getElementsByClassName("close")[0];
	span.onclick = function() {
  	modal.style.display = "none";
	}

	window.onclick = function(event) {
  		if (event.target == modal) {
    	modal.style.display = "none";
  		}
		}

	btn.addEventListener("click", (e)=>{
		const requestId=e.target.dataset.requestId 
		modal.style.display = "block";
		modalContentRequestsReceived(request)
	})
}

function modalContentRequestsSent(request){
	const modalContent=document.querySelector(".modal-p")
	modalContent.innerHTML=`PATIENT ID: ${request.patient_id} <br/> OTHER CLINIC ID: ${request.other_clinic_id}<br/> STATUS: ${request.status}`
	modalContent.style.color="black" 
}

function modalContentRequestsComplete(request){

}

function modalContentRequestsReceived(request){
	const modalContent=document.querySelector(".modal-p")
	const btn=document.createElement("button")
	btn.style.padding = "10px 10px 10px 10px";
	btn.style.width = "300px"; 
	btn.style.backgroundColor = "MediumAquaMarine";
	btn.textContent="Yes"

	modalContent.innerHTML=`PATIENT ID: ${request.patient_id} <br/> OTHER CLINIC ID: ${request.other_clinic_id}<br/> STATUS: ${request.status}
	<br/> Would you like to authorize this Clinic? <br/>`
	modalContent.style.color="black" 
	modalContent.append(btn)

	btn.addEventListener("click", (e)=>{
		e.preventDefault();

		const options={
			method: 'PATCH', 
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({
				id: request.id, 
				status: "Completed" 
			})
		}
		
		fetch(`${url}/requests/${request.id}`, options)
		.then(resp=>resp.json())
		.then(request => {
		console.log("updated")
		})

	})
	
	


}
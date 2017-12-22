// JavaScript Document
var elCellerUrl = "http://www.mocky.io/v2/5a3ccf90310000b810b592de";

function openAndLoad (pUrl)
{
	var jsonObj = {};
	var request = new XMLHttpRequest();
	request.open ("GET", pUrl);
	request.onload = function ()
	{
		if (this.status === 200)
		{
			console.log("Éxito!");		
		}
		else
		{
			console.log("Fracaso!");
		}
		jsonObj = JSON.parse(request.response);
		console.log (request.response);
	};
	request.send();	
}

openAndLoad(elCellerUrl);
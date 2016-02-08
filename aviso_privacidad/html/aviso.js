function checkFormPss(texto) { 
	var err =true ;
	if(texto.length < 8) { err=false; } 
	re = /(\s)/; 
	if(re.test(texto) && err) { err=false; } 
	re = /[0-9]/; 
	if(!re.test(texto) && err) { err=false; } 
	re = /[a-z]/; 
	if(!re.test(texto) && err) { err=false; } 
	re = /[A-Z]/; 
	if(!re.test(texto) && err) { err=false; } 
	return err; 
}
function mensajes(idm,lang){
	var txt ='';
	if(lang=='es'){
		switch(idm) {
			case 601: txt='Para continuar debes leer y estar de acuerdo con el aviso de privacidad.'; break;
			case 602: txt='Debes estar de acuerdo con la transferencia de tus datos personales.'; break;
			case 603: txt='El E-Mail no cumple con las especificaciones.'; break;
			case 604: txt='El valor del Nombre es inv&aacute;lido.'; break;
			case 605: txt='El valor del Apellido es inv&aacute;lido.'; break;
			case 606: txt='El valor del Puesto es inv&aacute;lido.'; break;
			case 607: txt='El valor de la Compa&ntilde;ia es inv&aacute;lido.'; break;
			case 608: txt='El valor del Pais es inv&aacute;lido.'; break;
			case 609: txt='El valor del Password no cumple con las especificaciones.'; break;
			case 610: txt='La confirmaci&oacute;n del Password es inv&aacute;lida.'; break;
			case 611: txt='El Password y la Confirmaci&oacute;n no son iguales.'; break;
			default: txt = 'Error desconocido'; 
		}
	} else {
		switch(idm)
		{
			case 601: txt = 'To continue you must reed and agree our Privacy terms.'; break;
			case 602: txt = 'To continue you must agree to send your personal data.'; break;
			case 603: txt='The value of the E-mail is invalid'; break;
			case 604: txt='The value of the Name is invalid'; break;
			case 605: txt='The value of the Lastname is invalid'; break;
			case 606: txt='The value of the Title is invalid'; break;
			case 607: txt='The value of the Company is invalid'; break;
			case 608: txt='The value of the Country is invalid'; break;
			case 609: txt='The value of the Password is invalid'; break;
			case 610: txt='The value of the Confirm Password is invalid'; break;
			case 611: txt='The value of the Password field and confirmation do not match.'; break;
			default: txt = 'Unknown error';
		}
	}
	return txt;
}
function mensajepop(msg,lang){
	//var msg=mensajes(idm,lang);
	$('div#bgpopup section p').remove();
	$('div#bgpopup section').append(msg);
	$('div#bgpopup').fadeToggle();
}
$(function(){
	$('div#bgpopup').click(function(){$(this).fadeToggle()});
	$('div section form#pass article#right label.clswnd').click(function(){
		window.open('http://www.televisainternacional.tv','_parent');
	});
	$('div section form#pass article#left section#optn div.checklist div#readed.chck').click(function(){
		$(this).addClass('clck');
		$('div section form#pass input#readed').val(1);
	});
	$('div section form#pass article#left section#optn div.checklist div#dataag.chck').click(function(){
		$(this).addClass('clck');
		$('div section form#pass input#dataag').val(1);
	});
	$('section form#pass article#left button#avisop').click(function(){
		window.open('http://www.televisainternacional.tv/privacidad');
	});
	$('div section form#pass article#right button#enviar').click(function(){
		var envia = true;
		var code=[];
		var forma = $('section form#pass');
		var readed = forma.find('input#readed').val();
		var dataag = forma.find('input#dataag').val();
		var email = forma.find('input#email').val();
		var nombre = forma.find('input#nme').val();
		var apellido = forma.find('input#lastname').val();
		var puesto = forma.find('input#puesto').val();
		var compania = forma.find('input#empresa').val();
		var pais = forma.find('select#pais').val();
		var pass = forma.find('input#passw').val();
		var confpass = forma.find('input#repassw').val();
		forma.find('input.error').removeClass('error');

		if(readed==0){
			code.push(601);
			envia=false;
		}
		if(dataag==0){
			code.push(602);
			envia=false;
		}
		var re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
		if(email.length<8 || !re.test(email)){
			code.push(603);
			envia=false;
			forma.find('input#email').addClass('error');
		}
		if(nombre.length<=0){
			code.push(604);
			envia=false;
			forma.find('input#nme').addClass('error');
		}
		if(apellido.length<=0){
			code.push(605);
			envia=false;
			forma.find('input#lastname').addClass('error');
		}
		if(puesto.length<=0){
			code.push(606);
			envia=false;
			forma.find('input#puesto').addClass('error');
		}
		if(compania.length<=0){
			code.push(607);
			envia=false;
			forma.find('input#empresa').addClass('error');
		}
		if(pais=='...'){
			code.push(608);
			envia=false;
			forma.find('input#pais').addClass('error');
		}

		var vpass = checkFormPss(pass);
		var vcpass = checkFormPss(confpass);
		if(!vpass){
			code.push(609);
			envia=false;
			forma.find('input#passw').addClass('error');
		} else {
			if(!vpass){
				code.push(610);
				envia=false;
				forma.find('input#repassw').addClass('error');
			} else {
				if(pass!=confpass){
					code.push(611);
					envia=false;
					forma.find('input#passw').addClass('error');
					forma.find('input#repassw').addClass('error');
				}
			}
		}


		if(!envia){
			var msgn ="";
			for (var i = 0; i < code.length; i++) {
				msgn = msgn +'<p>'+ mensajes(code[i],'es') + "</p>";
			}
			mensajepop(msgn,'es');
			return false;
		} else {
			//forma.submit();
			alert('enviando');
		}
	});
});
window.onload=function(){	
	var urlObj =  document.getElementById("ckplayerBoxUrl");
	var imgObj =  document.getElementById("videoImg");
	var playerBox = document.getElementById("ckplayerOutBox");
	if(navigator.appName.indexOf("Explorer") > -1){      
		var fileUrl = urlObj.innerText;
	}else{
		var fileUrl = urlObj.textContent;
	}
	var playerW = imgObj.width;
	var playerH = imgObj.height;
	var autoStart = urlObj.getAttribute("autoStart");
	
	var callHtml = '<div id="ckplayerBox"></div>';
	callHtml += "<script type='text/javascript'>";
	callHtml += "var _frist=true;";
	callHtml += "var endAdvTime=3;";
	callHtml += "function loadedHandler(){";
	callHtml += "if(CKobject.getObjectById('ckplayer_a1').getType()){";
	callHtml += "if(_frist){";
	callHtml += "frontAdv();";
	callHtml += "}";
	callHtml += "else{";
	callHtml += "CKobject.getObjectById('ckplayer_a1').addListener('play',playHandler);";
	callHtml += "CKobject.getObjectById('ckplayer_a1').addListener('pause',pauseHandler);";
	callHtml += "CKobject.getObjectById('ckplayer_a1').addListener('ended',endedHandler);";
	callHtml += "}";
	callHtml += "}";
	callHtml += "else{";
	callHtml += "CKobject.getObjectById('ckplayer_a1').addListener('ended','endedHandler');";
	callHtml += "}";
	callHtml += "}";
	callHtml += "function playHandler(){";
	callHtml += "CKobject._K_('yytf').style.display='none';";
	callHtml += "}";
	callHtml += "function pauseHandler(){";
	callHtml += "CKobject._K_('yytf').style.display='block';";
	callHtml += "CKobject._K_('yytf').className='yytf_2';";
	callHtml += "CKobject._K_('picAdv').style.display='block';";
	callHtml += "CKobject._K_('picAdv').innerHTML=CKobject._K_('pauseAdv').innerHTML;";
	callHtml += "}";

	callHtml += "var _p=1;";
	callHtml += "if(_frist){";
	callHtml += "_p=0;";
	callHtml += "}";
	callHtml += "CKobject._K_('ckplayerBox').innerHTML='';";
	callHtml += "var flashvars={";
	callHtml += "f:'"+fileUrl+"',c:0,p:_p,e:0,loaded:'loadedHandler'};";
	callHtml += "CKobject.embed('/Public/Js/ckplayer/ckplayer.swf','ckplayerBox','ckplayer_a1',"+playerW+","+playerH+",true,flashvars,['"+fileUrl+"->video/mp4']);";
	
	$(playerBox).html(callHtml);	
}
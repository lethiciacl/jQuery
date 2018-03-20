
/*Modifica a cor da fonte */
/*  do h1 de id=cor pra   */
/*      Vermelho          */
function mudarCor(){              
	document.getElementById("cor").style.color="#FF0000";
}


/*********************************/
/*Forma ERRADA usando Java Script*/
/*********************************/
btnVermelho.onclick=mudarCor

/**********************************/
/*Forma CORRETA usando Java Script*/
/**********************************/
//window.onload=function(){btnVermelho.onclick=mudarCor}

/*************************/
/*Forma utilizando jQuery*/
/*************************/
//$(document).ready(function(){btnVermelho.onclick=mudarCor});
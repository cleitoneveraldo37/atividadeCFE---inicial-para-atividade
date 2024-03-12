//efeito de esconder formulário de cadastro

$(document).ready(function(){

$("#botao-cadasatrar").click(function(){;
     
      $("#form-cadasatrar").slideToggle("slow"); 
      $("#section-login").slideToggle("slow"); 
      $("#botao-cadastrar").hide();


    });


})





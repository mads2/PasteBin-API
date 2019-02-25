function posta_mensagem(){

let api_dev_key           = '1b5c850767eafcafe8c72ddbf0ff9e3b';
let api_paste_code        = document.getElementById("mensagem").value;
let api_paste_private     = '0';
let api_paste_name        = 'Nome';
let api_paste_expire_date = '10M';
let api_paste_format      = 'js';
let api_user_key          = '';
let api_option =  'paste&api_user_key='+api_user_key+'&api_paste_private='+api_paste_private+'&api_paste_name='+api_paste_name+'&api_paste_expire_date='+api_paste_expire_date+'&api_paste_format='+api_paste_format+'&api_dev_key='+api_dev_key+'&api_paste_code='+api_paste_code+'';

    var teste = new XMLHttpRequest();

    teste.open("POST", "https://pastebin.com/api/api_post.php", true);

    teste.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    teste.setRequestHeader("Access-Control-Allow-Origin", "*");

    teste.send("api_dev_key="+api_dev_key+"&api_option=paste&api_paste_private=0&api_paste_name=api_paste_name&api_paste_expire_date=10M&api_paste_code="+api_paste_code);

//    document.getElementById("resultado").innerHTML = teste.response;




    /*
    $('#resultado').html('Ainda nao');
    $(function(){
      $.ajax({
        type: "POST",
        url: 'https://pastebin.com/api/api_post.php',
        crossDomain: true,
        data: api_option,
        dataType: 'application/x-www-form-urlencoded',
        success: function(data) {
          // A variável data contêm o JSON de resposta do seu backend.
          $('#resultado').html('Deu certo'+data);
          alert('Acerto');
        }, error: function(err) {
          alert("Erro");
          $('#resultado').html('Deu erro, porque sim');
        }
      });
    });
    */


}

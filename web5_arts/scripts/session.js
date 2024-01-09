


$(document).ready(function(){


const access_token = sessionStorage.getItem("access_token_tok");

if (access_token== null || access_token == undefined) {
  alert('You Must go to home Page To Access this Page');
window.location='index.html';
//return false;
}

//alert(access_token);

});

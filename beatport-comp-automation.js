
var url_to_share = "http://btprt.dj/196XNJc";
var message = "This is awesome! you got my vote "+$(".vote").children(".counter").children(".number").text();+"! Have a listen to my track if you have 1min, I would love to hear your expertise feedback. "+url_to_share+" find me on soundcloud if you want to get in touch. I'd love to download your track actually";

setTimeout(function () { $("#comment").val(message); }, 500); 
setTimeout(function () { $(".vote").children(".button").click(); }, 600); 
setTimeout(function () { $("#commentform").children(".btn").click(); }, 700);
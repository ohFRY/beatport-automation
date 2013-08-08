/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/*
 * TERMS OF REPRODUCTION USE
 *
 * 1. Provide a link back to the original repository (this repository), as
 *      in, https://github.com/ohFRY, that is well-visible
 *      wherever the source is being reproduced.  For example, should you
 *      display it on a website, you should provide a link above/below that
 *      which the users use, titled something such as "ORIGINAL AUTHOR".
 *
 * 2. Retain these three comments:  the GNU GPL license statement, this comment,
 *      and that below it, that details the author and purpose.
 *
 * Failure to follow these terms will result in me getting very angry at you
 * and having your software tweaked or removed if possible.  Either way, you're
 * still an idiot for not following such a basic rule, so at least I'll have
 * that going for me.
 */

/*
 * NOTE:  This is all procedural as hell because prototypes and any
 *          OOP techniques in Javascript are stupid and confusing.
 *
 * @author  ohFRY
 *
 * @version 0.1
 */

(function () {

	var myArtist = $(".entry-display").text().substring(1).split(' ')[0];
	var myName = $("#current-user-head").text();
	var myMessages, var myMessage;

	// Detects the scenario you want to apply, by reading the number in the message text field.
	var scenario = parseInt($("#message_body").val());

	switch(scenario) {
        case (1):
        	// artist following me
            myMessage = "Thanks for following me and also for your ♥ on my work.\n\r\nI'm listening to your sounds now.\n\r\nPlease tell me what you think about my tracks. Which ones you ♥ the most? You can be even more specific by commenting them on the part you like the most.\n\r\nTake care "+myArtist+". Feel free to contact me for anything. I'll be glad to help you.\n\r\n"+myName+"";                
            break;
        case (2):
            // artist following me and liking
			myMessage = "Thanks for following me and also for your ♥ on my work.\n\r\nI'm listening to your sounds now.\n\r\nPlease tell me what you think about my tracks. You can be specific by commenting on them and let me know what part you like.\n\r\nTake care "+myArtist+". Feel free to contact me for anything. I'll be glad to help you.\n\r\n"+myName+"";                
            break;
        case (3):
            // artist liking only
            myMessage = "Thanks for your ♥ on my work.\n\r\nI'm listening to your sounds now.\n\r\nPlease tell me what you think about my tracks. You can be specific by commenting on them and let me know what part you like.\n\r\nFollow Me if you want to stay tuned and not be the one that missed my next banger. I don't repost music and I upload something once per month, so I promise your SoundCloud timeline won't be polluted by me. \n\r\nThank you again "+myArtist+".\n\r\nTake care Feel free to contact me for anything. I'll be glad to help you.\n\r\n"+myName+"";
            break;
        case (4):
        	// dj following me
            myMessage = "Thanks for following me. I'm listening to your mixtape now, so good! Looking forward the next one already.\n\rMaybe you can play one of my track in your next one? Let me know if you do it, I'll share your mixtape.\n\r\nPlease tell me what you think about my tracks. Which ones you ♥ the most? You can be even more specific by commenting them on the part you like the most.\n\r\nTake care "+myArtist+". Feel free to contact me for anything. I'll be glad to help you.\n\r\n"+myName+"";                
            break;
        case (5):
            // dj following me and liking
			myMessage = "Thanks for following me and for your ♥ on my work. I'm listening to your mixtape now, really good!!! Looking forward the next one already.\n\rMaybe you can play one of my track in your next one? Let me know if you do it, I'll share your mixtape.\n\r\nPlease tell me what you think about my tracks. You can be specific by commenting on them and let me know what part you like.\n\r\nTake care "+myArtist+". Feel free to contact me for anything. I'll be glad to help you.\n\r\n"+myName+"";                
            break;
        case (6):
            // dj liking me only
            myMessage = "Thanks for your ♥ on my work. I'm listening to your mixtape now, really good!!! Looking forward the next one already.\n\rMaybe you can play one of my track in your next one? Let me know if you do it, I'll share your mixtape.\n\r\nPlease tell me what you think about my music. You can be specific by commenting on them and let me know what part you like.\n\r\nFollow Me if you want to stay tuned and not be the one that missed my next banger. I don't repost music and I upload something once per month, so I promise your SoundCloud timeline won't be polluted by me. \n\r\nThank you again "+myArtist+".\n\r\nTake care. Feel free to contact me for anything. I'll be glad to help you.\n\r\n"+myName+"";
            break;
        case (7):
        	// normal user following me
            myMessage = "Thanks for following me and also for your ♥ on my work.\n\r\nIf you really like it, please share it with your friends and repost it. I'm no famous, so I need your help to bring the tracks you like to others. My music is all in Free download and I will keep it like this as much as I can. However the only thing to keep myself motivated is to hear from people if it is good or bad.\n\r\nPlease tell me what you think about my tracks. All my tracks have a lot of variations, so you can comment the part you prefer the best, like this I will know and I will create my next sound with your feedback in mind.\n\r\nTake care "+myArtist+". Feel free to contact me for anything. I'll be glad to help you.\n\r\n"+myName+"";                
            break;
        case (8):
            // normal user following me and liking me
			myMessage = "Thanks for following me and also for your ♥ on my work.\n\r\nIf you really like it, please share it with your friends and repost it. I'm no famous, so I need your help to bring the tracks you like to others. My music is all in Free download and I will keep it like this as much as I can. However the only thing to keep myself motivated is to hear from people if it is good or bad.\n\r\nPlease tell me what you think about my tracks. All my tracks have a lot of variations, so you can comment the part you prefer the best, like this I will know and I will create my next sound with your feedback in mind.\n\r\nTake care "+myArtist+". Feel free to contact me for anything. I'll be glad to help you.\n\r\n"+myName+"";                
            break;
        case (9):
            // normal user liking me only
            myMessages = new Array("Thanks for your ♥ on my work.\n\r\nIf you really like it, please share it with your friends.\n\r\nPlease comment it to tell me what you specifically like.\n\r\nFollow me if you want to stay tuned and not be the one that missed my next track.\n\r\nThank you again "+myArtist+".\n\r\nTake care.", "Just wanted to thank you for your ♥.\n\r\nIf you really like it, please share it with your friends and repost it.\n\rI'm no famous, so I need your help to bring the tracks you like to others.\n\r\nPlease tell me what you think about my tracks. \n\rAll my tracks have a lot of variations, so you can comment the part you prefer the best.\n\r\nFollow me if you want to stay tuned and not be the one that missed my next banger. \n\rI don't repost music and I upload something once per month, so I promise your SoundCloud timeline won't be polluted by me. \n\r\nThanks again "+myArtist+".\n\r\nTake care.");
            myMessage = myMessages[Math.floor( Math.random() * myMessages.length )] + "\n\r\n"+myName;
            
    }

    var mySubjects = new Array("Hey "+myArtist+"! I just want to thank you", "Hi "+myArtist+" :)", "Hello "+myArtist+" <3", "Thanks "+myArtist+"!"),
    var mySubject = mySubjects[Math.floor( Math.random() * mySubjects.length )];
            

	setTimeout(function () { $("#message_subject").val(mySubject);}, 500); 
	setTimeout(function () { $("#message_body").val(myMessage);}, 500);

	//setTimeout(function () { $("#commentform").children(".btn").click(); }, 800);

})();
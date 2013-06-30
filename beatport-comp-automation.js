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
 *      in, https://github.com/ohFRY/soundcloud-followers, that is well-visible
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
 * @author  Fry Falavel
 *
 * @version 0.1
 */

(function () {

	/* VARIABLES TO CHANGE */
	var url_to_share = "http://btprt.dj/196XNJc";
	var name_of_track = "Fedde Le Grand";


	/* DO NOT TOUCH BELOW (unless you're a geek) */

	var number_of_votes = (parseInt($(".vote").children(".counter").children(".number").text(), 10)+1);

	var artist = $(".span6").children(".padBox").children(".txtxx.txtWhite").children("a").text();

	var greetings = new Array("Wow ", "This is awesome ", "That's dope ", "Love this ", "Great track ", "Nice track ", "Love the way to made this ", "You have good skills ", "This is a really cool track ", "This track has something original. Nice work ", "Oh waow... this is good "),
	greeting = greetings[Math.floor( Math.random() * greetings.length )];

	var invites = new Array("! Have a listen to my "+name_of_track+" track if you have 1 minute, I would love to hear your feedback. If you think I did well, please vote back ","! Listen to my "+name_of_track+" track if you have the time, I'd like to read your feedback and maybe vote back? ", "! Would you mind gimme some feedback on my "+name_of_track+" track? and maybe vote back? Check it out here: ", ". Please have a listen to my "+name_of_track+" track. Feel free to vote back: ", "! What do you think of my "+name_of_track+" track? vote back? ", "!!! I would be grateful if you give me your feedback on mine (and I would love you if you vote), check it out here: "),
	invite = invites[Math.floor( Math.random() * invites.length )];

	var votes = new Array("! you got my vote #", ". Here my vote #", ". You deserve this vote #", "! You totally get my vote number ", "! Just added my vote :-) Now you have ", ". Just voted for you, now you have ", ". VOTED #", ". HERE MY VOTE #"),
	vote = votes[Math.floor( Math.random() * votes.length )];

	var no_votes = new Array("! I will come back to vote for you when the vote will start", ". Definitely coming back in few days to make my vote for you", ". Hope you will win something with this", "! You deserve to win something with this, I'll come back to vote", "! I wish I could vote now, I'll come back to vote", ". I'll come back when the votes start to support you with my vote", ". For sure I will come back to vote for this", ". This Definitely catched my attention, I'll come back to vote for your track"),
	no_vote = no_votes[Math.floor( Math.random() * no_votes.length )];

	var ends = new Array(" Find me on soundcloud if you want to get in touch.", " Get in touch on soundcloud.", " Poke me on soundcloud.", " See you on soundcloud?", " See you.", " Good luck.", " Wish you luck.", " Have a good day.", " Bye.", " Peace.", " Hope you win something with this", " See you around"),
	end = ends[Math.floor( Math.random() * ends.length )];

	var message = greeting + artist + vote + number_of_votes + invite + "\n\r\n\r" + url_to_share + "\n\r\n\r" + end;

	setTimeout(function () { $("#comment").val(message); }, 500); 
	setTimeout(function () { $(".vote").children(".button").click(); }, 700); 
	setTimeout(function () { $("#commentform").children(".btn").click(); }, 800);

})();
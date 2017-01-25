/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * This simple sample has no external dependencies or session management, and shows the most basic
 * example of how to create a Lambda function for handling Alexa Skill requests.
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Space Geek for a space fact"
 *  Alexa: "Here's your space fact: ..."
 */

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.ask.skill.35837dd2-c6f9-4e11-b8e6-d8358b839b55";

/**
 * Array containing space facts.
 */
var FACTS = [
    "In 10 minutes, a hurricane releases more energy than all the world's nuclear weapons combined.",
    "On average, 100 people choke to death on ballpoint pens every year. This is why some caps have holes in the top.",
    "On average people fear spiders more than they do death.",
    "Ninety percent of New York City cabbies, are recently arrived immigrants.",
    "Thirty-five percent, of the people who use personal ads for dating, are already married.",
    "Only one person, in two billion, will live to be 116 or older.",
    "It's possible to lead a cow upstairs...but not downstairs.",
    "Women blink nearly twice as much as men.",
    "The Main Library, at Indiana University, sinks over an inch every year because when it was built, engineers failed to take into account the weight of all the books that would occupy the building.",
    "A crocodile cannot stick its tongue out.",
    "Table tennis balls, have been known to travel off the paddle, at speeds up to 160 km/hr.",
    "Pepsi originally contained pepsin, thus the name." ,
    "Our eyes are always the same size from birth, but our nose and ears never stop growing.",
    "The electric chair was invented by a dentist.",
    "In ancient Egypt, priests plucked EVERY hair from their bodies, including their eyebrows and eyelashes.",
    "TYPEWRITER is the longest word that can be made using the letters only on one row of the keyboard.",
    "'Go.' is the shortest complete sentence in the English language.",
    "If Barbie were life-size, her measurements would be 39-23-33. She would stand seven feet, two inches tall.",
    "Nutmeg is extremely poisonous if injected intravenously.",
    "Honey is the only natural food that is made without destroying any kind of life. What about milk you say?",
    "A snail can sleep for three years.",
    "No word in the English language rhymes with 'MONTH'.",
    "Average life span of a major league baseball: 7 pitches.",
    "Michael Jordan makes more money from NIKE annually than all of the Nike factory workers in Malaysia combined.",
    "The volume of the earth's moon is the same as the volume of the Pacific Ocean.",
    "Cephalacaudal recapitulation is the reason our extremities develop faster than the rest of us.",
    "A cow has to eat grass to produce milk and grass is living.", 
    "The most common name in the world is Mohammed.",
    "The cigarette lighter was invented before the match.",
    "Americans on average eat 18 acres of pizza every day.",
    "The 'pound' key on your keyboard (#) is called an octotroph.", 
    "The only domestic animal not mentioned in the Bible is the cat.", 
    "The 'dot' over the letter 'i' is called a tittle.",
    "Spiral staircases in medieval castles are running clockwise. This is because all knights used to be right-handed. When the intruding army would climb the stairs they would not be able to use their right hand which was holding the sword because of the difficulties of climbing the stairs. Left-handed knights would have had no troubles, except left-handed people could never become knights because it was assumed that they were descendants of the devil.",
    "Ham radio operators got the term 'ham' coined from the expression 'ham fisted operators,' a term used to describe early radio users who sent Morse code (i.e., pounded their fist).", 
    "The slogan on New Hampshire license plates is 'Live Free or Die.' These license plates are manufactured by prisoners in the state prison in Concord.", 
    "Chinese Crested dogs can get acne.", 
    "Hydrogen gas is the least dense substance in the world, at 0.08988g/cc.",
    "Each year there is one ton of cement poured for each man woman and child in the world.", 
    "The house fly hums in the middle octave key of F.",
    "The only capital letter in the Roman alphabet with exactly one end point is P.",
    "The giant red star Betelgeuse has a diameter larger than that of the Earth's orbit around the sun.",
    "The longest place name still in use is: Taumatawhakatangihangaoauauotameteat uripukakapikimaungahoronukupokaiwhenua kitanatahu -- a New Zealand hill. (See if your spell check has this word)",
    "Los Angeles's full name is: 'El Pueblo de Nuestra Senora la Reina de losAngeles de Poriuncula' and can be abbreviated to 3.63% of its size, 'LA.'",
    "Only 1 in 2,000,000,000 will live to be 116 or older.",
    "Tigers have striped skin, not just striped fur.", 
    "According to Einstein's Special Theory of Relativity, it is possible to go slower than light and faster than light, but it is impossible to go the speed of light. Also, there is a particle called tackyon, which is supposed to go faster than light. This means if you fire a tackyon beam, it travels before you fire it.", 
    "When you tie a noose, the rope is wrapped twelve times around because it's the same length as a person’s head.",
    "Hummingbirds are the only animals that can fly backwards.",
    "A cat's jaw cannot move sideways.",
    "Some lions mate over 50 times a day.",
    "Butterflies taste with their feet.",
    "The strongest muscle in the body is the tongue.",
    "Elephants are the only animal that cannot jump.",
    "A cat's urine glows under a black light.",
    "An ostrich's eye is bigger than its brain.",
    "Starfish have no brains. Siri suffers from the same issue.",
    "Polar bears are left-handed.",
    "Humans and dolphins are the only species that have sex for pleasure.",
    "Rubber bands last longer when refrigerated.",
    "Peanuts are one of the ingredients of dynamite.",
    "There are 293 ways to make change for a dollar.",
    "The average person's left hand does 56% of the typing.",
    "The shark is the only fish that can blink with both eyes.",
    "There are more chickens than people in the world.", 
    "Two-thirds of the world's eggplant is grown in New Jersey.",
    "The longest one-syllable word in the English language is 'screeched.'",
    "On a Canadian two dollar bill, the flag flying over the Parliament building is an American flag.", 
    "All of the clocks in the movie 'Pulp Fiction' are stuck on 4:20.", 
    "No word in the English language rhymes with month, orange, silver, or purple.",
    "'Dreamt' is the only English word that ends in the letters 'mt.'", 
    "All 50 states are listed across the top of the Lincoln Memorial on the back of the $5 bill.", 
    "Almonds are a member of the peach family.",
    "Winston Churchill was born in a ladies' room during a dance.",
    "Maine is the only state (in USA) whose name is just one syllable.", 
    "There are only four words in the English language which end in 'dous': tremendous, horrendous, stupendous, and hazardous.", 
    "Los Angeles' full name is 'El Pueblo de Nuestra Senora la Reina de los Angeles de Porciuncula'",
    "A cat has 32 muscles in each ear.", 
    "Tigers have striped skin, not just striped fur.", 
    "In most advertisements, the time displayed on a watch is 10:10.", 
    "Al Capone's business card said he was a used furniture dealer.",
    "The characters Bert and Ernie on Sesame Street were named after Bert the cop and Ernie the taxi driver in Frank Capra's 'It's a Wonderful Life.'", 
    "A dragonfly has a life span of 24 hours.", 
    "A goldfish has a memory span of three seconds.", 
    "A dime has 118 ridges around the edge.",
    "It's impossible to sneeze with your eyes open.",
    "The giant squid has the largest eyes in the world.", 
    "In England, the Speaker of the House is not allowed to speak.", 
    "The microwave was invented after a researcher walked by a radar tube and a chocolate bar melted in his pocket.",
    "Mr. Rogers was an ordained minister.", 
    "The average person falls asleep in seven minutes." 
];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * SpaceGeek is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var Fact = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Fact.prototype = Object.create(AlexaSkill.prototype);
Fact.prototype.constructor = Fact;

Fact.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    //console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Fact.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    //console.log("onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Fact.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    //console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Fact.prototype.intentHandlers = {
    "GetNewFactIntent": function (intent, session, response) {
        handleNewFactRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say tell me a space fact, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewFactRequest(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * FACTS.length);
    var randomFact = FACTS[factIndex];

    // Create speech output
    var speechOutput = "Here's your fact: " + randomFact;
    var cardTitle = "Your Fact";
    response.tellWithCard(speechOutput, cardTitle, speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the SpaceGeek skill.
    var fact = new Fact();
    fact.execute(event, context);
};


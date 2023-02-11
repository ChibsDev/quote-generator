const generateQuote = function() {
    const quotes = [
    {
        quote: "Inherited Will, The Destiny Of Age, The Dreams Of Its People. As Long As People Continue To Pursue The Meaning Of Freedom, These Things Will Never Cease!",
        author: "Gol D. Roger",
        show:"One Piece"

    },
    {
        quote: "Justice Will Prevail, You say? But Of Course, It Will! Whoever Wins This War Becomes Justice!",
        author: "Donquixote Doflamingo",
        show:"One Piece"
    },
    {
        quote: "Life is like a pencil that will surely run out, but will leave the beautiful writing of life.",
        author: "Nami",
        show:"One Piece"
    },
    {
        quote: "Being lonely is more painful than getting hurt.",
        author: "Monkey D. Luffy",
        show:"One Piece"
    },
    {
        quote: "Neither God nor the Devil can give aid to those without the will to fight.",
        author: "Brook",
        show:"One Piece"
    },
    {
        quote: "Fools who don’t respect the past are likely to repeat it.",
        author: "Nico Robin",
        show:"One Piece"
    },
    {
        quote: "The world isn’t perfect. But it’s there for us, doing the best it can….that’s what makes it so damn beautiful.Have a biscuit, Potter.",
        author: "Roy Mustang",
        show:"Full Metal Alchemist"
    },
    {
        quote: "Comrade isn’t simply a word. Comrades are about heart. It’s the unconditional trust in your partners. Please, feel free to lean on me… and I too, will lean on you as well.",
        author: "Mavis Vermillion",
        show:"Fairy Tail"
    },
    {
        quote: " We know our weakness. Now what will we do? We’ll get stronger! We’ll get up and fight",
        author: "Natsu Dragneel",
        show:"Fairy Tail"
    },
    {
        quote: " I won’t run, I will stand and look ahead to what I must do, I must face the fear, I won’t let it control me anymore, I will use my heart that holds my courage and my bravery to move me forward to what I must do.",
        author: " Gray Fullbuster",
        show:"Fairy Tail"
    },
    {
        quote: " Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.",
        author: "Gildharts Clive",
        show:"Fairy Tail"
    },
    {
        quote: " I am the hope of the universe. I am the answer to all living things that cry out for peace. I am the protector of the innocent. I am the light in the darkness. I am the truth. Ally to good! Nightmare to you!",
        author: "Son Goku",
        show:"Dragon Ball Z"

    },
    {
        quote: " I’m fine, except… It’s a terrible day for rain",
        author: "Roy Mustang",
        show:"Full Metal Alchemist Brotherhood"
    },
    {
        quote: "Become strong not just for your own sake, but for your friends.",
        author: "Reiko Mikami",
        show:"BLEACH"

    },
    {
        quote: "Arrogance destroys the footholds of victory",
        author: "Byakuya Kuchiki",
        show:"BLEACH"

    },
    {
        quote: " A man who raises his hands on a woman is trash. If I have to become trash in order to survive… It’ll be just like dying.",
        author: "Renji Abarai ",
        show:"BLEACH"

    },
    {
        quote: " We can’t waste time worrying about the what if’s.",
        author: "Ichigo Kurosaki",
        show:"BLEACH"


    },
    {
        quote: " I’m not fighting because I want to win, I’m fighting because I have to win.",
        author: "Ichigo Kurosaki",
        show:"BLEACH"
    },
    {
        quote: " Don’t break anyone’s heart, they only have one. Break their bones, they have 206.",
        author: "Ichigo Kurosaki",
        show:"BLEACH"
    },
    {
        quote: "  The world isn’t something that is all planned out. It’s something you make yourself.",
        author: "Yuuko Ichihara",
        show:"xxxHolic"
    },
    {
        quote: "Dream your dream! Then, pursue the ideals to make that dream a reality, and someday you will achieve all that you dreamed of!",
        author: "N",
        show:"Pokemon"
    },
   
    {
        quote: "Sadness is just another wall that blocks you from moving on. I know it’s hard to get past it, but you got to break through.",
        author: "Gray Fullbuster",
        show:"Fairy Tail"

    },
    {
        quote: "Normally, as people love and are loved, they feel happiness. When I am hated by people, that is when I feel happiness. And then I want to tear apart and inflict unimaginable harm to the things I love. But is that really all that strange, I wonder?",
        author: "Pariston Hill",
        show:"HunterXHunter"
    },
    {
        quote: "It takes a mere second for treasure to turn to trash.",
        author: "Hisoka",
        show:"HunterXHunter"
    },
    {
        quote: "You can’t ever win if you’re always on the defensive. To win, you have to attack!",
        author: "Light Yagami",
        show:"Death Note"

    },
    {
        quote: "The opposite of boredom is not pleasure… but excitement. People will gladly seek out any kind of excitement, even pain.",
        author: "Shogo Makishima",
        show:"Psycho Pass"

    },
    {
        quote: " When people are protecting something truly precious to them. They truly can become…as strong as they need to be!",
        author: "Haku",
        show:"Naruto"
    },
    {
        quote: "Any betrayal you can see is trivial, what is truly frightening and much more lethal, is the betrayal you cannot see.",
        author: "Sosuke Aizen",
        show:"BLEACH"

    },
    {
        quote: " Even if no one believes in you, stick out your best and scream your defiance!",
        author: "Rukia Kuchiki",
        show:"BLEACH"

    },
    {
        quote: "The big secret to breaking the rules is to make it look as though you’re following them.",
        author: "Johan Liebert",
        show:"Monster"

    },
    {
        quote: "There probably isn’t any meaning in life. Perhaps you can find something interesting to do while you are alive. Like how you found that flower. Like how I found you.",
        author: "Orochimaru",
        show:"Naruto"

    },
    {
        quote: "TIt’s human nature not to realize the true value of something, unless they lose it.",
        author: "Orochimaru",
        show:"Naruto"

    },
    {
        quote: "Laziness is such an ugly word. I prefer selective participation.",
        author: "Hanzo Urushihara",
        show:"The Devil Is A Part Timer"

    },
    {
        quote: "Tears are how our heart speaks when your lips cannot describe how much we’ve been hurt.",
        author: "Jellal Fernandes",
        show:"Fairy Tail"

    },
    {
        quote: "I’ll leave tomorrow’s problems to tomorrow’s me.",
        author: "Saitama",
        show:"ONE PUNCH MAN"

    },
    {
        quote: "If you really want to be strong… Stop caring about what your surrounding thinks of you!",
        author: "Saitama",
        show:"One-Punch Man"

    },
    {
        quote: "Why should I apologize for being a monster? Has anyone ever apologized for turning me into one?",
        author: "Juuzou Suzuya",
        show:"Tokyo Ghoul"
    },
    {
        quote: "A place where someone still thinks about you is a place you can call home.",
        author: "Jiraiya",
        show:"Naruto"

    },
    {
        quote: "One Piece, Does Exist!",
        author: "Edward ‘Whitebeard’ Newgate ",
        show:"One Piece"

    },
    {
        quote: "People don’t fear god, fear itself is god!",
        author: "Enel ",
        show:"One Piece"

    },
    {
        quote: "Miracles only happen to those who never give up",
        author: "Emporio Ivankov ",
        show:"One Piece"

    },
    {
        quote: "You can’t bring back what you’ve lost, think about what you have now!",
        author: "Jinbe",
        show:"One Piece"

    },
    {
        quote: "No one is born into this world to be alone",
        author: "Jaguar D. Saul",
        show:"One Piece"

    },
    {
        quote: "If you don’t take risks, you can’t create a future.",
        author: "Monkey D. Luffy",
        show:"One Piece"

    },
    {
        quote: "By experiencing both victory and defeat, running away and shedding tears, a man will become a man. It’s okay to cry, but you have to move on.",
        author: "Shanks",
        show:"One Piece"

    },
    {
        quote: "Only those who have suffered long, can see the light within the shadows.",
        author: "Roronoa Zoro",
        show:"One Piece"

    },
    {
        quote: "We have to live a life of no regrets.",
        author: "Portgas D. Ace",
        show:"One Piece"

    },
    {
        quote: "Maybe nothing in this world happens by accident. As everything happens for a reason, our destiny slowly takes form.",
        author: "Silvers Rayleigh",
        show:"One Piece"

    },
    {
        quote: "Men who can’t wipe away the tears from a women’s eyes, aren’t real men.",
        author: "Sanji Vinsmoke",
        show:"One Piece"

    },
    {
        quote: "The weak don’t get to decide anything, not even how they die.",
        author: "Trafalgar  D. Water Law ",
        show:"One Piece"

    },
    {
        quote: "Life is not a game of luck. If you wanna win, work hard.",
        author: "Sora",
        show:"No Game No Life"

    },
    {
        quote: "Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain.",
        author: "Pain [Nagato]",
        show:"Naruto Shippuden"

    },
    {
        quote: "Never trust anyone too much, remember the devil was once an angel",
        author: "Kaneki",
        show:"Tokyo Ghoul"

    },
    {
        quote: "Don’t worry about what other people think. Hold your head up high and plunge forward",
        author: "Izuku Midoriya",
        show:"My Hero Academia"

    },
    {
        quote: "If you can’t find a reason to fight, then you shouldn’t be fighting.",
        author: "Akame",
        show:"Akame Ga Kill"

    },
    {
        quote: "Because people don’t have wings, they look for ways to fly.",
        author: "Ukai Keishin",
        show:"Haikyuu"
    },
    {
        quote: "Hatred and Sorrow are power. They are yours to control. All you have to do is to turn them into strength and use that strength to move forward",
        author: "Sebastian Michaelis",
        show:"Black Butler"

    },
    {
        quote: "A hero’s job is to risk his life to turn his promises into reality!",
        author: "Izuku Midoriya",
        show:"My Hero Academia"

    },
    {
        quote: " We know our weakness. Now what will we do? We’ll get stronger! We’ll get up and fight",
        author: "Natsu Dragneel",
        show:"Fairy Tail"
    },
    {
        quote: " That’s just the way it is. Change is inevitable. Instead of resisting it, you’re better served simply going with the flow",
        author: "Shunsui Kyouraku",
        show:"BLEACH"
    },
    {
        quote: " People are able to hold onto hope since death is that which cannot be seen.",
        author: "Rukia Kuchiki",
        show:"BLEACH"
    },
    {
        quote: " It’s easier to crush a dream than realize one. Forming a bond is infinitely more difficult than breaking one.",
        author: "Gin Ichimaru",
        show:"BLEACH"
    },
    {
        quote: "  Revenge Is Just The Path You Took To Escape Your Suffering.",
        author: "Ichigo Kurosaki",
        show:"BLEACH"
    },
    {
        quote: "Hard work is worthless for those that don't believe in themselves.",
        author: "Naruto Uzumaki",
        show:"Naruto"
    },
    {
        quote: "If you don’t share someone’s pain, you can never understand them.",
        author: "Nagato",
        show:"Naruto"
    },
    {
        quote: "The concept of hope is nothing more than giving up. A word that holds no true meaning.",
        author: "Madara Uchiha",
        show:"Naruto"
    },
    {
        quote: "Love is not necessary, power is the only true necessity.",
        author: "Madara Uchiha",
        show:"Naruto"
    },
    {
        quote: "When a man learns to love, he must bear the risk of hatred.",
        author: "Madara Uchiha",
        show:"Naruto"
    },
    {
        quote: "When a man learns to love, he must bear the risk of hatred.",
        author: "Madara Uchiha",
        show:"Naruto"
    },
    {
        quote: "Rejection is a part of any man’s life. If you can’t accept and move past rejection, or at least use it as writing material – you’re not a real man.",
        author: "Jiraiya",
        show:"Naruto"
    },
    {
        quote: "Power is not will, it is the phenomenon of physically making things happen.",
        author: "Madara Uchiha",
        show:"Naruto"
    },
    {
        quote: "A place where someone still thinks about you is a place you can call home.",
        author: "Jiraiya",
        show:"Naruto"
    },
    {
        quote: "If you don’t like your destiny, don’t accept it. Instead have the courage to change it the way you want it to be.",
        author: "Naruto Uzumaki",
        show:"Naruto"
    },
    {
        quote: "Once you question your own belief, it’s over.",
        author: "Naruto Uzumaki",
        show:"Naruto"
    },
    {
        quote: "While you’re alive, you need a reason for your existence. Being unable to find one is the same as being dead.",
        author: "Naruto Uzumaki",
        show:"Naruto"
    },
    {
        quote: "It’s human nature not to realize the true value of something, unless they lose it.",
        author: "Orochimaru.",
        show:"Naruto"
    },
    {
        quote: "Either people change or they die before they do. It’s one or the other.",
        author: "Orochimaru.",
        show:"Naruto"
    },
    {
        quote: "Either people change or they die before they do. It’s one or the other.",
        author: "Orochimaru.",
        show:"Naruto"
    },
    {
        quote: "It’s not the face that makes someone a monster, it’s the choices they make with their lives.",
        author: "Naruto Uzumaki",
        show:"Naruto"
    },
    {
        quote: "The longer you live… The more you realize that reality is just made of pain, suffering and emptiness.",
        author: "Madara Uchiha",
        show:"Naruto"
    },
    {
        quote: "The moment people come to know love, they run the risk of carrying hate.",
        author: "Obito Uchiha",
        show:"Naruto"
    },
    {
        quote: "I have long since closed my eyes… My only goal is in the darkness.",
        author: "Sasuke Uchiha",
        show:"Naruto"
    },
    {
        quote: "Even the strongest of opponents always has a weakness.",
        author: "Itachi Uchiha",
        show:"Naruto"
    },
    {
        quote: "If love is just a word, then why does it hurt so much if you realize it isn’t there?",
        author: "Gaara",
        show:"Naruto"
    },
    {
        quote: "A dropout will beat a genius through hard work",
        author: "Rock-Lee",
        show:"Naruto"
    },
    {
        quote: "People’s lives don’t end when they die. It ends when they lose faith.",
        author: "Itachi Uchiha",
        show:"Naruto"
    },
    {
        quote: "The ones who aren’t able to acknowledge their own selves are bound to fail.",
        author: "Itachi Uchiha",
        show:"Naruto"
    },
    {
        quote: "Those who forgive themselves, and are able to accept their true nature… They are the strong ones!",
        author: "Itachi Uchiha",
        show:"Naruto"
    },
    {
        quote: "In the ninja world, those who don’t follow the rules are trash. But, those who abandon their friends are even worse than trash.",
        author: "Obito Uchiha",
        show:"Naruto"
    },


];



    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = '" ' + quotes[arrayIndex].quote + ' "';
    document.getElementById("author").innerHTML = '~ ' + quotes[arrayIndex].author + ' ~';

    let animeInnerHTML = quotes[arrayIndex].show;
    let animeElement = document.getElementById("anime");
    if (quotes[arrayIndex].show === "One Piece") {
        animeElement.style.fontFamily = "One-Piece, sans-serif";
        animeElement.style.fontSize = "30px";
    } 
    else if (quotes[arrayIndex].show === "Attack on Titan") {
        animeElement.style.fontFamily = "AOT, sans-serif";
    } 
    else if (quotes[arrayIndex].show === "Black Clover") {
        animeElement.style.fontFamily = "Black-Clover, sans-serif";
    } 
    else if (quotes[arrayIndex].show === "BLEACH") {
        animeElement.style.fontFamily = "Bleach, sans-serif";
    } 
    else if (quotes[arrayIndex].show === "Avatar") {
        animeElement.style.fontFamily = "Avatar, sans-serif";
    }  
    else if (quotes[arrayIndex].show === "Death Note") {
        animeElement.style.fontFamily = "Death-Note, sans-serif";
    }  
    else if (quotes[arrayIndex].show === "Fairy Tail") {
        animeElement.style.fontFamily = "Fairy-Tail, sans-serif";
    }     
    else if (quotes[arrayIndex].show === "HunterXHunter") {
        animeElement.style.fontFamily = "HXH, sans-serif";
    }   
    else if (quotes[arrayIndex].show === "Jujutsu Kaisen") {
        animeElement.style.fontFamily = "Jujutsu-Kaisen, sans-serif";
    }     
    else if (quotes[arrayIndex].show === "My Hero Academia") {
        animeElement.style.fontFamily = "MHA, sans-serif";
    }  
    else if (quotes[arrayIndex].show === "Naruto" || quotes[arrayIndex].show === "Naruto Shippuden" ) {
        animeElement.style.fontFamily = "Naruto, sans-serif";
    }   
    else if (quotes[arrayIndex].show === "Pokemon") {
        animeElement.style.fontFamily = "Pokemon-Solid, sans-serif";
    }    
    else if (quotes[arrayIndex].show === "Dragon Ball Z") {
        animeElement.style.fontFamily = "Saiyan-Sans, sans-serif";
    }     
    else if (quotes[arrayIndex].show === "Tokyo Ghoul") {
        animeElement.style.fontFamily = "TG, sans-serif";
    } 
    else {
        animeElement.style.fontFamily = "impact, sans-serif";
    }
        animeElement.innerHTML = animeInnerHTML;
}


window.onload = function() {
    generateQuote();
    document.getElementById("btn").addEventListener('click', generateQuote);
}


let backgrounds = document.querySelectorAll(".background");
let imageIndex = 0;

function changeBackground() {
    backgrounds[imageIndex].classList.remove("showing")
    
    imageIndex++


    if(imageIndex >= backgrounds.length){
        imageIndex = 0;
    }

    backgrounds[imageIndex].classList.add("showing") 
}

setInterval(changeBackground, 7000);
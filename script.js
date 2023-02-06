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
        quote: " It’s just pathetic to give up on something before you even give it a shot.",
        author: "Reiko Mikami",
        show:"Another"

    },
    {
        quote: " There is nothing shameful about being different from others. This is your character! Ann’s red hair is really beautiful, just like the color of red spider lilies in their full bloom. Red really suits you. You should have more confidence in yourself.",
        author: "Vincent Phantomhive",
        show:"Black Butler"

    },
    {
        quote: " Words are cheap. There’s no guarantee she won’t tell anyone. Humans lie without a second thought. Including me, of course.",
        author: "Ciel Phantomhive ",
        show:"Black Butler"

    },
    {
        quote: " Moping around with sadness and sorrow… what will come of it? Even dead people can do that. However, I’ll live and stand on my own two legs. If we are going to die one day, wouldn’t it be better to have no regrets?",
        author: "Ciel Phantomhive ",
        show:"Black Butler"


    },
    {
        quote: " There’s nothing more deceiving than an obvious truth.",
        author: "Ciel Phantomhive ",
        show:"Black Butler"

    },
    {
        quote: "  The world isn’t something that is all planned out. It’s something you make yourself.",
        author: "Yuuko Ichihara",
        show:"xxxHolic"
    },
    {
        quote: "Dream your dream! Then, pursue the ideals to make that dream a reality, and someday you will achieve all that you dreamed of!",
        author: "N",
        show:"pokemon"
    },
    {
        quote: "Battles aren’t supposed to be heroic affairs. They are not supposed to be fun or exciting, to us every battle is filled with despair, they are dark, horrifying, grizzly. We should fear warfare, avoid it always and whenever possible choose the path of peace.",
        author: "Izuru Kira",
        show:"Bleach"

    },
    {
        quote: "Sadness is just another wall that blocks you from moving on. I know it’s hard to get past it, but you got to break through.",
        author: "Gray Fullbuster",
        show:"Fairy Tail"

    },
    {
        quote: "Normally, as people love and are loved, they feel happiness. When I am hated by people, that is when I feel happiness. And then I want to tear apart and inflict unimaginable harm to the things I love. But is that really all that strange, I wonder?",
        author: "Pariston Hill",
        show:"HunterXhunter"
    },
    {
        quote: "It takes a mere second for treasure to turn to trash.",
        author: "Hisoka",
        show:"HunterXhunter"
    },
    {
        quote: "You can’t ever win if you’re always on the defensive. To win, you have to attack!",
        author: "Light Yagami",
        show:"Death note"

    },
    {
        quote: "The opposite of boredom is not pleasure… but excitement. People will gladly seek out any kind of excitement, even pain.",
        author: "Shogo Makishima",
        show:"Psycho Pass"

    },
    {
        quote: "Books are not something that you just read words in. They’re also a tool to adjust your senses. When I’m not feeling well there are times that I can’t take in what I read. When that happens, I try to think about what could be hindering my reading. There are books that I can take in smoothly even when I’m not feeling well. I try to think why. It might be something like mental tuning. What’s important when you tune is the feeling of the paper that you’re touching with your fingers and the momentary stimulation your brain receives when you turn pages.",
        author: "Makishima Shougo",
        show:"Psycho Pass"

    },
    {
        quote: "In order to measure a person’s worth you must do more than push them. The real way to test their worth is to give them power. When they gain the freedom to act outside the boundaries of law and ethics you can sometimes see their souls.",
        author: "Makishima Shougo",
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
        show:"Bleach"

    },
    {
        quote: "In this world, the weak are the sustenance of the strong. The strong live, the weak die.",
        author: "Makoto Shishio",
        show:"Rorouni Kenshin"

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
        show:"One-Punch Man"

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
        quote: "Life is not a game of luck. If you wanna win, work hard.",
        author: "Sora",
        show:"No Game No Life"

    },
    {
        quote: "Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain.",
        author: "Pain [Nagato]",
        show:"(Naruto Shippuden)"

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
];

console.log(quotes[3].quote);

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
    document.getElementById("anime").innerHTML = quotes[arrayIndex].show;

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
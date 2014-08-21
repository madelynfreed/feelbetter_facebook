var feelings = [
    'scared',
    'alone',
    'scared and alone',
    'lonely',
    'mostly scared but a little alone',
    'scared of being alone',
    'alone because of fear',
    'scary alone',
    'scared but not really showing it',
    'alone in a crowd',
    'scary',
    'alone but playing it off',
    'happy (read: scared and alone)',
    'SICK AND TIRED OF BEING SICK AND TIRED'
    'mostly alone but a little scared'
    "like this brave face won't last much longer",
    'disappointed in myself',
    'like I should be happy, given the circumstances',
    'fraudulent',
    'like a goddamn fraud',
    'paralyzed with too many bad options',
    'frightened of death',
    'terrified, honestly',
    'a chasm in my chest',
    "like I'll never live up to my potential, if I had any in the first place",
    'worthless',
    'like I must go on, despite everything',
    'hopeful, because nothing matters anyway so',
    'deep pointlessness',
    'an empty space where there should be love',
    'accepting of the apocalypse',
    "what if I hadn't wasted all that time?",
    "WHY DON'T PEOPLE TALK ABOUT THIS",
    'distracted by minutae, luckily',
    "paralyzed with too many good options. Shouldn't that make me feel better?"
    "nothing. Shouldn't I feel something?"
    'weird. Wait no just scared'
    'alone, in that bad way',
    'crying. But not for help',
    'accomplished (but for what? Why? Why anything?)',
    'an empty space where there should be fear',
    'the last word in lonesome is me',
    'like a shell of who I used to be',
    'like a shell of who I never was',
    'like a mannequin of solitude',
    "like I'm waiting for anything. Anything",
    'whatever. Eating off my chest',
    'whatever. talking to a Taylor Swift poster',
    "alone. Thinking about what I'll lie about at work today",
    "should I buy lemonade powder for my brita water just to taste anything at all"
    "determined. Erasing a crossword to do it faster, better",
    "scared. Tried sleeping under my bed last night, didn't help.",
    "all my clothes are beige",
    'alone. Bringing leftovers to the airport',
    'prepared for the mundane',
    'not quite up to it, honestly',
    'tempest-tossed',
    'too meaningless for destiny to have something in store for me',
    'alert to pain',
    'alert to numbness',
    "like garbage but no more than usual"
    'cute. Like a wart',
    'static',
    'like nothing has changed in all of human history',
    'paused',
    'chill. Like a corpse',
    'different than everyone else',
    'different than I ever was. Worse, for sure',
    'frightened of silence',
    'determined to win today. Win one moment of peace',
    'always the bridesmaid, never free from work to attend the wedding',
    "like I'm always complaining about not having time off but what would I even do if I had it?",
    
    
];

function randomFeeling() {
    return _.first(_.shuffle(feelings));
}

function tagFeelings() {
    var item = $(this);

    var hoverCard = item.attr('data-hovercard');
    if(hoverCard && !hoverCard.match(/user\.php/))
        return;

    item.addClass('SKIPME');
    var feeling = randomFeeling();
    $(document.createTextNode(" feeling " + feeling + " ")).insertAfter(item);
}

function feelBetter() {
    $('div.fcg span.fcg a').not('.SKIPME').each(tagFeelings);
    $('span.fwb a.profileLink').not('.SKIPME').each(tagFeelings);
    setTimeout(feelBetter, 500);
}

setTimeout(feelBetter, 500);


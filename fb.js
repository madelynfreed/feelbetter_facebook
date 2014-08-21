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
    ''
    
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


//utilizing the .concat() method
function full_sentence()
{
    var part_1 = "Guess what day ";
    var part_2 = "It is... ";
    var part_3 = "April Fools!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}

//utilizing the .slice() method
function slice_Method()
{
    var sentence = "Slice and Dice";
    var section = sentence.slice(10, 14);
    document.getElementById("Slice").innerHTML = section;
}

//utilizing the .toString() method
function string_Method()
{
    var myNumber = 999;
    document.getElementById("ToString").innerHTML = myNumber.toString();
}

//utilizing the .toPrecision() method
function precision_method()
{
    var myNumber = 123.456789101111213;
    document.getElementById("SpecificLength").innerHTML = myNumber.toPrecision(5);
}
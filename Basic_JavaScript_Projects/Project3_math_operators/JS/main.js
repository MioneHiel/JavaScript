function addition()
{
    var add = (1 + 2);
    document.getElementById("Add").innerHTML = "1 + 2 = " + add; //print results
}

function subtraction()
{
    var sub = (9-7);
    document.getElementById("Sub").innerHTML = "9 - 7 = " + sub; //print results
}

function multiplication()
{
    var mult = (12*5);
    document.getElementById("Mlt").innerHTML = "12 * 5 = " + mult; //print results
}

function division()
{
    var divide = (39/3);
    document.getElementById("Div").innerHTML = "39 / 3 = " + divide; //print results
}

function random()
{
    document.getElementById("Ran").innerHTML = Math.random()*10; //print results
}

function modulus_operator()
{
    var modulus = 38 % 4;
    document.getElementById("Mod").innerHTML = "When you divide 38 by 4 you have a remainder of: " + modulus; //print results
}

function Increment()
{
    var value = document.getElementById("IncrementText").innerHTML;
    value++; //Add one to the value
    document.getElementById("IncrementText").innerHTML = value; //Print result
}

function Decrement()
{
    var value = document.getElementById("DecrementText").innerHTML;
    value++; //Subtract one from the value
    document.getElementById("DecrementText").innerHTML = value; //Print result
}
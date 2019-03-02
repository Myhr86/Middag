var foods = ["Lasagne","Taco","Pizza","Gryterett","Spagetti","Fiskegrateng","Pølse og mos","Sodd","Buritos",
"Pannekaker","Hamburger","Wok","Pølse og brød","Laksepakker","Fiskepinner","Ørretfilet","Fiskeboller i hvit saus",
"Tomatsuppe","Ostepanetter","Lapskaus"];
var days = ["Monday: ", "Tuesday: ", "Wednesday: ", "Thursday: ", "Friday: ", "Saturday: ", "Sunday: "]



var text = "";
var i;
for (let i = 0; i < foods.length; i++) {
  text += foods[i] + "<br>"
}

function newDinner() {
var randomDinner = (Math.floor(Math.random()*foods.length));
var randomNumber = (Math.floor(Math.random() * 1) + 1);

document.getElementById("foods").innerHTML = foods[randomDinner] + "<br>" + foods[randomDinner + randomNumber] + "<br>" + foods[randomDinner + 2] + "<br>" + foods[randomDinner + 3] +
"<br>" + foods[randomDinner - 3] + "<br>" + foods[randomDinner - 2] + "<br>" + foods[randomDinner -1];
}

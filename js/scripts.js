$(document).ready(function() {
  $("form#form-group").submit(function(event) {
   event.preventDefault();
   let number = [];
   number.push($("input#inputNumber").val());

   let array = [];
   for (let i = 0; i <= number; i += 1) {
     array.push(i.toString());
   };

      array.forEach(function(number) {
    if (array[number].includes("3")) {
      array[number] = "Won't you be my neighbor?"}
    else if (array[number].includes("2")) {
      array[number] = "Boop!"}
  else if (array[number].includes("1")) {
    array[number] = "Beep!"};
  });

$("#result").text(array);
  });
});

//Thoughts on why the following doesnt work??
// $(document).ready(function() {
//   $("form#form-group").submit(function(event) {
//    event.preventDefault();
//    let number = [];
//    number.push($("input#inputNumber").val());

//    let array = number.map(function(item){
//      return parseInt(item);
//    });

//    let newArray = []
//    array.forEach(function(number) {
//     while (number > -1) {
//       newArray.push(number);
//       number --;}
//     return newArray;
//    });

//    let reverseArray = newArray.reverse();
//       reverseArray.forEach(function(number) {
//     if (reverseArray.includes(3)) {
//       reverseArray[number] = "Won't you be my neighbor?"}
//     else if (reverseArray.includes(2)) {
//       reverseArray[number] = "Boop!"}
//     else if (reverseArray.includes(1)) {
//       reverseArray[number] = "Beep!"};
//   });

// $("#result").text(reverseArray);
//   });
// });
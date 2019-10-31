function decrypter (string) {
  var smallStr = string.split("");

  var spaceRoom = removeSpace(smallStr);
  var strLength = spaceRoom.length;

  var rows = Math.floor(Math.sqrt(strLength));
  var cols = Math.floor(Math.sqrt(strLength));

  if ((Math.sqrt(strLength) - rows) > 0) {
    rows += 1;
  }
  console.log("String Length: ", strLength);
  console.log("Cols: ", cols);
  console.log("Rows: ", rows);

  for (i = 0; i < strLength; i++) {                     //This creates columns
    if (i <= cols) {
      $("#grid").append("<td></td>");
    }
  }

  for(i = 0; i < rows; i++){
    $("#grid").append("<tr></tr>");
  }

}
// $("#grid").append("<tr></tr>")
//Second loop to create rows based on columns



function removeSpace(array){
  for(i = 0; i < array.length; i++){
    if (array[i] === " "){
      array.splice(i, 1);
    }
  }
  return array;
};



$(document).ready(function(){
  $("#userInputForm").submit(function(event){
    event.preventDefault();

    var userString = $("#userInput").val();

    $("#outputText").text(decrypter(userString));
    $(".outputBox").slideDown();


  });
});

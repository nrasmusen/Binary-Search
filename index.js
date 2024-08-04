//establishing variables 
var array = [1, 5, 7, 11, 13, 22, 29, 31, 40, 56, 63, 65, 73, 75, 86, 98, 100];
var p1 = 0;
var p2 = array.length - 1;
var mid = (p1 + p2) / 2;
var val = 0;
var on = true;

//prompt for number to search for
val = prompt("Num ");


while (on) {
  //if the points end up next to each other the number is not in array therefore kicking out of program
  if (p1 + 1 == p2) {
    console.log("not in array");
    on = false;
  }

  //if they don't equal each other
  else if (p1 != p2) {
    //exit to program once number is found and displaying what slot the number is in
    if (array[mid] == val) {
      console.log(mid);
      on = false;
    }
    else {
      //if the value is less than the midpoint then point 2 becomes midpoint, and then new midpoint is calculated 
      if (val < array[mid]) {
        p2 = mid;
        mid = (p1 + p2) / 2;
      }
      //if the value is greater than the midpoint then point 1 becomes midpoint, and then new midpoint is calculated 
      else if (array[mid] < val) {
        p1 = mid;
        mid = (p1 + p2) / 2;
      }
    }
  }
}




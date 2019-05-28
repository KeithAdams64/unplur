//Conditional statement for a single item to remove the last letter of a string 
unplur = (number, label) => {
  if (number == 1) {
    label = label.slice(0,label.length - 1);
  }
  console.log("We presently have only " + number + " " + label + " left in stock.");
};

unplur(5,"widgets");
unplur(1,"widgets");

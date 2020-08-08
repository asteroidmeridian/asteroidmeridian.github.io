let TOTAL, STR_LVL, END_LVL, NORMAL, PASSION, DPASSION;

function domReady() {
  console.log('dom is ready');
  TOTAL=document.getElementById("total");
  STR_LVL=document.getElementById("strLvl");
  END_LVL=document.getElementById("endLvl");
}


// index = level

const LVL_MAP = {
  none: [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 67, 81, 97, 115, 135, 157, 181, 207, 235, 265, 297],
  passion: [0, 0, 1, 2, 3, 5, 8, 11, 15, 19, 24, 30, 37, 45, 54, 64, 75, 87, 100, 114, 129, 146],
  double: [0, 0, 0, 1, 2, 3, 5, 7, 9, 11, 13, 16 ,19, 23, 27, 32, 37, 43, 50, 57, 64, 72],
};

function pointsNeeded() {
  const button = document.querySelector("input[name=passions]:checked").value;
  const lvlArr = LVL_MAP[button] 
  
  const str = parseInt(STR_LVL.value);
  const end = parseInt(END_LVL.value);
  const total = lvlArr[end] - lvlArr[str];

  if (str > 22 || end > 22) {
    alert("Please input a number less than 22.")
    return;
  }

  document.getElementById("total").innerHTML = total + " POINTS";
  
  console.log(button, str, end, total);
  // console.log(STR_LVL.value,END_LVL.value,button);
}
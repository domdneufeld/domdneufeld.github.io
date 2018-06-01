// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

// global variables
let someList = [5,15,3,8,9,1,20,7,];
let switched = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  swapList(someList);
  print(someList);
}

function draw() {
}

function swapList(list){
  if (!switched){
    return list;
  }
  else{
    switched = false;
    for (let i = 0; i < list.length - 1; i++) {
      let a = i;
      let b = i + 1;
      let c;
      if (list[a] > list[b]){
        switched = true;
        c = list[a];
        list[a] = list[b];
        list[b] = c;
      }
      swapList(list);
    }
  }
}

// Worksn't
// function selectionSort(list){
//   let a = 0;
//   let swapLocation;
//   for (let i = 0; i < list.length - 1; i++) {
//     for (let i = a; i < list.length - 1 - a; i++){
//       let firstNumber = a;
//       if (list[i] < a){
//         swapLocation = i;
//       }
//     }
//     let b = list[swapLocation];
//     list[swapLocation] = list[a];
//     list[a] = b;
//     a += 1;
//   }
//   return list;
// }

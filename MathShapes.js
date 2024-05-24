// Lenght of daiagonal square

let vertiLenght = 9; // Other lenght of the square
let horiLenght = Math.sqrt(2* Math.pow(vertiLenght, 2)); // Equation to find the diagonal
console.log("Diagonal of a square is:", horiLenght.toFixed(2));

//-----------------------------------------------------------------------------

// Area of a triangle = 1/2 base * hight
let lenght1 = 5;
let lenght2 = 6;
let lenght3 = 7; // these are the three given lengts now declared

let preArea = (lenght1 + lenght2 + lenght3)/2; // sum of 3 sides divided by two
let area = Math.sqrt(preArea* (preArea - lenght1) * (preArea - lenght2)* (preArea - lenght3));

console.log("Area of a triangle: ", area.toFixed(2));

//-----------------------------------------------------------------------------------------------------

//Circumfurance and surface area of a circle
const PI = Math.PI; // never changing number
let radius = 4;
let circumfurance = 2 * PI * radius; //Circumfurance =2π radius / daimeter = 2r
let surfaceArea = PI * Math.pow(radius,2); //Area = π radius²

console.log("Circumferance of a circle: ", circumfurance.toFixed(2));
console.log("Surface Area of a circle: ", surfaceArea.toFixed(2));

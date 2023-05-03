/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
  if (str.length === 0) {
    return ""
  }
  let letters = str[str.length-1];
  let variable = str.slice(0, str.length-1);
  // console.log(variable);
  // console.log(letters);
  return letters + reverse(variable);
}

// console.log(reverse("house")); // "esuoh"
// reverse("house"); // "esuoh"
// reverse("dog"); // "god"
// reverse("atom"); // "mota"
// reverse("q"); // "q"
// reverse("id"); // "di"
// reverse(""); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
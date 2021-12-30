var memo = document.getElementById("memo");
var memome = document.getElementById("memome");
var aTag = memome.children[0];
// console.log(aTag);

memo.onmouseover = memoHover;
memo.onmouseleave = memoHout;
memome.onclick = memoClick;

function memoHover() {
  memo.style.display = "none";
  memome.style.display = "block";
  aTag.style.color = "pink";
}
function memoHout() {
  memo.style.display = "block";
  memome.style.display = "none";
}
function memoClick() {}

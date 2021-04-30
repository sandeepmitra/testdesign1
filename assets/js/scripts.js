// Global Custom Scripts

document.querySelector("#tryAgain").onclick = function () {
  var relevance = document.querySelector("#relevance").value;

  if (relevance == 3) {
    document.querySelector("#relevance").value = 2;
    setTimeout(function () {
      document.querySelector("#relevance").value = 1;
    }, 600);
  } else if (relevance == 2) {
    document.querySelector("#relevance").value = 1;
  }
};

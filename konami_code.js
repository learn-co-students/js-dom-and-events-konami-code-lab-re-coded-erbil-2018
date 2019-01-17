const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() { const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
// this lab must be update wiht learn.co
function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[index] === key) {
      index++;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

init();
  // Write your JavaScript code inside the init() functi

}
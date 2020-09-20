var table = document.getElementsByClassName('table')[0];

table.addEventListener('click', handleClick);

var handleClick = function (event) {
  console.log(event.target);
}

var map = document.getElementById('map');

map.addEventListener('click', handleClick);

var handleClick = function (event) {
  console.log(event.target);
}

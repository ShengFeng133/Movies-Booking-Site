 
 
 

 
 
 
 
 
 
 
 
 
 


 
 

 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 

 
 


 
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const seatContainer = document.querySelector(".row-container");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

 

 
 
 
 
 
 
 
 
 
 

 

 
populateUI();

let ticketPrice = +movieSelect.value;

 
 
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".container .selected");

   
  seatsIndex = [...selectedSeats].map(function(seat) {
    return [...seats].indexOf(seat);
  });

   
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  let selectedSeatsCount = selectedSeats.length;
  count.textContent = selectedSeatsCount;
  total.textContent = selectedSeatsCount * ticketPrice;

   

}

 
 
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach(function(seat, index) {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

 

movieSelect.addEventListener("change", function(e) {
  ticketPrice = +movieSelect.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

 

seatContainer.addEventListener("click", function(e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

 
updateSelectedCount();

 








input[type="checkbox"] {
      }

input[type="checkbox"] + label {
    display: flex;
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    margin: 2px;
    cursor: pointer;
    text-align: center;
    line-height: 28px;
    background-color: white;       transition: background-color 0.3s;
}

input[type="checkbox"]:checked + label {
    background-color: green;       color: white;
    border: 1px solid #3498db;
}

input[type="checkbox"][disabled] + label {
    background-color: red;       color: rgb(233, 33, 33);
    border: 1px solid #ff0000;
}

label {
    position: relative;     }
  
      label::before {
    content: '\2713';       display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 20px;       color: transparent;       transition: color 0.3s;     }
  
      input[type="checkbox"]:checked + label::before {
    color: white;     }

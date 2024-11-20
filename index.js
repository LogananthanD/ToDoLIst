
// Get the current date
var TodayDate = new Date();

// Format the date as "Day, Month Date, Year"
var options = { weekday: 'long', day: 'numeric', month: 'long'};
var Date = TodayDate.toLocaleDateString('en-US', options);

// Display the date in the paragraph with id="date"
document.getElementById('date').textContent = Date;



function updat(event) {
    if (event.target.value == "Add a task") {
        event.target.value = "";
    }
}

// Update

var result = document.getElementById("result");
function tasks(event) {
    if (event.key === 'Enter') {
        var items = document.createElement("li");
        items.textContent = event.target.value;
        result.appendChild(items);
        event.target.value = ' ';
    }
}


function undo(event) {
    event.target.remove()
}

document.getElementById('result').onclick = function() {
    this.classList.toggle('strike');
};
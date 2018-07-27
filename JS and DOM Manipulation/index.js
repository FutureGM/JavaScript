var test = document.addEventListener('keyup', function (event) {
    console.log(event.keyCode);

})


//Build Input Field Buttons to reference proper HTML Elements
var $tbody = document.querySelector("tbody");
var $searchBtn = document.querySelector("#select");
var $dt = document.querySelector("#dt");
var $cy = document.querySelector("#cy");
var $st = document.querySelector("#st");
var $cn = document.querySelector("#cn");
var $sh = document.querySelector("#sh");


//Set Results
//Event listener for search Button, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

//Set filteredDataSet to data initially
var filteredDataSet = dataSet;
console.log(filteredDataSet)
//renderTable renders the filteredDataSet to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < 50; i++) {
        //Get current DataSet object and it's fields
        var dataUFO = filteredDataSet[i];
        var fields = Object.keys(dataUFO);
        //Create a new row in the tbody, set the index to be i + startingIndex
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            //For every field in the data object, create a new cell and set it's inner text to be the current value at the current data's field
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = dataUFO[field];
        }
    }
}

function handleSearchButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterDate = $dt.value.trim();
    var filterCity = $cy.value.trim();
    var filterState = $st.value.trim();
    var filterCountry = $cn.value.trim(); 
    var filterShape = $sh.value.trim();
    
        // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredDataSet = dataSet.filter(function(data) {
      var dateFil = data.datetime.toLowerCase();
      var cityFil = data.city.toLowerCase();
      var stateFil = data.state.toLowerCase();
      var countryFil = data.country.toLowerCase();
      var shapeFil = data.shape.toLowerCase();

     
     
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      if ( 
          (filterDate === dateFil || filterDate == "") &&
          (filterCity === cityFil || filterCity == "") &&
          (filterState === stateFil || filterState =="") &&
          (filterCountry === countryFil || filterCountry =="")&&
          (filterShape === shapeFil || filterShape =="")
        ) {
            return true;
        }
        return false;
    });
     
    renderTable();
  }
//Render the table the first time on page load

renderTable();
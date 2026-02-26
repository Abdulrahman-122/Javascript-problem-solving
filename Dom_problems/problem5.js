
// 5. Add Table Rows

// Write a JavaScript function to add rows to a table.

// Sample HTML file :

function insert_Row(){
    let table=document.getElementById('sampleTable')
    let raw_number=table.rows.length;
    let create_raw=table.insert_Row()
    let cell1=create_raw.insert_Cell(0)
    let cell2=create_raw.insert_Cell(1)
    cell1.innerHtml='Row'+create_raw+'cell0';
    cell2.innerHtml='Row'+create_raw+'cell1';
}
function insert_Row() {

  var table = document.getElementById("sampleTable");
  document.getElementById('sampleTable').style.background='yellow';

  var rowCount = table.rows.length;      // this line used to update the count of the number

  var newRow = table.insertRow();       // this line for inserting a row


  var cell1 = newRow.insertCell(0);    // insert a cell in the row
  var cell2 = newRow.insertCell(1);    // insert another cell in the row

  cell1.innerHTML = "Row" + rowCount + " cell1"; // put the cell inside the inner html element
  cell2.innerHTML = "Row" + rowCount + " cell2";
}
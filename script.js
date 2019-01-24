
if (document.getElementById('main')) {

var immageArray = ["Country5.jpg", "Country6.jpg", "Country7.jpg", "Country8.jpg"];
var descriptionArray = ["Thiland", "Malaysia", "USA", "German"];

var newTable = document.createElement('table');

for (i = 0; i < immageArray.length; i++) {

    // creating a new table row    
    var newTableRow = document.createElement('tr');


    //first column for image:
    //creating image :
    var newImg = document.createElement('img');
    newImg.src = immageArray[i];
    newImg.style.borderWidth = '5px';
    newImg.style.borderColor = 'darkblue';
    newImg.style.borderStyle = 'solid';
    newImg.style.borderRadius = '15px';

    // creating a new table data for iamge
    var newTableData1 = document.createElement('td');
    newTableData1.appendChild(newImg);

    //adding the data to the new table row
    newTableRow.appendChild(newTableData1);


    //second column for caption:
    //creating caption :
    var newCap = document.createElement('p');
    var capText = document.createTextNode(descriptionArray[i]);
    newCap.appendChild(capText);
    newCap.style.fontSize = '16px';
    newCap.style.color = 'white';
    newCap.style.fontWeight = 'bold';


    // creating a new table data for caption    
    var newTableData2 = document.createElement('td');
    newTableData2.appendChild(newCap);

    //adding the data to the new table row
    newTableRow.appendChild(newTableData2);

    //adding the whole row to the new table

    newTable.appendChild(newTableRow);

};

console.log(newTable);

//adding the new table to the body
var MainContent = document.getElementsByClassName("mainContent")[0];
MainContent.appendChild(newTable);


};


if (document.getElementById('FormBody')) {
    //Scripts for Register web page:
    
    //Adding confirmation before submitting
    var submitButton = document.getElementById("SubmitButton");
    
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var submitConfirm = confirm("Do you confirm your information?");
        if (submitConfirm) {
            console.log(submitConfirm);
        } else {
            console.log(submitConfirm);
        }
    });
    
    
    //Adding confirmation before resetting
    var resetButton = document.getElementById("ResetButton");
    
    resetButton.addEventListener("click", function (event) {
        event.preventDefault();
        var resetConfirm = confirm("Are you sure?");
        if (resetConfirm) {
            console.log(resetConfirm);
        } else {
            console.log(resetConfirm);
        }
    });
    
    
    };
    

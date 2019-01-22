

//Adding confirmation before submitting
var submitButton = document.getElementById("SubmitButton");

submitButton.addEventListener("click", function (event) {
    event.preventDefault ();
    var submitConfirm=confirm("Do you confirm your information?");
    if (submitConfirm) {
        console.log (submitConfirm);
    } else {
        console.log (submitConfirm); 
}
})

//Adding confirmation before resetting
var resetButton = document.getElementById("ResetButton");

resetButton.addEventListener("click", function (event) {
    event.preventDefault ();
    var resetConfirm=confirm("Are you sure?");
    if (resetConfirm) {
        console.log (resetConfirm);
    } else {
            console.log (resetConfirm); 
    }
})


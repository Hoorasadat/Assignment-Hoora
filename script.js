
//Scripts for the main web page

if (document.getElementById('main')) {

    //Image table: Adding a table contining images and their descriptions + URL

    var imageArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
    var descriptionArray = ["Thiland", "Malaysia", "USA", "German"];
    var imageUrlArray = ["https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.smartertravel.com%2Fuploads%2F2017%2F06%2Froad_trip_tips_hero-1400x500.jpg&imgrefurl=https%3A%2F%2Fwww.smartertravel.com%2F10-half-tips-road-trips%2F&docid=MPYyYTDIB8k0lM&tbnid=keZN4QQ7X7WGiM%3A&vet=10ahUKEwj--P7e6IngAhXKhlQKHV31Aw0QMwg-KAEwAQ..i&w=1400&h=500&bih=608&biw=1366&q=images%20for%20trips&ved=0ahUKEwj--P7e6IngAhXKhlQKHV31Aw0QMwg-KAEwAQ&iact=mrc&uact=8",
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.jimcdn.com%2Fapp%2Fcms%2Fimage%2Ftransf%2Fdimension%3D1280x10000%3Aformat%3Djpg%2Fpath%2Fsa6549607c78f5c11%2Fimage%2Fiebff385e8be4568d%2Fversion%2F1456062800%2Fheader-roadtrips-in-europe-amalfi-coast-copyright-marcelo-alex.jpg&imgrefurl=https%3A%2F%2Fwww.europeanbestdestinations.com%2Fbest-of-europe%2Fbest-roadtrips-in-europe%2F&docid=oFCHztfMgA1xXM&tbnid=Gnja_zIvW1Ko-M%3A&vet=10ahUKEwj--P7e6IngAhXKhlQKHV31Aw0QMwhvKCUwJQ..i&w=1280&h=457&bih=608&biw=1366&q=images%20for%20trips&ved=0ahUKEwj--P7e6IngAhXKhlQKHV31Aw0QMwhvKCUwJQ&iact=mrc&uact=8",
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.autoeurope.ca%2Fcae%2Fassets%2Fimage%2Fdrive-to-discover-italy.jpg&imgrefurl=https%3A%2F%2Fwww.autoeurope.ca%2Froad-trip-planner%2F&docid=Kr_wQBTK1YAatM&tbnid=J07CM4plptrIwM%3A&vet=10ahUKEwj--P7e6IngAhXKhlQKHV31Aw0QMwhzKCkwKQ..i&w=300&h=200&bih=608&biw=1366&q=images%20for%20trips&ved=0ahUKEwj--P7e6IngAhXKhlQKHV31Aw0QMwhzKCkwKQ&iact=mrc&uact=8#h=200&imgdii=fAh4WYh8zJFBvM:&vet=10ahUKEwj--P7e6IngAhXKhlQKHV31Aw0QMwhzKCkwKQ..i&w=300",
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.wildlandtrekking.com%2Fimg%2Fhomepicyellowstonebackpacking.jpg&imgrefurl=https%3A%2F%2Fwww.wildlandtrekking.com%2Ftrip-styles%2Fbackpacking-tours.html&docid=qds83odzvZau4M&tbnid=PEfFfBwNQVSlYM%3A&vet=10ahUKEwj--P7e6IngAhXKhlQKHV31Aw0QMwh0KCowKg..i&w=750&h=414&bih=608&biw=1366&q=images%20for%20trips&ved=0ahUKEwj--P7e6IngAhXKhlQKHV31Aw0QMwh0KCowKg&iact=mrc&uact=8"
    ];

    var newTable = document.createElement('table');

    for (let i = 0; i < imageArray.length; i++) {

        // creating a new table row    
        var newTableRow = document.createElement('tr');

        //first column for image
        //creating the image 
        var newImg = document.createElement('img');
        newImg.src = imageArray[i];
        newImg.style.borderWidth = '5px';
        newImg.style.borderColor = 'darkblue';
        newImg.style.borderStyle = 'solid';
        newImg.style.borderRadius = '15px';

        // adding the mouseclick function for the image to open a new window 
        newImg.addEventListener("click", function (event) {
            var my_window = window.open(imageUrlArray[i]);

            // adding a function to close the new window 
            function closeWin() {
                my_window.close();
            }
            // adding a timer to do the above function after a few sec.
            var timerId = setTimeout(closeWin, 3000);
        });


        // creating a new table data for iamge
        var newTableData1 = document.createElement('td');
        newTableData1.appendChild(newImg);

        //adding the table data to the new table row
        newTableRow.appendChild(newTableData1);


        //second column for caption
        //creating caption 
        var newCap = document.createElement('p');
        var capText = document.createTextNode(descriptionArray[i]);
        newCap.appendChild(capText);
        newCap.style.fontSize = '16px';
        newCap.style.color = 'white';
        newCap.style.fontWeight = 'bold';

        // creating a new table data for caption    
        var newTableData2 = document.createElement('td');
        newTableData2.appendChild(newCap);

        //adding the table data to the new table row
        newTableRow.appendChild(newTableData2);

        //adding the whole row to the new table
        newTable.appendChild(newTableRow);
    }

    //adding the new table to the body
    var tableContent = document.getElementsByClassName("tableContent")[0];
    tableContent.appendChild(newTable);

};


////////////////////////////////////////////////////////////////////////////*****************************************************************

//Scripts for the Register web page:
if (document.getElementById('FormBody')) {


    // Adding focus listener:
    var fsName = document.form.FirstName;
    var dsFsName = document.getElementById("descFsName");
    fsName.addEventListener("focus", function (event) {
        dsFsName.style.display = "block";
    });

    var mdName = document.form["middle-name"];
    var dsMdFName = document.getElementById("descMdName");
    mdName.addEventListener("focus", function (event) {
        dsFsName.style.display = "none";
        dsMdFName.style.display = "block";
    });

    var lsName = document.form.LastName;
    var dsLsFName = document.getElementById("descLsName");
    lsName.addEventListener("focus", function (event) {
        dsMdFName.style.display = "none";
        dsLsFName.style.display = "block";
    });

    lsName.addEventListener("blur", function (event) {
        dsLsFName.style.display = "none";
    });

    var address = document.form.address;
    var dsAddress = document.getElementById("descAddress");
    address.addEventListener("focus", function (event) {
        dsAddress.style.display = "block";
    });

    var postCode = document.form.postalCode;
    var dsPosCod = document.getElementById("descPostalCode");
    postCode.addEventListener("focus", function (event) {
        dsAddress.style.display = "none";
        dsPosCod.style.display = "block";
    });

    postCode.addEventListener("blur", function (event) {
        dsPosCod.style.display = "none";
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Error message
    var subButton = document.getElementById("SubmitButton");
    var erFsName = document.getElementById("errorFsName");
    var erLsName = document.getElementById("errorLsName");
    var erEmail = document.getElementById("errorEmail");
    var erPosCod = document.getElementById("errorPostCod");

    // mouseclick function for submit button to check if all required fields are filled and the postal code pattern is followed
    subButton.addEventListener("click", function (event) {

        //reset
        erFsName.style.display = 'none';
        erLsName.style.display = 'none';
        erEmail.style.display = 'none';
        erPosCod.style.display = 'none';

        var name = document.form.FirstName.value;
        var family = document.form.LastName.value;
        var email = document.form.email.value;
        var PoCo = document.form.postalCode.value;

        if (name && family && email && !PoCo) {

            //Adding confirmation prompt before submitting
            event.preventDefault();
            var submitConfirm = confirm("Do you confirm your information?");
            if (submitConfirm) {
                document.form.submit();
            }
        }
        //validattion to check if all required fields are filled and the postal code pattern is followed

        if (!name) {
            event.preventDefault();
            erFsName.style.display = "block";
        }

        if (!family) {
            event.preventDefault();
            erLsName.style.display = "block";
        }

        if (!email) {
            event.preventDefault();
            erEmail.style.display = "block";
        }

        //validattion to check if the postal code pattern is followed
        if (PoCo) {
            if (/^[A-Z]\d[A-Z] ?\d[A-Z]\d$/.test(PoCo)) {
                if (name && family && email) {
                    //Adding confirmation before submitting
                    event.preventDefault();
                    var submitConfirm = confirm("Do you confirm your information?");
                    if (submitConfirm) {
                        document.form.submit();
                    }
                }
            } else {
                event.preventDefault();
                erPosCod.style.display = "block";
            }
        }

    });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Adding confirmation prompt before resetting
    var resetButton = document.getElementById("ResetButton");

    resetButton.addEventListener("click", function (event) {
        event.preventDefault();
        var resetConfirm = confirm("Are you sure you want to reset?");
        if (resetConfirm) {
            document.form.reset();
        }
    });


}


////////////////////////////////////////////////////////////////////////////*****************************************************************

//Scripts for the Contact web page:
if (document.getElementById('contactBody')) {
    //Animation:
    var planeTimer = setInterval(planeFly, 5);

    var walkForwards = true;
    var walkBackwards = false;
    var walkDownwards = false;
    var walkUpwards = false;


    function planeFly() {

        if (plane.offsetLeft >= document.body.offsetWidth - plane.offsetWidth && plane.offsetTop <= 0) {
            walkForwards = false;
            walkBackwards = false;
            walkDownwards = true;
            walkUpwards = false;
        }

        if (plane.offsetTop >= document.body.offsetHeight - plane.offsetHeight && plane.offsetLeft >= document.body.offsetWidth - plane.offsetWidth) {
            walkForwards = false;
            walkBackwards = true;
            walkDownwards = false;
            walkUpwards = false;
        }

        if (plane.offsetLeft <= 0 && plane.offsetTop >= document.body.offsetHeight - plane.offsetHeight) {
            walkForwards = false;
            walkBackwards = false;
            walkDownwards = false;
            walkUpwards = true;
        }

        if (plane.offsetLeft <= 0 && plane.offsetTop <= 0) {
            walkForwards = true;
            walkBackwards = false;
            walkDownwards = false;
            walkUpwards = false;
        }

        if (walkForwards) {
            plane.style.transform = "scaleX(+1)";
            plane.style.left = plane.offsetLeft + 1 + "px";
        } else if (walkDownwards) {
            plane.style.transform = "rotate(-90deg)";
            plane.style.top = plane.offsetTop + 1 + "px";
        } else if (walkBackwards) {
            plane.style.transform = "scaleX(-1)";
            plane.style.left = plane.offsetLeft - 1 + "px";
        } else if (walkUpwards) {
            plane.style.transform = "rotate(+90deg)";
            plane.style.top = plane.offsetTop - 1 + "px";
        }
    }
}

window.onscroll = function () { myFunction() };

var headbar = document.getElementById("headbar");
var sticky = headbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        headbar.classList.add("sticky")
    } else {
        headbar.classList.remove("sticky");
    }
} //Sticky NavBar



function upload() {
    document.getElementById('d-upld').innerHTML =
        `<div class="wrapper">
            <section class="form signup">
                <form id="d-upld" action="#" enctype="multipart/form-data">
                    <header>Please fill in the details Carefully</header>
                    <div class="error-txt">Not all patients require oxygen support, please consult with the doctor about the urgency before you start your search. Maybe someone needs it more than you do.</div>
                    <div class="name-details">
                        <div class="field input">
                            <label for="area">Area of supply: </label>
                            <input type="text" name="Area" required>
                        </div>
                        <div class="field input">
                            <label for="name">Name of the supplier: </label>
                            <input type="text" name="Name">
                        </div>
                        <div class="field input">
                            <label for="contact">Contact number: </label>
                            <input type="number" name="Contact" required>
                        </div>
                    </div>
                    <div class="field button">
                        <input type="submit" value="Submit Info">
                    </div>
                </form>
            </section>
        </div>`;
    document.getElementById("alertbar").style.display = "none";
    document.getElementById("content").innerHTML = "";
} //Form for adding new data 




var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json');
xhr.onload = function () {
    const resObj = JSON.parse(this.responseText);
    renderHTML(resObj);
};
xhr.send();
var content = document.getElementById("content");
function renderHTML(data) {
    var htmlString = ``;
    var peopleString = ``;
    var b = 0;
    for (var i = 0; i < data.length; i++) {
        for (var a = 0; a < data[i].People.length; a++) {
            peopleString += `<p class="card-title"> Name: <strong>` + data[i].People[a].Name + `</strong>
            and Contact No. : <strong>` + data[i].People[a].Contact + `</strong></p>`;
        }
        htmlString +=
            `<div class="card">
                <div class="card-body">
                    <h4 class="card-title"> Area: ` + data[i].Area + `</h4><div class="fd" id="card-para` + i + `">` + peopleString +
            `</div><a href="#" id="chck` + i + `" class="btn btn-primary">Check Suppliers</a>
                </div>
            </div>`
                // var h = document.getElementById("chck" + i + "");
                // h.addEventListener("click", function () {
                //     document.getElementById("card-para" + i + "").style.display = "block";
                //     document.getElementById("chck" + i + "").style.display = "none";
                // });
                ``;
        peopleString = ``;
    }
    content.insertAdjacentHTML('beforeend', htmlString);
} //Fetching from data.JSON 
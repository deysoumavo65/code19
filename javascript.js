window.onscroll = function () { myFunction() };

var headbar = document.getElementById("headbar");
var sticky = headbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        headbar.classList.add("sticky")
    } else {
        headbar.classList.remove("sticky");
    }
}

document.getElementById("upld").onclick = function () {
    document.getElementById('d-upld').innerHTML = `<div class="wrapper">
        <section class="form signup">
            <form id="d-upld" action="#" enctype="multipart/form-data">
                <header>Please fill in the details Carefully</header>
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
}

var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json');

xhr.onload = function () {
    if (this.status === 200) {
        try {
            const resObj = JSON.parse(this.responseText);
            console.log(resObj.Area);
        } catch (e) {
            console.warn('There was an error in the JSON. Could not parse!');
        }
    } else {
        console.warn('Did not recieve 200 ok from response!');
    }
};

xhr.send();
function removeUn() {
    var myobj = document.getElementsByClassName("liner-scroll-points-container");
    myobj.remove();
}

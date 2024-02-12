

var studentDataArr =JSON.parse(localStorage.getItem("studentData"))|| [];
function submitFun1(e) {
    document.querySelector("#tbody").innerHTML = "";
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var usn = document.querySelector("#usn").value;
    var sec = document.querySelector("#sec").value;
    var phn = document.querySelector("#phn").value;
    var pphn = document.querySelector("#pphn").value;
    
    var studentObj = {
        name: name,
        usn: usn,
        sec: sec,
        phn: phn,
        pphn: pphn
    }

    studentDataArr.push(studentObj);
    localStorage.setItem("studentData", JSON.stringify(studentDataArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");

    displayFun(studentDataArr)
}

document.getElementById

function displayFun(studentDataArr) {

    var count = 1;
    studentDataArr.map(function (item) {
    
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = count++
        var td2 = document.createElement("td");
        td2.innerHTML = item.name;
        var td3 = document.createElement("td");
        td3.innerHTML = item.usn;
        var td4 = document.createElement("td");
        td4.innerHTML = item.sec;
        var td5 = document.createElement("td");
        td5.innerHTML = item.phn;
        
        var td6 = document.createElement("td");
        td6.innerHTML = item.pphn;

        var td7 = document.createElement("td");
        var btn = document.createElement("button");
        btn.innerHTML = "Delete";
        //btn.addEventListener("click", del());
        /*var btn2 = document.createElement("button");
        btn2.innerHTML = "A";
        btn2.addEventListener("click", function () {
            td6.innerHTML = "<button id='absent'>Absent</button>";
        
        });*/
        td7.classList.add("td7");
        td7.append(btn);

        tr.append(td1, td2, td3, td4, td5, td6, td7);

        document.querySelector("#tbody").append(tr);

    });


}
displayFun(studentDataArr);

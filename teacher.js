document = document.getElementById("form1").addEventListener("submit", submitFun1);

var teacherDataArr =JSON.parse(localStorage.getItem("teacherData"))|| [];
function submitFun1(e) {
    document.querySelector("#tbody").innerHTML = "";
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var sec = document.querySelector("#sec").value;
    var sub = document.querySelector("#sub").value;
   
    var teacherObj = {
        name: name,
        email: email,
        sec: sec,
        sub: sub
    }

    teacherDataArr.push(teacherObj);
    localStorage.setItem("teacherData", JSON.stringify(teacherDataArr));
    document.querySelector("#form1").reset();
    alert("teacher Added Successfully");

    displayFun(teacherDataArr)
}

function displayFun(teacherDataArr) {

    var count = 1;
    teacherDataArr.map(function (item) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = count++
        var td2 = document.createElement("td");
        td2.innerHTML = item.name;
        var td3 = document.createElement("td");
        td3.innerHTML = item.email;
        var td4 = document.createElement("td");
        td4.innerHTML = item.sec;
        var td5 = document.createElement("td");
        td5.innerHTML = item.sub;
        
        var td6 = document.createElement("td");
        var btn = document.createElement("button");
        btn.innerHTML = "Delete";
        /*
        
        btn.addEventListener("click", function () {
            
        });*/
        
        td6.classList.add("td6");
        td6.append(btn);

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("#tbody").append(tr);
    });
}
displayFun(teacherDataArr);
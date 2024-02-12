/*isme abhi bht kch krna h jo meko ni aa rha smjh krne*/ 


function displayFun(studentAttendanceArr) {

    var count = 1;
    studentAttendanceArr.map(function (item) {
    
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
        var btn1 = document.createElement("button");
        btn1.innerHTML = "P";
        btn1.addEventListener("click", function () {
            td5.innerHTML = "<button id='present'>Present</button>";
        
        });
        var btn2 = document.createElement("button");
        btn2.innerHTML = "A";
        btn2.addEventListener("click", function () {
            td5.innerHTML = "<button id='absent'>Absent</button>";
        
        });
        td5.classList.add("td5");
        td5.append(btn1,btn2);

        tr.append(td1, td2, td3, td4, td5);

        document.querySelector("#tbody").append(tr);

    });


}
displayFun(studentAttendanceArr);

/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(
        function f(data) {
            if (data.marks > 50) {
                console.log(data);
            }
        }
    )
}

function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(x => {
        if (x.marks > 50) {
            console.log(x);
        }
    })
}

function addData() {
    //Write your code here, just console.log
    let ele = {
        id: 4, name: "susan", age: "20", marks: 45
    };
    arr.push(ele);
    console.log(arr);
}

function removeFailedStudent() {
    //Write your code here, just console.log
    arr = arr.filter(x => x.marks < 50);
    console.log(arr);
}

function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [{
        id: 5, name: "akash", age: "23", marks: 63
    },
    {
        id: 6, name: "ashu", age: "24", marks: 64
    },
    {
        id: 7, name: "ayush", age: "25", marks: 65
    },];
    console.log(arr.concat(arr2));
}


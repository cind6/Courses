"use strict";

const coursetablecard = document.getElementById("tablecard");
const coursetablebody = document.getElementById("coursetablebody");

window.onload = function () {

    getAllCoursesFromAPI();

   

}

function getAllCoursesFromAPI() {

    let theUrl = "http://localhost:8081/api/courses";
    fetch(theUrl)
        .then(response => response.json())
        .then(data => {
            let coursesArray = data;
            console.log(data); // all courses, array of objects
            populateCourseTable(coursesArray);
        })
}
function populateCourseTable(coursesArray) {

    for (let course of coursesArray) {
        let newRow = coursetablebody.insertRow(-1);
        let idCell = newRow.insertCell(0);
        idCell.innerHTML = course.id;

        let deptCell = newRow.insertCell(1);
        deptCell.innerHTML = course.dept;

        let courseNumCell = newRow.insertCell(2);
        courseNumCell.innerHTML = course.courseNum;

        let courseNameCell = newRow.insertCell(3);
        let anchor = document.createElement("a");
        anchor.href = `details.html?courseid=${course.id}`;
         anchor.text = course.courseName;
         courseNameCell.appendChild(anchor);


    }
    console.log('All courses are in the table');

}



"use strict";

const coursetablecard = document.getElementById("tablecard");
const coursedetailsbody = document.getElementById("coursedetailsbody");

window.onload = function () {
    console.log("window load");

    urlParamsFunction();

}

function urlParamsFunction(){
    
   let urlParams = new URLSearchParams(location.search);
    console.log(urlParams);

    let id = -1;
    if (urlParams.has("courseid") === true) {

        id = urlParams.get("courseid")
        console.log(id);

        let courseIdUrl ="http://localhost:8081/api/courses/" + id;
        fetch(courseIdUrl)
        .then((response) => response.json())
        .then(course => {
            console.log(course);
            showDetailforCourse(course);
            
        })
    } 
    else{
        document.getElementById("error").innerHTML = "Oh no! there's no querystring... you should get to this page through a hyperlink."
    }
}


function showDetailforCourse(course){
    // fill in html elements to describe the course that was passed in.
    // This is where the detailed course information will display into the table card


 let newRow = coursedetailsbody.insertRow(-1);
        
       

        
        let courseNameCell = newRow.insertCell(0);
        courseNameCell.innerHTML = course.courseName;

       let instructorCell = newRow.insertCell(1);
        instructorCell.innerHTML = course.instructor;  

          let startDateCell = newRow.insertCell(2);
        startDateCell.innerHTML = course.startDate;
    
        let numDaysCell = newRow.insertCell(3);
        numDaysCell.innerHTML = course.numDays;
    
      
    
      }
      console.log('Course details are in the table');




    
       

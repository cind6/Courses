"use strict";

const coursetablecard = document.getElementById("tablecard");
const coursedetailsbody = document.getElementById("coursedetailsbody");

window.onload = function () {
    console.log("window load");

    urlParamsFunction();

}

function urlParamsFunction(){
    
   let urlParams = new URLSearchParams(location.search);// // location.search is the way you access
   // // the query string portion of the URL
    console.log(urlParams);

    let id = -1;
    if (urlParams.has("courseid") === true) {
        document.getElementById("error").innerHTML = "";
        id = urlParams.get("courseid")
        console.log(id);

        let courseIdUrl ="http://localhost:8081/api/courses/" + id;
        fetch(courseIdUrl)
        .then((response) => response.json())
        .then(course => {
            console.log(course);
            showDetailforCourse(course);
            
        });
    } 
    else{
        document.getElementById("error").innerHTML = "Oh no! there's no querystring... you should get to this page through a hyperlink."
    }
}


function showDetailforCourse(course){
    // fill in html elements to describe the course that was passed in.
    // This is where the detailed course information will display into the table card
    

    let divCol = document.createElement("div");
    divCol.className = "col col-md-6 mx-auto mt-3";
    coursedetailsbody.appendChild(divCol);

    let divCard = document.createElement("div");
    divCard.className = "card";
    divCol.appendChild(divCard);

  
    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    divCard.appendChild(divCardBody);

    let h5Name = document.createElement("h5");
    h5Name.className = "card-title" ;
    h5Name.innerHTML = course.courseName;
    divCardBody.appendChild(h5Name);

    let courseDetails = document.createElement("ul");
    divCardBody.appendChild(courseDetails);

    let instructor = document.createElement("li");
    instructor.className = "instrustor";
    instructor.innerHTML = "instructor: " + course.instructor;
    courseDetails.appendChild(instructor);

    let courseStartDate = document.createElement("li");
    courseStartDate.className = "startDate";
    courseStartDate.innerHTML = "Start Date " + course.startDate;
    instructor.appendChild(courseStartDate);

    let numDays = document.createElement("li");
    numDays.className = "umDays";
    numDays.innerHTML = "Num Days: " + course.numDays;
    courseStartDate.appendChild(numDays);




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




    
       

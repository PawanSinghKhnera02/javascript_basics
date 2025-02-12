//======================== Object Destructuring =======================

const course = {
    courseName: "javascript",
    price: 200,
    courseInstructor: "Pawan",
}

console.log(course.courseInstructor)  // = > it is also valid

const{courseInstructor : instructor} = course;  // destructuring syntax
console.log(instructor)
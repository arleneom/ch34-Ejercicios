//ejercicio 4- filter() e includes() --------------------------------------------
//Create a program that loops over the 2 arrays; 
//if there are any common courses print them out to the console.

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function compareLists(list1, list2) {
  return list1.filter((word) => list2.includes(word));
}


const commonCourses = compareLists(student1Courses, student2Courses);

console.log(`Common courses:  ${commonCourses}.`);
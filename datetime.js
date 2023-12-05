//  Joshua Gregory
//  Professor Montgomery
//  Internet Programming
//  Midterm Exam JS File
//  8 Oct. 2023

// dynamic 'last modified' datetime function
let dynaDT = function() {
  //  init a new Date() obj
  const currDT = new Date(document.lastModified);
  //  search DOM for id where data goes, set to updated data
  document.getElementById("mod-dt").innerHTML = currDT;  
};
dynaDT();  // execute function after body loads
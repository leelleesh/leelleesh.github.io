async function getData(selected_major) {
    var response = await fetch('cit5students.json');   // this is a GET request

    if(response.ok) {
        var data = await response.json();

        // filter data array for the selected meal
        majors = data.filter( (item) => item.major == selected_major );  

       var templateText = document.getElementById('majorTable').innerHTML;
       var compiledTemplateText = Handlebars.compile(templateText);   // get and compile template code
       compiledHtml = compiledTemplateText({ rows: majors })      // apply data to template
       document.getElementById('majorTable').innerHTML = compiledHtml; 
    }
    else {
       document.querySelector('#majorTable').innerHTML = "There was an error";
    }	
 
}
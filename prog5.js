    async function getData(selected_major) {
        var response = await fetch('cit5students.json');   // this is an ajax GET request

        if(response.ok) {
            var data = await response.json();

           major_items = data.filter( (item) => item.major == selected_major );    // filter data array for selected meal items 
                
           var templateText = document.getElementById('tableTemplate').innerHTML;
           var compiledTemplateText = Handlebars.compile(templateText);   // get and compile template code
           compiledHtml = compiledTemplateText({ rows: major_items })      // apply data to template
           document.getElementById('result').innerHTML = compiledHtml; 
       }
       else {
           document.querySelector('result').innerHTML = "There was an error, or menu items not found";
       }	
 
  }

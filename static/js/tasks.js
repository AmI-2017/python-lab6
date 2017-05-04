/**
 * Created by 7217238 on 04/05/2017.
 */
$(document).ready(function(){
    load_tasks() ;
}) ;


// Load from the server all the current tasks
// and fill the table id="task-list"
function load_tasks() {

    $.getJSON("/api/v1.0/tasks", function(data, textStatus, jqXHR){

        // console.log(data) ;

        // populate the table with the data
        for( var i = 0 ; i< data['tasks'].length; i++ ) {
            var task = data['tasks'][i] ;
            $("table#task-list tbody").append(
                "<tr><td>"+task['description']+
                "</td><td>"+task['urgent']+"</td></tr>") ;
        }

    }) ;

}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// getAppointments function
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function getAppointments(){
    $('#search_button').click(function(){
        var search_input = $('#search_input').val().trim();
        // var search_input = $('#search_input').attr('value');
        
        console.log(search_input);
        
        if(search_input == ''){
            $('#stage').load('/cgi-bin/view_table.cgi');
            alert("FALSE: nothing submitted: " + search_input);
        } else {
            $.ajax({
                type: "POST",
                // cache: false,
                // async: true,
                url: '/cgi-bin/json_data_test_4.cgi',
                // contentType: "application/json; charset=utf-8",
                // dataType: "json",
                // data: "search_input=" + search_input,
                data: { 'search_input': search_input },
                
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("error in data!");
                },
                success: function(data){
                    if(data.error){
                        alert("error in success!");
                    } else {
                        

                        // alert(JSON.stringify(resp));
                        console.log(JSON.stringify(data));
                        
                        console.log("Yay! it works " + data);
                        
                        // alert("Sucessful " + data.success + " Date: " + data.DATE + " Time: " + data.TIME + " Description " + data.DESC + " Search: " + search_input);
                        console.log(search_input);
                    }
                    
                }
            });

            alert("TRUE: string submitted: " + search_input);
        }
        alert("end of search button clicked: add .fadeIn() ");
        return false;
    });
}






// function getAppointments(){
//     $('#search_button').click(function(){
//         var search_input = $('#search_input').val().trim();
//         if(search_input == ''){
//             alert("FALSE: nothing submitted: " + search_input);
//         } else {
//             $.ajax({
//                 type: "GET",
//                 url: "/cgi-bin/json_data_test_1.pl",
//                 contentType: "application/json; charset=utf-8",
//                 dataType: "json",
//                 data: "search_input=" + search_input,
//                 error: function(XMLHttpRequest, textStatus, errorThrown) {
//                     alert("error in data!");
//                 },
//                 success: function(data){
//                     if(data.error){
//                         alert("error in success!");
//                     } else {
//                         alert("Yay! sucessful! success" + data.success + " userid: xxx insert later");
//                     }
//                 }
//             });

//             alert("TRUE: string submitted: " + search_input);
//         }
//         alert("end of search button clicked: add .fadeIn() ");
//         return false;
//     });
// }






// function getAppointments(){
//     $search_btn.click(function(){
//         var $search_in = $search_input_id.val();
//         if($search_in) {
//             // if false, print all data from the database into html table
//             $.ajax({
//                 type: "GET",
//                 url: "/cgi-bin/data_ajax_json.pl",
//                 data: {'searchType': jsArrayJson},
//                 success: function(res){
//                     alert(res);
//                 },
//                 error: function(){
//                     alert("Unsuccesful ouch!");
//                 }
//             });
            // else if true compare search input string with string.split in database
//         } else {
//             pass;
//         }
        
        
//     });
//   }
// For cross-browser compatibility jquery-ui's datepicker is recommended because internet explorer doesn't show date for type="date"

// this is the recomended jquery v3+ .ready() function. Other types are deprecated. Source: https://api.jquery.com/ready/
$(function(){
    $("h6").text("DOM can now be manipulated");
    var $new_btn = $('#new_button');
    var $add_btn = $('#add_button');
    var $cancel_btn = $('#cancel_button');
    var $hidden_form = $('#hidden_form');
    // --------------------------------------------
    // hide and show "NEW" "ADD" "CANCEL" buttons
    // --------------------------------------------
    $new_btn.click(function(){
        $new_btn.toggle();
        $add_btn.toggleClass("display_none");
        $cancel_btn.toggleClass("display_none");
        $hidden_form.toggleClass("display_none");
    });
    $cancel_btn.click(function(){
        $new_btn.toggle();
        $add_btn.toggleClass("display_none");
        $cancel_btn.toggleClass("display_none");
        $hidden_form.toggleClass("display_none");
    });
    // ---------------------------------------------------------------------------
    // Trigger submit form from outside the form
    // Couldn't use 'form' attribute because it is not supported in Internet Explorer
    // ----------------------------------------------------------------------
    $add_btn.click(function(){
        $hidden_form.trigger('submit');
    });

    // -----------------------------------------
    // date validation
    // -----------------------------------------
    $("#date_id").datepicker({
        minDate: 0,
        dateFormat: "M d"
    });
    // ---------
    // timepicker
    // ----------
    $('#time_id').timepicker();
    
    // -------------------------------------------
    // time picker
    // -----------------------------------
    
    // --------------------------------------------
    // search btn click
    // --------------------------------------------
    getAppointments();
});
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// getAppointments function
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function getAppointments(){
    $('#search_button').click(function(){
        var search_input = $('#search_input').val().trim();
        // var search_input = $('#search_input').attr('value');
        var tr;
        
        $('#table_search').addClass('display_none');
        $('#table_all').addClass('display_none');
        console.log(search_input);
        
        if(search_input == ''){
            $('#table_all').removeClass('display_none');
            // $('#table_dynamic').addRemove('display_block');
            $('#table_all').load('/cgi-bin/view_table.cgi');
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
                        var myTable= "<table border='1' width='800'>";
                        myTable+= "<tr><td>DATE</td>";
                        myTable+= "<td>TIME</td>";
                        myTable+="<td>DESCRIPTION</td></tr>";

                        myTable+="<tr><td></td>";
                        myTable+="<td></td>";
                        myTable+="<td></td></tr>";
                        
                        $('#table_search').removeClass('display_none');
                        
                        for(var i=0; i < JSON.stringify(data.length); i++){
                            myTable+="<tr>";
                            myTable+="<td>" + JSON.stringify(data[i].DATE).replace(/^"(.*)"$/, '$1') + "</td>";
                            myTable+="<td>" + JSON.stringify(data[i].TIME).replace(/^"(.*)"$/, '$1') + "</td>";
                            myTable+="<td>" + JSON.stringify(data[i].DESC).replace(/^"(.*)"$/, '$1') + "</td></tr>";
                        }
                        myTable+="</table>";
                        document.getElementById('table_search').innerHTML = myTable;
                        // document.body.appendChild('table_search').innerHTML = myTable;
                        
                        
                        
                        // $('#table_search').addClass('display_none');
                        

                        // $('.empty').empty();
                        // tr.append();
                        // $('#table_dynamic').append();
                        // $('#table_dynamic').removeClass('display_block');
                        // $('#table_dynamic').addClass('display_none');
                        
                       
                        var lengthx = JSON.stringify(data.length);
                        
                      
                        
                        // alert("Sucessful " + data.success + " Date: " + data.DATE + " Time: " + data.TIME + " Description " + data.DESC + " Search: " + search_input);
                        console.log(lengthx);
                    }
                    
                }
            });

            // alert("TRUE: string submitted: " + search_input);
        }
        // alert("end of search button clicked: add .fadeIn() ");
        return false;
    });
}

// For cross-browser compatibility jquery-ui's datepicker is recommended because internet explorer doesn't show date for type="date"

// this is the recomended jquery v3+ .ready() function. Other types are deprecated. Source: https://api.jquery.com/ready/
$(function(){
    $("#dom_info").text("DOM Active! Continue");
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
        $('#error_msg').empty();
        $('#data_submitted').empty();
    });
    // ---------------------------------------------------------------------------
    // Trigger submit form from outside the form
    // Check if there is an error in the form before submission
    // Couldn't use 'form' attribute because it is not supported in Internet Explorer
    // ----------------------------------------------------------------------
    $add_btn.click(function(){
        date_trim = $("#date_id").val().trim();
        time_trim = $("#time_id").val().trim();
        desc_trim = $("#description_id").val().trim()

        if((date_trim == '') || (time_trim == '') || (desc_trim == '')){
            $('#error_msg').text("Error! all fields are required");
            console.log("error! true");
            console.log("date_trim: " + date_trim + " time_trim " + time_trim + " description" + desc_trim);
            
            
        } else{
            
            // $('#error_msg').empty();
            
            // console.log("not an error! false");
            // console.log("date_trim: " + date_trim + " time_trim " + time_trim + " description" + desc_trim);
            
            $.ajax({
                url:'/cgi-bin/insert_data.cgi',
                type:'post',
                data:$('#hidden_form').serialize(),
                success:function(){
                    // $hidden_form.trigger('submit');
                    console.log("worked");
                    
                }
            });
            $('#data_submitted').load('/cgi-bin/insert_data.cgi');
        }
        
    });
    $('#delete_id_data').click(function(){
        $('#show_del_data').load('/cgi-bin/delete_table.cgi');
    })
    $('#show_del_data').load('/cgi-bin/delete_table.cgi');

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

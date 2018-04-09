# Schedule Web Application
Test answered: Oluwasemire Ayotunji Olaniyi for Apex systems.

Initial Commit: The webpage is functional. Back-end and database are working fine

Installation (Windows): 
1. Download and Install Xampp: https://www.apachefriends.org/download.html
2. Download and Install mysqlite: https://www.sqlite.org/download.html
3. Copy index.html, css and js directories to htdocs in Xampp directory: C:\xampp\htdocs
4. Copy cgi, perl scripts and mysqlite database(s) to cgi-bin directory: C:\xampp\cgi-bin
5. Open installed Xampp (as admin is recommended).
6. Start Apache
7. type localhost on your browser
8. Voila!

Future Updates: Add CSS layout to make the front-end look good.

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

APEX SYSTEMS FULL STACK PERL DEVELOPER CODE TEST
Last revised 7/13/2017

REQUIRED TECHNOLOGIES : 

PERL
JSON
SQLite
JQUERY
HTML

THIS ASSIGNEMENT IS TO BE COMPLETED FOR APEX SYSTEMS, PLEASE DO NOT INCLUDE
REFERENCE TO ANY OTHER COMPANIES IN YOUR CODE.

PROJECT REQUIREMENTS : 

This application will be tested in an Apache environment using CGI.

This will be a very simple web application which handles appointments.
The appointments will be stored in a SQLite database with at least 1 table. 
We recommend that one of the tables contains 2 columns:
	(1) a datetime column which records the appointment's time and 
	(2) a description column.
The SQL to create your database MUST be included, and SQLite DB files with the
assignee's test data are encouraged to be included.

The back-end will be a PERL CGI script(s) which handles requests from the
browser. The homepage's HTML does not need to be generated with Perl, an HTML
file can be used.

The frontend is a single web page which displays a "NEW" button, an
empty text field with a "SEARCH" button and the bottom of the page will
be an (initially empty) area for displaying the appointments in a table.

	=============================================
	=  <error messages div will be here>
	=  +---+
	=  |NEW|
	=  +---+
	=  
	=  +-------------------+  +------+
	=  |                   |  |SEARCH|
	=  +-------------------+  +------+
	=
	=  <appointments table will be here>
	=============================================

The appointments area is initially empty. The document's jQuery DOM
ready function will contain a call to a Javascript
getAppointments() function.

The Javascript getAppointments() function populates the appointments area
(the DOM above). getAppointments() will accept an optional search string.
getAppointments() issues an AJAX 'getAppointments' call to the back-end PERL CGI
script, passing the optional search string. The back-end will reply with a JSON
document containing the matching appointments, and the front-end will use the
resulting JSON object to render the data into the HTML <table> element. The
resulting HTML is inserted into the DOM so that the <table> appears below the
search box.

	==============================================
	=  
	=  +---+
	=  |NEW|
	=  +---+
	=  
	=  +-------------------+  +------+
	=  |                   |  |SEARCH|
	=  +-------------------+  +------+
	=  
	=  +-------+---------+----------------+
	=  | DATE  | TIME    | DESCRIPTION    |
	=  +-------+---------+----------------+
	=  | May 2 | 11:00am | Something      |
	=  | May 2 | 12:00pm | Something else |
	=  | May 4 |  8:00am | Meet foo       |
	=  +-------+---------+----------------+
	=  
	==============================================

If the user enters text into the search text box and hits the SEARCH
button, the appointments area should clear and getAppointments() should
be called with text from the search box.  If the search text box is empty
when the SEARCH button is clicked, then ALL of the appointments should appear.
This should dynamically refresh the Table DOM, and not refresh the entire page.

	==============================================
	=  
	=  +---+
	=  |NEW|
	=  +---+
	=  
	=  +-------------------+  +------+
	=  | Something         |  |SEARCH|
	=  +-------------------+  +------+
	=  
	=  +-------+---------+----------------+
	=  | DATE  | TIME    | DESCRIPTION    |
	=  +-------+---------+----------------+
	=  | May 2 | 11:00am | Something      |
	=  | May 2 | 12:00pm | Something else |
	=  +-------+---------+----------------+
	=  <notice only the rows containing "Something" appear>
	==============================================

The page should also contain a hidden form which contains fields for
adding a new appointment to the database.  Pressing the "NEW" button
changes the "NEW" button to "ADD" and shows the hidden form.

The hidden form should include a "CANCEL" button.  If the "CANCEL" button is
pressed, the form is hidden and the "ADD" button becomes "NEW" again.

	==============================================
	=  
	=  +---+ +------+
	=  |ADD| |CANCEL|
	=  +---+ +------+
	=  
	=       +--------------------+
	=  DATE |                    |
	=       +--------------------+
	=       +--------------------+
	=  TIME |                    |
	=       +--------------------+
	=       +--------------------+
	=  DESC |                    |
	=       +--------------------+ 
	=  
	=  +-------------------+  +------+
	=  |                   |  |SEARCH|
	=  +-------------------+  +------+
	=  
	=  +-------+---------+----------------+
	=  | DATE  | TIME    | DESCRIPTION    |
	=  +-------+---------+----------------+
	=  | May 2 | 11:00am | Something      |
	=  | May 2 | 12:00pm | Something else |
	=  | May 4 |  8:00am | Meet foo       |
	=  +-------+---------+----------------+
	=  
	==============================================

The DATE input should contain a date picker with built in validation.
(Appointments shouldn't be made in the past).

When data is entered into the form and the "ADD" button is pressed, the
form should be validated, and then submitted to the back-end. Validation should
check for missing data and an invalid date/time. Submitting the form may reload
the entire web page.  (In other words, the form can be submitted using normal
HTML form semantics.  You don't need to submit the form as an AJAX call.)


EXPECTATIONS : 

Put in a good effort to complete the requirements above.  Even if you do not
finish the full project, please turn in everything you have, and all files so we
can look over all of the files.

Finished assignments are to be posted to GitHub on the assignee's account, and
the assignee's recruiter should be notified. Please provide adequate
documentation on how to install and run the application.
AT&T Perl Coding Assessment.txt
Displaying AT&T Perl Coding Assessment.txt.

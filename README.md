# Apex-Systems-Test

New Message from Maggie Walsh  Show  IgnoreNew Message from Maggie Walsh  Show  Ignore

Skip to content
Using Gmail with screen readers
is:starred 
Click here to enable desktop notifications for Gmail.   Learn more  Hide

Move to Inbox More 
2 of 106
 
AT&T Coding Assessment 
Inbox
x 

Maggie Walsh
AttachmentsApr 4 (5 days ago)
to me 
Hey Olu!

You did a great job on your technical screening and we will be moving on to the next step of the interview process. Please complete the attached coding assessment. This assessment needs to be completed in Perl.

 

Coding Assignment: This is basically just a way to “show off your skills”.  The top three things they are going to be assessing:

1)      Did you follow directions – use ALL the technologies required (back end needs to be completed in Perl), I know you have not touched Perl, but it must be done in Perl. They want to see how you take the concepts of what you know in other languages and apply it.

2)      Is it functional – make sure you test it and make sure it is functional

3)      How much effort did you put into it? Make it look good!  Show off your skills

 

*Do not use AT&T ATT APEX anywhere in the title

*You will be required to setup a Github account if you do not already have one. Load your files there and then you can submit the link when it is completed (Zip Files/Flash Drives/Google Drive/Drop Box are not supported)

 

Take your time on the assessment and let me know if you have any questions along the way.

 

Best Regards,

 

Maggie Walsh | Technical Recruiter | Apex Systems

5430 Wade Park Blvd. Ste 302, Raleigh, North Carolina 27607

Office: 919-836-1234  Email: mpwalsh@apexsystems.com

TwitterLinkedIn Facebook-25x25-for-email  Instagram-25x25-for-email 

► Join our Talent Network

► Learn more about Apex’s 20 years of service, what we’ve accomplished and what’s ahead in our Year in Review

► Visit our NEW website!

 

This e-mail communication (including any attachments) may contain confidential information intended solely for the use of the intended recipient. If you are not the intended recipient, you should immediately stop reading this message and delete it from your system. Any unauthorized reading, distribution, copying or other use of this communication (or its attachments) is strictly prohibited.
2 Attachments
	
Click here to Reply or Forward
11.6 GB (77%) of 15 GB used
Manage
Terms - Privacy
Last account activity: 11 minutes ago
Details
CALENDAR


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

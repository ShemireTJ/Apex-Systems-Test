#!c:/xampp/perl/bin/perl.exe
# c:/perl64/bin/perl.exe
# print "Content-type: html; charset-iso-8859-1\n\n";

# print "Received the data!!";
use strict;
use warnings;

use CGI qw(:standard);
use CGI::Carp qw(fatalsToBrowser);
use DBI;
print "Content-type: text/html\n\n";

# ---------database here
my $DBI;
my $driver = "SQLite";
my $database = "test_create_table.db";
my $dsn = "DBI:$driver:dbname=$database";
my $userid = "";
my $password = "";
my $dbh =DBI->connect($dsn, $userid, $password, { RaiseError => 1}) or die $DBI::errstr;
my $table_name = "CREATED_TABLE_2";
# ------------------------
# get data that you want to UPDATE from html form
# ------------------------

my $date_name = param('date_input');
my $time_name = param('time_input');
my $description_name = param('description_input');
my $search_input = param('search');
# Optional parameter for UPDATEing and DELETEing table rows
my $id_num = param('id_number');

# --------------------------------------------
# update table inside database
# ------------------------------------
my $stmt = qq(DELETE from $table_name where ID="$id_num";);
my $rv = $dbh->do($stmt) or die $DBI::errstr;


if($rv < 0) {
	print $DBI::errstr;
} else {
	print "Total number of rows deleted : $rv\n";
}

# --------------------------------------------
# Print the table after DELETE: code below is the same thing as view_table.cgi code
# -----------------------------------------
my $stmt = qq(SELECT id, date, time, desc from $table_name;);
my $sth = $dbh->prepare( $stmt );
my $rv = $sth->execute() or die $DBI::errstr;

if($rv < 0) {
  print $DBI::errstr;
}

# -----------------------------------------------+
# 												 |
# Table Starts here								 |
# 												 |
# -----------------------------------------------+

print "<table border=\"1\" width=\"800\"> <br>";
print "<tr><td>ID</td><td>DATE</td><td>TIME</td><td>DESC</td></tr><br>";
while(my @row = $sth->fetchrow_array()) {
my $id = $row[0];
my $date = $row[1];
my $time = $row[2];
my $desc =  $row[3];

print "<tr><td>$id</td><td>$date</td><td>$time</td><td>$desc</td></tr><br>";	  
}

print "</table><br>";
# exit; 
# print "$table_name: Operation done successfully<br>";
$dbh->disconnect();

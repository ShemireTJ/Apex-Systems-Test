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

print "$database is opened <br>";
# --------------------------------------------


# ------------------------
# get data from html form
# ------------------------

my $date_name = param('date_input');
my $time_name = param('time_input');
my $description_name = param('description_input');
my $search_input = param('search');

# ----------------------------
# add data to database from html
# ------------------------------
my $stmt = qq(INSERT INTO $table_name (DATE,TIME,DESC)
            VALUES ('$date_name', '$time_name', '$description_name'));
my $rv = $dbh->do($stmt) or die $DBI::errstr;

print "<h1>Inserted:</h1>";
print "Date: $date_name <br> Time: $time_name <br> Description: $description_name <br>";
print "Inserted in $table_name Table successfully<br>";

$dbh->disconnect();

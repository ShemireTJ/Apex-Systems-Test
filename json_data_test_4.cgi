#!c:/xampp/perl/bin/perl.exe

# c:/perl64/bin/perl.exe -w


# print "Received the data!!";
use strict;
use warnings;

# use CGI qw(:standard);
# use CGI::Carp qw(fatalsToBrowser);
use DBI;

# use DBD::sqlite;
use JSON;
use CGI;


# print "Content-type: text/html\n\n";

# ---------------------------
# Open SQLite database
# -----------------------------
my $DBI;
my $driver = "SQLite";
my $database = "test_create_table.db";
my $dsn = "DBI:$driver:dbname=$database";
my $userid = "";
my $password = "";
my $dbh = DBI->connect($dsn, $userid, $password, { RaiseError => 1}) or die $DBI::errstr;
my $table_name = "CREATED_TABLE_2";
my $cgi = CGI->new;
# my $search_input = $cgi->param("search_input");

# my @search_input = @{decode_json($cgi->param('search_input'))};
# my $search_input = param('search_input_name');

# print "Content-type: application/json; charset-iso-8859-1\n\n";
# print "Content-type: application/json\n\n";
# print $cgi->header(-type => "application/json", -charset => "utf-8");
# print header('application/json');
# print "$database is opened <br>";
print $cgi->header('application/json;charset=UTF-8');
my $search_input = $cgi->param('search_input'); 
# my $search_input = param('search_input');
# --------------------------------------------
# check the search_input in the database
# -----------------------------------------
my $stmt = qq(SELECT id, date, time, desc from $table_name where desc=?;);
my $sth = $dbh->prepare( $stmt );
my $rv = $sth->execute("$search_input") or die $DBI::errstr;
# print "search input? " + $search_input + "<br>";
if($rv < 0) {
  print $DBI::errstr;
}
my @sth_output;
while(my $row = $sth->fetchrow_hashref){
# while(my $row = $sth->fetchrow_array()){
push @sth_output, $row;
}

$dbh->disconnect();
# print JSON::to_json({data=> \@sth_output});
print JSON::to_json(\@sth_output);

# my $op = JSON -> new -> utf8 -> pretty(1);
# my $json = $op -> encode({
# 	result => @sth_output
# });
# print $json;


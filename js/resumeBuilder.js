var formattedName = "Toni Julia   ";
var formattedRole = "  Web Developer";
HTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
HTMLheaderRole = HTMLheaderRole.replace("%data%" , formattedRole);
$("#header").prepend(HTMLheaderRole);
$("#header").prepend(HTMLheaderName);
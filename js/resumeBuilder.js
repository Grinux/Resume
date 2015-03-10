var formattedName = "Toni Julia   ";
var formattedRole = "  Web Developer";
var skills = ['JavaScript ',' Jquery',' MongoDB',' Python ',' Unix'];
var contactInfo = {"email" : 'grindersan@gmail.com',
                   "phone" : '637 100 879',
                   "blog" : 'wwww.tonijuliamuntaner.com',
                   "twitter" : 'Notengo',
                   "location" : 'Palma de Mallorca Spain',
                   "github" : 'github.com/Grinux/'
                   }
var myBio = {

			"name" : 'Toni Julia',
			"role" : 'Web Developer',
			"contactInfo" : contactInfo ,
			"photo" : 'images/fry.jpg',
			"welcome" : 'Welcome to my Resume',
			"skills" : skills 
            }

HTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
HTMLheaderRole = HTMLheaderRole.replace("%data%" , formattedRole);
//HTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%" , 'contact');
//HTMLcontactGeneric = HTMLcontactGeneric.replace("%data%" , myBio.name);
formatMobile = HTMLmobile.replace("%data%", contactInfo.phone);
formatEmail = HTMLemail.replace("%data%", contactInfo.email);
formatTwitter = HTMLtwitter.replace("%data%" , contactInfo.twitter);
formatGithub = HTMLgithub.replace("%data%" , contactInfo.github);
formatBlog = HTMLblog.replace("%data%" , contactInfo.blog );
formatBioPic = HTMLbioPic.replace("%data%" , myBio.photo);
formatWelcomeMsg = HTMLWelcomeMsg.replace("%data%" , myBio.welcome);
formatSkills = HTMLskills.replace("%data%" , myBio.skills);


$("#header").prepend(HTMLheaderRole);
$("#header").prepend(HTMLheaderName);
//$("#topContacts").apppend(HTMLcontactGeneric);

$("#topContacts").append(formatEmail);
$("#topContacts").append(formatMobile);
$("#topContacts").append(formatTwitter);
$("#topContacts").append(formatGithub);
$("#topContacts").append(formatBlog);
$("#header").append(formatBioPic);
$("#header").append(formatWelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#skills").append(formatSkills);
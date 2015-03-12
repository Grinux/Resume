var formattedName = "Toni Julia   ";
var formattedRole = "  Web Developer";

var myBio = {
          "name" : 'Toni Julia',
        	"role" : 'Web Developer',
        	"photo" : 'images/fry.jpg',
        	"welcomeMessage" : 'Welcome to my Resume',
        	"skills" : ['JavaScript ',' Jquery',' MongoDB',' Python ',' Unix'] ,

          "contactInfo" : {
                  "email" : 'grindersan@gmail.com',
                  "phone" : '637 100 879',
                  "blog" : 'wwww.tonijuliamuntaner.com',
                  "twitter" : 'Notengo',
                  "location" : 'Palma de Mallorca Spain',
                  "github" : 'github.com/Grinux/'       
          }
};

var education = {
    "schools": [
        {
            "name": "Fleming",
            "city": "Palma",
            "degree": "Acceso UIB",
            "major": "Math",
            "url": "www.fleming.com"
        },
        {
            "name": "UIB",
            "city": "Palma",
            "degree": "Master",
            "major": "CompSci",
            "url": "www.UIB.com"
        }
    ]
};

var work = {
  "jobs" : [
      {
        "employer" : "Keeley" ,
        "title" : "Cooker" ,
        "location": "Formentor" ,
        "dates": "2010-2012",
        "description": "House cooker for Keeleys family"
      },
      {
        "employer" : "Rustica" ,
        "title" : "chef" ,
        "location": "Paguera" ,
        "dates": "2012-2015",
        "description": "Chef in international restaurant"
      }
  ]
};
//Json parse??????????

var projects = {
           "projects": [
                      {
                        "title":"Araweb",
                        "dates":"2010",
                        "description":"Web Programacion",
                        "images" : ["www.Araweb.com/img1","www.Araweb.com/img2","www.Araweb.com/img3","www.Araweb.com/img4"]
                      },
                      {
                        "title":"Toni Julia",
                        "dates":"2010",
                        "description":"Web Autonomo",
                        "images" : ["www.tonijulia.com/img1","www.tonijulia.com/img2","www.tonijulia.com/img3","www.tonijulia.com/img4"]
                      }

           ]

};

HTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
HTMLheaderRole = HTMLheaderRole.replace("%data%" , formattedRole);
//HTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%" , 'contact');
//HTMLcontactGeneric = HTMLcontactGeneric.replace("%data%" , myBio.name);

formatMobile = HTMLmobile.replace("%data%", myBio.contactInfo.phone);
formatEmail = HTMLemail.replace("%data%", myBio.contactInfo.email);
formatTwitter = HTMLtwitter.replace("%data%" , myBio.contactInfo.twitter);
formatGithub = HTMLgithub.replace("%data%" , myBio.contactInfo.github);
formatBlog = HTMLblog.replace("%data%" , myBio.contactInfo.blog );
formatBioPic = HTMLbioPic.replace("%data%" , myBio.photo);
formatWelcomeMsg = HTMLWelcomeMsg.replace("%data%" , myBio.welcomeMessage);
formatSkills = HTMLskills.replace("%data%" , myBio.skills);
formatPosition = HTMLworkTitle.replace("%data%" , work["position"])


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
$("#workExperience").append(formatPosition);
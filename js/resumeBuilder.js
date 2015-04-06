var formattedName = "Toni JULIA   ";
var formattedRole = "  Web Developer";

var myBio = {
    "name": "Toni JULIA",
    "role": "Web Developer",
    "contacts": {
        "phone": "637100879",
        "email": "grindersan@gmail.com",
        "github": "github.com/Grinux/",
        "twitter": "Notengo",
        "location": "Palma de Mallorca Spain"
    },
    "welcomeMessage": "Welcome to my Resume",
    "biopic": "images/fry.jpg",
    "skills": [
        "JavaScript",
        "Jquery",
        "MongoDB",
        "Python",
        "Unix"
    ],
    "blog": "wwww.tonijuliamuntaner.com",

     display : function(){

            HTMLheaderName = HTMLheaderName.replace("%data%", myBio.name);
            HTMLheaderRole = HTMLheaderRole.replace("%data%" , myBio.role);
            $("#header").prepend(HTMLheaderRole);
            $("#header").prepend(HTMLheaderName);

            formatEmail = HTMLemail.replace("%data%", myBio.contacts.email);
            $("#topContacts").append(formatEmail);
            $("#footerContacts").append(formatEmail);

            formatMobile = HTMLmobile.replace("%data%", myBio.contacts.phone);
            $("#topContacts").append(formatMobile);
            $("#footerContacts").append(formatMobile);

            formatTwitter = HTMLtwitter.replace("%data%" , myBio.contacts.twitter);
            $("#topContacts").append(formatTwitter);
            $("#footerContacts").append(formatTwitter);

            formatGithub = HTMLgithub.replace("%data%" , myBio.contacts.github);
            $("#topContacts").append(formatGithub);
            $("#footerContacts").append(formatGithub);

            formatBlog = HTMLblog.replace("%data%" , myBio.blog );
            $("#topContacts").append(formatBlog);
            $("#footerContacts").append(formatBlog);

            formatBioPic = HTMLbioPic.replace("%data%" , myBio.biopic);
            $("#header").append(formatBioPic);

            formatWelcomeMsg = HTMLWelcomeMsg.replace("%data%" , myBio.welcomeMessage);
            $("#header").append(formatWelcomeMsg);

            //skills in header with formatted data
                  if (typeof myBio.skills !== 'undefined') {

                        $('#header').append(HTMLskillsStart);
                        formatSkills = HTMLskills.replace("%data%" , myBio.skills);


                        for(i = 0; i < myBio.skills.length; i++) {

                                  auxSkill = HTMLskills.replace("%data%",myBio.skills[i]);
                                  $('#skills').append(auxSkill);

                        }

                    }
}
};

myBio.display();

var work = {
    "jobs" : [
        {
          "employer" : "Keeley" , 
          "title" : "Cooker" ,
          "location": "Pollensa Mallorca Spain" ,
          "dates": "2010-2012",
          "description": "House cooker for Keeleys family"
        },
        {
          "employer" : "Rustica" ,
          "title" : "Chef" ,
          "location": "Paguera Mallorca Spain" ,
          "dates": "2012-2015",
          "description": "Chef in international restaurant"
        }
    ],
    display : function(){

         for(index in work.jobs){

                  $("#workExperience").append(HTMLworkStart);

                  var formatEmployer = HTMLworkEmployer.replace("%data%",work.jobs[index].employer);
                  var formatTitle = HTMLworkTitle.replace("%data%",work.jobs[index].title);
                  var formatEmployerTitle = formatEmployer + formatTitle;

                  $(".work-entry:last").append(formatEmployerTitle);

                  formatDate = HTMLworkDates.replace("%data%",work.jobs[index].dates);
                  $(".work-entry:last").append(formatDate);

                  formatLocation = HTMLworkLocation.replace("%data%",work.jobs[index].location);
                  $(".work-entry:last").append(formatLocation);

                  formatDescription = HTMLworkDescription.replace("%data%",work.jobs[index].description);
                  $(".work-entry:last").append(formatDescription);
         }
    }

};
//Render myBio object 
work.display();


//project object 
var projects = {
   "project": [
          {
            "title":"Araweb",
            "dates":"2010",
            "description":"Web Programaciòn, sobre lorem ipsum la ostia viste colega el loro teni a el pico torcido¡¡¡¡",
            "images" : ['images/image1.jpg']
          },
          
   ],
  display : function(){

        for(index in projects.project){

              $("#projects").append(HTMLprojectStart);

              var formatTitle = HTMLprojectTitle.replace("%data%",projects.project[index].title);
              var formatDate = HTMLprojectDates.replace("%data%",projects.project[index].dates);
              var formatDescription = HTMLprojectDescription.replace("%data%",projects.project[index].description);
              var formatImage = HTMLprojectImage.replace("%data%", projects.project[index].images);

              $(".project-entry:last").append(formatTitle);
              $(".project-entry:last").append(formatDate);
              $(".project-entry:last").append(formatDescription);
              $(".project-entry:last").append(formatImage);
        }
  }
};

projects.display();

//object education-------
var education = {
    "schools": [
        {
            "name": "Fleming",
            "location": "Palma",
            "degree": "Acceso UIB",
            "major": "Math",
            "url": "www.fleming.com",
            "dates": "1994"
        },
        {
            "name": "UIB",
            "location": "Palma",
            "degree": "Master",
            "major": "CompSci",
            "url": "www.UIB.com",
            "dates": "1995-2001"
        }
     ],

    "online" : [

        {
            "title":"Mooc CS50",
            "school": "HarvardX",
            "dates":"2014",
            "url": "http://www.edx.com"
        }
      ],
    display : function(){

          $('#education').append(HTMLschoolStart);
              for(index in education.schools){
                    
                    var formatName = HTMLschoolName.replace('%data%' , education.schools[index].name);
                    var formatDegree = HTMLschoolDegree.replace('%data%' , education.schools[index].degree);
                    var formatDate = HTMLschoolDates.replace('%data%' , education.schools[index].dates);
                    var formatLocation = HTMLschoolLocation.replace('%data%' , education.schools[index].location);
                    var formatMajor = HTMLschoolMajor.replace('%data%' , education.schools[index].major);


                    $(".education-entry").append(formatName + formatDegree);
                    $(".education-entry:last").append(formatDate);
                    $(".education-entry").append(formatLocation);
                    $(".education-entry:last").append(formatMajor);
              }

          $('.education-entry').append(HTMLonlineClasses);

                    for(index in education.online){
                          
                          var formatonlineTitle = HTMLonlineTitle.replace('%data%' , education.online[index].title);
                          var formatonlineSchool = HTMLonlineSchool.replace('%data%' , education.online[index].school);
                          var formatonlineDates = HTMLonlineDates.replace('%data%' , education.online[index].dates);
                          var formatonlineUrl = HTMLonlineURL.replace('%data%' , education.online[index].url);

                          
                          $(".education-entry").append(formatonlineTitle + formatonlineSchool);
                          $(".education-entry").append(formatonlineDates);
                          $(".education-entry").append(formatonlineUrl);
                          

                    }
   }
};
education.display();



//$("#main").append(internationalizeButton);

function inName(finalName) {
               
        space = finalName.search(" ");
        surName = finalName.slice(space);
        name = finalName.slice(0,space);
        surName = surName.toUpperCase();
        _name = name.slice(1) ;
        _name = _name.toLowerCase();
        name = name.slice(0,1);
        name = name.toUpperCase() ;
        _name = name + _name;
        finalName = _name.concat(surName);

    return finalName;
};
$("#mapDiv").append(googleMap);

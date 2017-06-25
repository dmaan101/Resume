	var bio = {
	    "name": "Daksh Maan",
	    "role": "front-end developer",
	    "contacts": {
	        "mobile": "9988906098",
	        "email": "daksh.maan@gmail.com",
	        "github": "dmaan101",
	        "twitter": "",
	        "location": "delhi"
	    },
	    "welcomeMessage": "welcome to my resume",
	    "skills": [
	        "awsomeness", "being batman", "loving others"
	    ],
	    "biopic": "images/pic2.jpg",
	    "display": function() {
	        $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
	        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name), HTMLheaderRole.replace("%data%", bio.role));
	        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	        formattedContactInfo = [];
	        formattedContactInfo.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
	        formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
	        formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
	        formattedContactInfo.push(HTMLtwitter.replace('%data%', bio.contacts.twitter));
	        formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));
	        $("#header").append(HTMLskillsStart);
	        for (var i = 0; i < bio.skills.length; i++) {
	            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));

	        }

	        for (i = 0; i < formattedContactInfo.length; i++) {
	            $("#topContacts").append(formattedContactInfo[i]);
	            $("#footerContacts").append(formattedContactInfo[i]);
	        }
	    }
	};



	var education = {
	    "schools": [{
	        "name": "chitkara university",
	        "location": "rajpura",
	        "degree": "bachelors",
	        "majors": ["CS"],
	        "date": "2016",
	        "url": "www.chitkara.edu"
	    }, {
	        "name": "Lancer's Convent",
	        "location": "Delhi",
            "degree":"high-school",
	        "majors": ["CS"],
	        "date": "2001",
	        "url": "www.lancersconvent.in"
	    }],
	    "onlineCourses": [{
	        "title": "udacity front-end nanodegree",
	        "school": "udacity",
	        "date": "2016",
	        "url": "www.udacity.com",

	    }],
	    "display": function() {
	        for (var school = 0; school < education.schools.length; school++) {
	            $("#education").append(HTMLschoolStart);
	            $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree), HTMLschoolDates.replace("%data%", education.schools[school].date), HTMLschoolLocation.replace("%data%", education.schools[school].location));
                for(var maj = 0;maj<education.schools[school].majors.length;maj++)  
                {
                    HTMLschoolMajor.replace("%data%", education.schools[school].majors[maj]);
                    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[maj]));
                }
	        }

	        //online Courses
	        $("#education").append(HTMLonlineClasses);
	        for (var course = 0; course < education.onlineCourses.length; course++) {
	            $("#education").append(HTMLschoolStart);
	            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school), HTMLonlineDates.replace("%data%", education.onlineCourses[course].date), HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url));
	        }

	    }
	};



	var work = {
	    "jobs": [{
	        "employer": "laurem",
	        "title": "laurem ipsm",
	        "location": "delhi",
	        "dates": "january 2018 - future",
	        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
	    }],
        "display": function() {
	            for (var job = 0; job <work.jobs.length; job++) {
	                $("#workExperience").append(HTMLworkStart);
	                $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title), HTMLworkDates.replace("%data%", work.jobs[job].dates), HTMLworkLocation.replace("%data%", work.jobs[job].location), HTMLworkDescription.replace("%data%", work.jobs[job].description));
	            }
	        }
	};

	var projects = {
	    "projects": [{
	        "title": "sample project 1",
	        "dates": "2016",
	        "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
	        "images": [
	            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQyUSmbVVWQQDuLNTvQqPR1EHXiX_BvV_-T_NCWiTNxE_Y3SRk2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxKI0Ggy5GM79O0DWFBecsbueXX18VWodSHCz_8_Z6QHxmxYe57A"
	        ],

	    }],
	    "display": function() {
	        for (project = 0; project < projects.projects.length; project++) {
	            $("#projects").append(HTMLprojectStart);
	            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title), HTMLprojectDates.replace("%data%", projects.projects[project].dates) + HTMLprojectDescription.replace("%data%", projects.projects[project].description));
	            for (var image = 0; image < projects.projects[project].images.length; image++)
	                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
	        }
	    }

	};
	bio.display();
	education.display();
	work.display();
	projects.display();
	// adding map
	$('#mapDiv').append(googleMap);
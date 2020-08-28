import { Component, OnInit } from '@angular/core';
// import Experience from '../../assets/experience.json'
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experience = [
    {
      title: 'Research Assistant',
      experience: 'Campus Job',
      place: 'University of Wisconsin-Stout',
      image: '../../assets/companyLogos/UWStoutlogo.jpg',
      imageCredit: 'Image credit to UW-Stout',
      date: 'Feburary 2019 - ',
      description: [
        'Working as a research assitant for Dr. Saleh Alnaeli, our research focuses on the vulnerability of software in the age of multithreaded applications and popularity of the open source software module. We analyze open source software systems, run a historcal analysis on the given software system, ',
        'We are currently developing a web application that analyzes user uploaded source code detecting vulnerabilites such as safe/Unsafe functions, race conditions, unsafe memory management, unsafe arithmatic (I.E. unchecked divide by zero), etc.',
        'Published and presented papers and our application at the 2019 Midwest Instruction and Computing Symposium (MICS) conference at NDSU, 2020 MICS Online, IEEE/EIT 2020',
      ],
      skills: [
		'Java',
		'Jooby Microframework',
        'Maven Package Management',
        'XML/JSON Parsing',
        'AWS',
        'Ubuntu Server',
		'Angular',
		'Python Request and Automation'
      ],
    },
    {
      title: 'Image Analysist/Machine Learning Engineer',
      experience: 'Internship',
      place: 'White House Custom Color',
      image: '../../assets/companyLogos/whcclogo.png',
      imageCredit: 'Image credit to WHCC',
      date: 'January 2nd - January 27th 2020',
      description: [
        'I took on a month long internship over winter break building building tools, concepts, and resources for automated analysis on professional photos for White House Custom Color. This includes face and label recognition through AWS Rekognition from images stored in S3 Buckets, creating algorithms for automated cropping, color analysis involving cluster analysis and product color matching, and focus recognition and mapping the focus of an image using lapalacian . At the end of my internship I presented my work to the management of WHCC.',
      ],
      skills: [
        'Python',
        'OpenCV',
        'AWS S3',
        'AWS Rekognition',
        'Pandas',
        'NumPy',
        'MatPlotLib',
        'Scikit-Learn',
        'Keras',
      ],
    },
    {
      title: 'Mobile Applications Development Course',
      experience: 'HS Course',
      place: 'Eagan High School',
      image: '../../assets/companyLogos/EaganHighLogo.png',
      imageCredit: 'Image credit to Eagan High School',
      date: 'September 2017 - June 2018',
      description: [
        'After completing the AP &#174; Computer Science my junior year of high school, I had the opportunity to take a course that gives us real world experience of the software development lifecycle and process through building a real iOS Application with a small team. This consisted of our team of 4 finding a client, working with that client in discussing what kind of application would fit their needs. ',
        'Our group worked with the Eagan FRC team designed to help make security and commmunications more effective at competitions. While I did mostly backend network connectivity, I also did a fair amount of frontend work.',
        'Got lots of experience developing a real world application with a team, working on a official design document, presenting biweekly reports to the class, working on a schedule, and of course coding an in Swift.',
      ],
      skills: ['Swift', 'iOS Development', 'Gannt Charting'],
    },
  ];

  exp = [];

  slideIndex = 1;

  constructor() {
    this.exp = this.experience.slice(1);
  }

  ngOnInit(): void {}
}

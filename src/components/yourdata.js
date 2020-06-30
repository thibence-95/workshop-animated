import React, {useState} from "react";
import {Transition,} from 'react-spring/renderprops'

export default {

  //enter your info accordingly below
  name: "Moeti Chentuf",

  //Contact Email
  contactEmail: "moetichentuf@hotmail.com",

  // Landing Page Name
  landingPageName: "Moeti Chentuf",

  // Landing Page Paragraph
  landingPagePara:
      "Graphic Designer/Web Developer",

  // Landing Page Image (replace - root/public/assets/photo.jpg)
  landingPageImage: "assets/photo.jpg",

  // Change Projects Here
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Project One", //Project Title - Add Your Project Title Here
      // Image Size Should be (300X300 px)
      imageSrc: "https://via.placeholder.com/300",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/"
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Project Two",
      imageSrc: "https://via.placeholder.com/300",
      url: "http://chetanverma.com/"
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Project Three",
      imageSrc: "https://via.placeholder.com/300",
      url: "http://chetanverma.com/"
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Project Four",
      imageSrc: "https://via.placeholder.com/300",
      url: "http://chetanverma.com/"
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Project Five",
      imageSrc: "https://via.placeholder.com/300",
      url: "http://chetanverma.com/"
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Project Six",
      imageSrc: "https://via.placeholder.com/300",
      url: "http://chetanverma.com/"
    }
    // Paste more projects here from the template

    /*
                    If You Want To Add More Projects just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 7,
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
  ],

  // Contact Section
  contactPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  social: [
    // Add Or Remove The Link Accordingly
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/moeti-chentuf-1bb088198/"
    },
    {
      name: "Github",
      url: "https://github.com/moetichentuf"
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/chetanverma"
    }
  ],

  // About Page
  aboutTitle: "I make remarkable digital products",
  aboutPara:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};
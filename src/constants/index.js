import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    stream,
    wcseye,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Designer",
      icon: web,
    },
    {
      title: "Event Coordinator",
      icon: mobile,
    },
    {
      title: "App Tester",
      icon: backend,
    },
    {
      title: "Marketer",
      icon: creator,
    },
  ];
  
  const technologies = [
    
    
    
    {
      name: "TypeScript", 
      icon: typescript, //python
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Redux Toolkit",
      icon: redux, //canva
    },
    
    
    {
      name: "figma",
      icon: figma, //spline
    },
    
  
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },

  ];
  
  const experiences = [
    {
      title: "Research Intern",
      company_name: "University of Calgary Machine Learning Lab",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2024 - August 2024",
      points: [
        "Worked closely with Dr. Yani Ioannou at Calgary's ML lab to conduct research into neural network models.",
        "Created fully-connected and convolutional neural networks using PyTorch to classify the MNIST database, and used Weight and Biases to plot graphs to analyze the effect of neural network depth on its test accuracy.",
        "Participated in weekly meetings with lab group.",
      ],
    },
    {
      title: "Math and Reading Assistant",
      company_name: "Kumon",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2023 - September 2024",
      points: [
        "Worked one-on-one with 40+ Kumon Early Learners, providing support in math and reading comprehension.",
        "Maintained regular communication with parents, addressing inquiries, providing progress updates, and offering guidance to ensure a collaborative approach.",
      ],
    },
    {
      title: "Vice President",
      company_name: "STEM Fellowship",
      icon: shopify,
      iconBg: "#383E56",
      date: "September 2023 - Present",
      points: [
        "Vice President of Westmount Charter School's STEM Fellowship chapter, an organization aiming to promote STEM in youth.",
        "Took care of event logistics, hosted, and judged a school hackathon with over 100 participants across grades 5-12.",
        "Created a mentorship program for high school students to teach middle school students, and bridged communication between teachers and mentors, ultimately impacting over 100 students.",
        "Updated monthly newsletters to advocate high school STEM opportunities.",
      ],
    },
    {
      title: "App Tester",
      company_name: "LightCi",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "September 2024 - Present",
      points: [
        "Collaborated with app developers and provided constructive feedback on an educational app.",
      ],
    },
    {
      title: "Head of Marketing",
      company_name: "StreamEC",
      icon: stream,
      iconBg: "#E6DEDD",
      date: "December 2022 - Present",
      points: [
        "Led the marketing initiatives for Stream Education, a non-profit offering supplemental classes for students.",
        "Worked with the CEO, developing and executing marketing plans to promote the organization's programs and initiatives such as a charity run and math contest, resulting in overall 700+ participants from over 5 schools.",
        "Used Canva to create social media posts and posters.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "MNIST Database Neural Network",
      description:
        "A fully connected and convolutional neural network to classify handwritten digits using the MNIST database.",
      tags: [
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "pyTorch",
          color: "blue-text-gradient",
        },
        {
          name: "wandb",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/OliviaYi2007/MNIST-classification",
    },
    {
      name: "Miles for Meals Social Media Post",
      description:
        "A post for StreamEC's charity run, Miles for Meals.",
      tags: [
        {
          name: "canva",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.canva.com/design/DAF4Zc5UDUg/ndEUTbHwDgI5ZGph1WhYGw/view?utm_content=DAF4Zc5UDUg&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    },
    {
      name: "STEMC Social Media Post",
      description:
        "A post for StreamEC's math contest, STEMC.",
      tags: [
        {
          name: "canva",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.canva.com/design/DAGW4c5HNxw/cQK5KeQOKVBoFcqDy4TCFg/watch?utm_content=DAGW4c5HNxw&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      
    },
    {
      name: "WCS Eye Website",
      description:
        "Website I created for my school's newpaper.",
      tags: [
        {
          name: "wix",
          color: "blue-text-gradient",
        },
      ],
      image: wcseye,
      source_code_link: "https://bj7018a.wixsite.com/wcseyenews",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };

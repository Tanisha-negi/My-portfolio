// Project Section Logo's
import docbrieflogo from '../assets/Project_logo/docbrief.png';
import loanapplogo from '../assets/Project_logo/loanapp.png';
import qrapplogo from '../assets/Project_logo/qrapp.png';
import carepointlogo from '../assets/Project_logo/carepoint.png';
import weatherlogo from '../assets/Project_logo/weatherapp.png';
  
  export const projects = [
    {
      id: 0,
      title: "Care Point: Doctor Appointment Scheduler",
      description:
        "Care Point is a full-stack web application designed to demonstrate the construction of a modern medical scheduling system. It allows patients to easily book, manage, and view appointments online, while giving medical staff a centralized system to manage schedules and patient data.",
      image: carepointlogo,
      tags: ["Python", "Flask", "SQLite", "SQLAlchemy", "Flask-Login", "Flask-Mail", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Tanisha-negi/Care-point-appointment-scheduler",
      webapp: "https://tanishanegi-carepoint.hf.space/",
    },
    {
      id: 1,
      title: "DocBrief: AI-Powered Legal Document Summarizer",
      description:
        "DocBrief is an advanced AI-powered tool that leverages Natural Language Processing (NLP) techniques to automate legal document analysis. Designed for legal professionals and researchers, it rapidly processes lengthy contracts, case files, and regulatory documents to deliver essential insights, drastically reducing document review time.",
      image: docbrieflogo,
      tags: ["Python", "Flask", "Pandas", "PyPDF2", "python-docx", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Tanisha-negi/DocBrief-legal-document-summarizer",
      webapp: "https://tanishanegi-docbrief-summarizer.hf.space/",
    },
    {
      id: 2,
      title: "QR Code Menu Generator",
      description:
        "A full-stack web application built with the Django framework that allows users to input any URL and instantly generate a scannable QR code image. This project demonstrates core web development skills including server-side logic, package management, and responsive templating.",
      image: qrapplogo,
      tags: ["Python", "Django", "qrcode", "Pillow", "SQLite", "HTML", "CSS", "Bootstrap 5"],
      github: "https://github.com/Tanisha-negi/QR-code-menu-generator",
      webapp: "https://tanishanegi-qr-generator.hf.space",
    },
    {
      id: 3,
      title: "Loan Eligibility Predictor",
      description:
        "This project implements a machine learning solution to automate the loan approval process by predicting the eligibility status of an applicant. The objective is to build a reliable classification model that minimizes risk for financial institutions and speeds up the decision-making process.",
      image: loanapplogo,
      tags: ["Python", "Flask", "pandas", "NumPy", "scikit-learn", "joblib", "matplotlib", "seaborn", "Validation", "HTML", "CSS"],
      github: "https://github.com/Tanisha-negi/Loan-eligibility-predictor",
      webapp: "https://tanishanegi-loan-eligibility-predictor.hf.space",
    },
    {
      id: 4,
      title: "Real-Time Weather Forecast",
      description:
        "A simple, responsive weather forecasting application that provides current conditions and a multi-day forecast for any location searched by the user. This project was built to demonstrate fundamental front-end development skills and asynchronous data fetching.",
      image: weatherlogo,
      tags: ["JavaScript", "API", "HTML", "CSS"],
      github: "https://github.com/Tanisha-negi/Real-time-weather-forecast",
      webapp: "https://api-based-weather-forecast.netlify.app/",
    },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    
  ];  
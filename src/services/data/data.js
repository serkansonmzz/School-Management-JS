const schoolData = [
  {
    type: "teacher",
    id: 1,
    title: "AWS Expert",
    name: "Ali Sayar",
    description:
      "Seasoned AWS guru, blending in-depth cloud knowledge with hands-on learning experiences.",
    img: "",
    classes: [108, 102],
    students: [2, 4, 6, 1],
  },
  {
    type: "teacher",
    id: 2,
    title: "Javascript Expert",
    name: "Hannes Bühler",
    description:
      "Dynamic Javascript mentor, famous for transforming complex concepts into engaging, easy-to-understand lessons",
    img: "",
    classes: [108, 104],
    students: [1, 3, 6],
  },
  {
    type: "teacher",
    id: 3,
    title: "Cybersecurity Analyst",
    name: "Peter Nolan",
    description:
      "Cybersecurity wizard, adept at imparting the importance of digital security and the latest trends in cyber defense",
    img: "",
    classes: [104, 105],
    students: [2, 4, 6, 1],
  },
  {
    type: "teacher",
    id: 4,
    title: "Full Stack Development",
    name: "Eleanor Grayson",
    description:
      "Veteran Full Stack developer and educator, known for integrating cutting-edge web technologies into comprehensive learning experiences",
    img: "",
    classes: [108],
    students: [1, 2, 3, 4, 5, 6],
  },
  {
    type: "teacher",
    id: 5,
    title: "Artificial Intelligence Specialist",
    name: "Sophia Chapman",
    description:
      "AI enthusiast, celebrated for her ability to demystify machine learning and AI concepts, making them accessible to all students",
    img: "",
    classes: [105, 104],
    students: [4, 6, 2],
  },
  {
    type: "teacher",
    id: 6,
    title: "Mobile App Development",
    name: "Charlotte Zhang",
    description:
      "Expert in mobile application development, focusing on both Android and iOS platforms, blending creativity with technical prowess.",
    img: "",
    classes: [103, 108],
    students: [5, 6, 4],
  },

  {
    type: "student",
    id: 1,
    title: "Full Stack Participant",
    name: "Alex Johnson",
    grades: [78, 81, 70],
    description:
      "Keen on mastering full stack development, with a strong focus on modern web technologies.",
    img: "",
    classes: [101, 102, 103],
  },
  {
    type: "student",
    id: 2,
    title: "Mobile Novice",
    name: "Mia Thompson",
    grades: [90, 60, 80],
    description:
      "Eager to dive into Mobile development, exploring both İOS and Android structures.",
    img: "",
    classes: [101, 102, 103],
  },
  {
    type: "student",
    id: 3,
    title: "Javascript Enthusiast",
    name: "Ryan Patel",
    grades: [58, 70, 90],
    description:
      "Passionate about learning Javascript, focusing on interactive web application development.",
    img: "",
    classes: [102, 103],
  },
  {
    type: "student",
    id: 4,
    title: "Cybersecurity Beginner",
    name: "Emily Wong",
    grades: [78, 81, 86],
    description:
      "Intrigued by the world of cybersecurity, keen to understand digital protection strategies.",
    img: "",
    classes: [108],
  },
  {
    type: "student",
    id: 5,
    title: "Javascript Learner",
    name: "Liam Garcia",
    grades: [90, 85, 93],
    description:
      "Dedicated to mastering Javascript, with a special interest in front-end frameworks.",
    img: "",
    classes: [101, 102],
  },
  {
    type: "student",
    id: 6,
    title: "AI Explorer",
    name: "Olivia Brown",
    grades: [88, 92, 76],
    description:
      "Fascinated by artificial intelligence, eager to learn about machine learning algorithms.",
    img: "",
    classes: [101, 102, 104],
  },

  {
    type: "class",
    id: 107,
    name: "Cybersecurity Fundamentals",
    description:
      "Introductory course in data science, covering key concepts and hands-on experience with data tools",
    teachers: [1, 2],
    students: [4, 5, 6],
  },
  {
    type: "class",
    id: 102,
    name: "Data Science Essentials",
    description:
      "Introductory course in data science, covering key concepts and hands-on experience with data tools",
    teachers: [4, 5],
    students: [3, 2, 4],
  },
  {
    type: "class",
    id: 103,
    name: "Fundamentals of Programming",
    description:
      "Diverse programming languages overview, focusing on core principles and modern development practices",
    teachers: [5, 6],
    students: [4, 5, 1],
  },
  {
    type: "class",
    id: 104,
    name: "Mobile Technologies",
    description:
      "Deep dive into cutting-edge cloud technologies, preparing students for advanced cloud-based solutions.",
    teachers: [3, 5],
    students: [5, 2],
  },
  {
    type: "class",
    id: 105,
    name: "Javascript Deep Dive",
    description:
      "In-depth exploration of Javascript, from basics to advanced techniques, tailored for aspiring developers",
    teachers: [3, 5],
    students: [2, 3, 5],
  },
  {
    type: "class",
    id: 108,
    name: "Advanced Cloud Technologies",
    description:
      "Deep dive into cutting-edge cloud technologies, preparing students for advanced cloud-based solutions.",
    teachers: [1, 2],
    students: [1, 2, 3, 4],
  },
];

export default schoolData;

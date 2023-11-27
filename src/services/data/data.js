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
  },
  {
    type: "teacher",
    id: 2,
    title: "Javascript Expert",
    name: "Hannes Bühler",
    description:
      "Dynamic Javascript mentor, famous for transforming complex concepts into engaging, easy-to-understand lessons",
    img: "",
    classes: [103, 105],
  },
  {
    type: "teacher",
    id: 3,
    title: "Cybersecurity Analyst",
    name: "Peter Nolan",
    description:
      "Cybersecurity wizard, adept at imparting the importance of digital security and the latest trends in cyber defense",
    img: "",
    classes: [105],
  },
  {
    type: "teacher",
    id: 4,
    title: "Full Stack Development",
    name: "Eleanor Grayson",
    description:
      "Veteran Full Stack developer and educator, known for integrating cutting-edge web technologies into comprehensive learning experiences",
    img: "",
    classes: [103],
  },
  {
    type: "teacher",
    id: 5,
    title: "Artificial Intelligence Specialist",
    name: "Sophia Chapman",
    description:
      "AI enthusiast, celebrated for her ability to demystify machine learning and AI concepts, making them accessible to all students",
    img: "",
    classes: [108],
  },
  {
    type: "teacher",
    id: 6,
    title: "Mobile App Development",
    name: "Charlotte Zhang",
    description:
      "Expert in mobile application development, focusing on both Android and iOS platforms, blending creativity with technical prowess.",
    img: "",
    classes: [104],
  },

  {
    type: "student",
    id: 1,
    title: "Full Stack Participant",
    name: "Alex Johnson",
    description:
      "Keen on mastering full stack development, with a strong focus on modern web technologies.",
    img: "",
    classId: 101,
  },
  {
    type: "student",
    id: 2,
    title: "Mobile Novice",
    name: "Mia Thompson",
    description:
      "Eager to dive into Mobile development, exploring both İOS and Android structures.",
    img: "",
    classId: 104,
  },
  {
    type: "student",
    id: 3,
    title: "Javascript Enthusiast",
    name: "Ryan Patel",
    description:
      "Passionate about learning Javascript, focusing on interactive web application development.",
    img: "",
    classId: 103,
  },
  {
    type: "student",
    id: 4,
    title: "Cybersecurity Beginner",
    name: "Emily Wong",
    description:
      "Intrigued by the world of cybersecurity, keen to understand digital protection strategies.",
    img: "",
    classId: 107,
  },
  {
    type: "student",
    id: 5,
    title: "Javascript Learner",
    name: "Liam Garcia",
    description:
      "Dedicated to mastering Javascript, with a special interest in front-end frameworks.",
    img: "",
    classId: 105,
  },
  {
    type: "student",
    id: 6,
    title: "AI Explorer",
    name: "Olivia Brown",
    description:
      "Fascinated by artificial intelligence, eager to learn about machine learning algorithms.",
    img: "",
    classId: 106,
  },

  {
    type: "class",
    id: 107,
    name: "Cybersecurity Fundamentals",
    description: "",
    teacherId: 1,
    students: [4],
  },
  {
    type: "class",
    id: 102,
    name: "Data Science Essentials",
    description:
      "Introductory course in data science, covering key concepts and hands-on experience with data tools",
    teacherId: 1,
    students: [3],
  },
  {
    type: "class",
    id: 103,
    name: "Fundamentals of Programming",
    description:
      "Diverse programming languages overview, focusing on core principles and modern development practices",
    teacherId: 2,
    students: [4, 5, 1],
  },
  {
    type: "class",
    id: 104,
    name: "Mobile Technologies",
    description: "",
    teacherId: 2,
    students: [5, 2],
  },
  {
    type: "class",
    id: 105,
    name: "Javascript Deep Dive",
    description:
      "In-depth exploration of Javascript, from basics to advanced techniques, tailored for aspiring developers",
    teacherId: 3,
    students: [2, 3, 5],
  },
  {
    type: "class",
    id: 108,
    name: "Advanced Cloud Technologies",
    description:
      "Deep dive into cutting-edge cloud technologies, preparing students for advanced cloud-based solutions.",
    teacherId: 1,
    students: [1],
  },
];

export default schoolData;

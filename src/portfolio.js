const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Ant-nguyen.github.io/cleanfolio',
  title: 'AN.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Anthony',
  role: 'Full-Stack Developer',
  description:
    'Hello, my name is Anthony Nguyen. I\'m a Full-Stack Developer with a passion for learning and growing. I was introduced to programming from my background in Bioinformatics where I fell in love with solving problems with logic and technology. Now I bring that same passion to software development. Welcome to my page!',
  resume: 'https://drive.google.com/file/d/13yfl_OsViw2gR6fTsVhCGAemTkV5tNDZ/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/antnguyense/',
    github: 'https://github.com/Ant-nguyen',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Botanical Chronicle',
    description:
      'Journaling application that allow garden enthusiast a way to keep track of their plant babies',
    stack: ['FastAPI', 'Python', 'JavaScript', 'React/Redux', 'BootStrap'],
    sourceCode: 'https://gitlab.com/botanyboys/botanical-chronicle',
    livePreview: 'https://module3-project-gamma-botanyboys-e55129b9440c9fd0ebc9e861bafda6.gitlab.io/onboard',
  },
  {
    name: 'Car Car',
    description:
      'Car Dealership application dealing with Service and Sales',
    stack: ['BootStrap', 'Django', 'React','Python', 'JavaScript'],
    sourceCode: 'https://github.com/Ant-nguyen/carcar',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Wardrobify',
    description:
      'Application for cataloging your hats and shoes!',
    stack: ['BootStrap', 'Django', 'React','Python', 'JavaScript'],
    sourceCode: 'https://gitlab.com/anthony6305046/microservice-two-shot-jen-ant',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'BootStrap',
  'Docker',
  'Git',
  'CI/CD',
  'Python',
  'Django',
  'FastAPI',
  'MongoDB',
  'SQL',
  'C#',
  '.NET',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'anguye18@fau.edu',
}

export { header, about, projects, skills, contact }

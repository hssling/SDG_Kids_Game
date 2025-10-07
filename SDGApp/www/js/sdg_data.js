// SDG Data for Kids Game
const sdgs = [
    { id: 1, name: "No Poverty", symbol: "🧑", description: "End poverty in all forms everywhere.", funFact: "Did you know? Over 700 million people live in extreme poverty today." },
    { id: 2, name: "Zero Hunger", symbol: "🌽", description: "End hunger, achieve food security.", funFact: "82 million tons of food get thrown away every year!" },
    { id: 3, name: "Good Health", symbol: "🏥", description: "Ensure healthy lives and promote well-being.", funFact: "Washing your hands saves lives by stopping germs." },
    { id: 4, name: "Quality Education", symbol: "📚", description: "Ensure inclusive and equitable quality education.", funFact: "262 million children worldwide are out of school." },
    { id: 5, name: "Gender Equality", symbol: "⚖️", description: "Achieve gender equality and empower girls.", funFact: "Girls are half as likely to get infected with HIV than boys." },
    { id: 6, name: "Clean Water", symbol: "💧", description: "Ensure clean water and sanitation for all.", funFact: "2 billion people drink unsafe water daily!" },
    { id: 7, name: "Affordable Energy", symbol: "💡", description: "Provide affordable and clean energy.", funFact: "840 million people live without electricity." },
    { id: 8, name: "Decent Work", symbol: "💼", description: "Promote sustained, inclusive and sustainable economic growth.", funFact: "475 million jobs need to be created by 2030." },
    { id: 9, name: "Industry Innovation", symbol: "🏭", description: "Build resilient infrastructure and foster innovation.", funFact: "90% of global trade uses maritime shipping." },
    { id: 10, name: "Reduced Inequalities", symbol: "🤝", description: "Reduce inequality within and among countries.", funFact: "The richest 1% has more wealth than the bottom 50%." },
    { id: 11, name: "Sustainable Cities", symbol: "🏙️", description: "Make cities safe, resilient and sustainable.", funFact: "About 70% of the world's population will live in cities." },
    { id: 12, name: "Responsible Consumption", symbol: "♻️", description: "Ensure sustainable consumption and production patterns.", funFact: "Only 20% of plastic waste gets recycled." },
    { id: 13, name: "Climate Action", symbol: "🌍", description: "Take urgent action to combat climate change.", funFact: "The Earth is warming 100 times faster than normal!" },
    { id: 14, name: "Life Below Water", symbol: "🐟", description: "Conserve and sustainably use ocean resources.", funFact: "The ocean covers over 70% of the Earth." },
    { id: 15, name: "Life on Land", symbol: "🌿", description: "Protect, restore and promote sustainable use of ecosystems.", funFact: "Over 22% of Earth's land surface is degraded." },
    { id: 16, name: "Peace and Justice", symbol: "🕊️", description: "Promote peaceful and inclusive societies.", funFact: "1 in 5 people fear being a victim of crime." },
    { id: 17, name: "Partnerships", symbol: "🌐", description: "Strengthen global solidarity for development.", funFact: "90% of global trade travels by sea." }
];

// Quiz questions (expanded)
const quizQuestions = [
    {
        question: "Which SDG is about making sure everyone has clean water to drink?",
        options: ["Good Health", "Clean Water", "Zero Hunger"],
        correct: 1,
        sdg: 6
    },
    {
        question: "What does SDG 13, Climate Action, aim to do?",
        options: ["Build cities", "Protect our planet", "Make food better"],
        correct: 1,
        sdg: 13
    },
    {
        question: "SDG 5 is about equal rights for boys and girls. What is it called?",
        options: ["Gender Equality", "Peace", "Education"],
        correct: 0,
        sdg: 5
    },
    {
        question: "What SDG helps stop people from being hungry?",
        options: ["Clean Water", "Zero Hunger", "Good Health"],
        correct: 1,
        sdg: 2
    },
    {
        question: "Which SDG is about making sure everyone has electricity?",
        options: ["Affordable Energy", "Clean Water", "No Poverty"],
        correct: 0,
        sdg: 7
    },
    {
        question: "Which SDG focuses on protecting our oceans and sea life?",
        options: ["Life Below Water", "Life on Land", "Climate Action"],
        correct: 0,
        sdg: 14
    },
    {
        question: "What should we do to help SDG 12, Responsible Consumption?",
        options: ["Buy more toys", "Reduce waste and recycle", "Use more water"],
        correct: 1,
        sdg: 12
    },
    {
        question: "SDG 16 is about creating peace and justice. What does it want to end?",
        options: ["Schools", "Fighting and injustice", "Electricity"],
        correct: 1,
        sdg: 16
    },
    {
        question: "Which SDG wants to make sure that animals and forests are protected?",
        options: ["Quality Education", "Life on Land", "Sustainable Cities"],
        correct: 1,
        sdg: 15
    },
    {
        question: "What is SDG 3 about?",
        options: ["Having good health", "Going to school", "Having electricity"],
        correct: 0,
        sdg: 3
    },
    {
        question: "Which SDG aims to build strong roads and buildings?",
        options: ["Industry Innovation", "Quality Education", "Gender Equality"],
        correct: 0,
        sdg: 9
    },
    {
        question: "What should we reduce to help SDG 10?",
        options: ["Diet", "Inequality between rich and poor", "Water usage"],
        correct: 1,
        sdg: 10
    },
    {
        question: "SDG 11 wants to make our cities:",
        options: ["Smaller", "Green and safe", "Dark after sunset"],
        correct: 1,
        sdg: 11
    },
    {
        question: "Which SDG is about learning in school?",
        options: ["Good Health", "Quality Education", "Zero Hunger"],
        correct: 1,
        sdg: 4
    },
    {
        question: "What is SDG 1 trying to end?",
        options: ["Electricity usage", "Poor people having no money", "Using too much water"],
        correct: 1,
        sdg: 1
    },
    {
        question: "SDG 8 is about good jobs. What do good jobs give people?",
        options: ["Free food", "Fair pay and safety", "New clothes every day"],
        correct: 1,
        sdg: 8
    },
    {
        question: "What does SDG 17 encourage?",
        options: ["Building walls", "Working together across countries", "Using more oil"],
        correct: 1,
        sdg: 17
    },
    {
        question: "The richest 1% have more wealth than which group according to SDG 10?",
        options: ["Middle class", "Bottom 50%", "Bottom 10%"],
        correct: 1,
        sdg: 10
    },
    {
        question: "SDG 13 is about protecting the Earth. What animal is disappearing due to climate change?",
        options: ["Elephants", "Polar bears", "Giant pandas"],
        correct: 1,
        sdg: 13
    },
    {
        question: "Which SDG wants to protect beaches and create safe playgrounds in cities?",
        options: ["Sustainable Cities", "Quality Education", "Zero Hunger"],
        correct: 0,
        sdg: 11
    },
    {
        question: "How can you help SDG 15 protect animals?",
        options: ["Plant more trees", "Throw away plastic", "Use more electricity"],
        correct: 0,
        sdg: 15
    },
    {
        question: "SDG 16 wants everyone to feel safe from crime. What should we promote?",
        options: ["Justice and fair laws", "More cars", "Bigger houses"],
        correct: 0,
        sdg: 16
    },
    {
        question: "Which SDG will be helped if you recycle plastic bottles?",
        options: ["Peace", "Responsible Consumption", "Gender Equality"],
        correct: 1,
        sdg: 12
    },
    {
        question: "Which SDG protects coral reefs and underwater plants?",
        options: ["Life on Land", "Life Below Water", "No Poverty"],
        correct: 1,
        sdg: 14
    },
    {
        question: "SDG 4 is about getting a good education. What does it help you become?",
        options: ["A doctor or engineer", "Both doctors and engineers", "A firefighter"],
        correct: 1,
        sdg: 4
    },
    {
        question: "Which SDG wants to build new bridges and buildings to help people?",
        options: ["Gender Equality", "Industry Innovation", "Justice"],
        correct: 1,
        sdg: 9
    }
];

// Riddles (expanded)
const riddles = [
    {
        question: "I fall from the sky, I make plants grow, SDG 6 protects me for all to drink. What am I?",
        answer: "water",
        sdg: 6,
        hint: "You need this to stay alive and it's shaped like H2O!"
    },
    {
        question: "I give light at night, I help cook and play, SDG 7 expects everyone to have me. What am I?",
        answer: "electricity",
        sdg: 7,
        hint: "It's what makes your phone work and lights up bulbs."
    },
    {
        question: "I am the planet we live on, I need protection from hot weather. Which SDG fights for me?",
        answer: "13",
        sdg: 13,
        hint: "This SDG is called Climate Action."
    },
    {
        question: "Boys and girls should have equal chances to learn and play. Which SDG is this?",
        answer: "5",
        sdg: 5,
        hint: "It's about girls having the same rights as boys."
    },
    {
        question: "I grow on farms and help us eat healthy food. No one should miss out on me thanks to SDG 2. What am I?",
        answer: "food",
        sdg: 2,
        hint: "SDG 2 is called Zero Hunger."
    },
    {
        question: "I come from doctors and keep us healthy. SDG 3 makes sure everyone gets me. What am I?",
        answer: "medicine",
        sdg: 3,
        hint: "SDG 3 is called Good Health."
    },
    {
        question: "I am a building where kids learn science and art. SDG 4 builds more of me. What am I?",
        answer: "school",
        sdg: 4,
        hint: "SDG 4 is called Quality Education."
    },
    {
        question: "I help businessmen talk to people far away. SDG 17 uses me for global friendships. What am I?",
        answer: "internet",
        sdg: 17,
        hint: "SDG 17 is about creating partnerships."
    },
    {
        question: "I am the home for fish and whales. SDG 14 protects my deep blue waters. What am I?",
        answer: "ocean",
        sdg: 14,
        hint: "SDG 14 is called Life Below Water."
    },
    {
        question: "Rich and poor can be different, but SDG 10 wants to make things fairer. What is inequality?",
        answer: "unfairness",
        sdg: 10,
        hint: "It's when some people have much more than others."
    },
    {
        question: "I build roads and factories. SDG 9 helps me create new inventions. What am I?",
        answer: "industry",
        sdg: 9,
        hint: "SDG 9 is called Industry Innovation."
    },
    {
        question: "People, roads, buildings live in me. SDG 11 makes me clean and safe. What am I?",
        answer: "city",
        sdg: 11,
        hint: "SDG 11 is called Sustainable Cities."
    },
    {
        question: "I swim in the sea but I'm not a dolphin. SDG 14 protects me from plastic. What am I?",
        answer: "fish",
        sdg: 14,
        hint: "I have fins and scales."
    },
    {
        question: "Workers need me for good jobs. SDG 8 says everyone should have me. What am I?",
        answer: "fair pay",
        sdg: 8,
        hint: "It's money you get when you work."
    },
    {
        question: "I live in forests and help the air. SDG 15 fights to keep me safe. What am I?",
        answer: "tree",
        sdg: 15,
        hint: "I make oxygen and give shade."
    },
    {
        question: "I am where kids spend 8 hours learning. Without me, SDG 4 cannot succeed. What am I?",
        answer: "school",
        sdg: 4,
        hint: "Teachers and students go here every day!"
    },
    {
        question: "I am what doctors give you when you're sick. SDG 3 makes sure everyone has access to me. What am I?",
        answer: "medicine",
        sdg: 3,
        hint: "It comes in tablets, syrups, or injections."
    },
    {
        question: "I am a big body of water covering most of our planet. SDG 14 protects my creatures. What am I?",
        answer: "ocean",
        sdg: 14,
        hint: "Whales and dolphins live in me."
    },
    {
        question: "I am what the richest 1% have more than the bottom 50%. SDG 10 wants to reduce me. What am I?",
        answer: "wealth",
        sdg: 10,
        hint: "It's money and possessions that people own."
    },
    {
        question: "I build factories and bridges for progress. SDG 9 makes me innovative and strong. What am I?",
        answer: "industry",
        sdg: 9,
        hint: "Workers create cars, phones, and buildings here."
    },
    {
        question: "I am where millions of people live together. SDG 11 makes me sustainable and safe. What am I?",
        answer: "city",
        sdg: 11,
        hint: "NYC, London, and Tokyo are examples of me."
    },
    {
        question: "I am what SDG 8 believes everyone deserves: safe conditions and ___ ___.",
        answer: "fair pay",
        sdg: 8,
        hint: "You get this for doing your job well."
    },
    {
        question: "I am green and tall, I clean the air we breathe. SDG 15 protects my home in the forest. What am I?",
        answer: "tree",
        sdg: 15,
        hint: "I have leaves, bark, and roots."
    },
    {
        question: "I help countries work together to solve problems. SDG 17 creates more of me worldwide. What am I?",
        answer: "partnership",
        sdg: 17,
        hint: "It's when people or countries team up for a goal."
    },
    {
        question: "I am the feeling that SDG 16 wants to stop. It's when people fight or hurt each other. What am I?",
        answer: "violence",
        sdg: 16,
        hint: "SDG 16 is about Peace and Justice."
    },
    {
        question: "I am broken down and reused to help the planet. SDG 12 encourages this practice. What am I?",
        answer: "recycle",
        sdg: 12,
        hint: "It means to convert waste into something useful again."
    },
    {
        question: "I am what many girls can't access like boys can. SDG 5 fights for me through equal opportunities. What am I?",
        answer: "education",
        sdg: 5,
        hint: "It's learning about reading, writing, and math."
    },
    {
        question: "I am a resource that 840 million people lack. SDG 7 wants everyone to have me. What am I?",
        answer: "electricity",
        sdg: 7,
        hint: "It powers lights, computers, and fridges."
    },
    {
        question: "I am a problem SDG 13 urgently addresses: rising temperatures and more storms. What am I?",
        answer: "climate change",
        sdg: 13,
        hint: "It's making the Earth hotter than before."
    },
    {
        question: "I am something SDG 12 teaches us to use less of, to help the environment. What am I?",
        answer: "plastic",
        sdg: 12,
        hint: "It comes in bottles, bags, and straws."
    },
    {
        question: "I am what SDG 16 wants to establish: fair laws and the rule of what?",
        answer: "law",
        sdg: 16,
        hint: "Judges, police, and courts enforce it."
    }
];

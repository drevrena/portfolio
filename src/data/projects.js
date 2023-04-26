const projects = [
    {
        id: "1",
        img: "./assets/images/desktop-kanban.webp",
        name: "Kanban Board",
        slug: "kanban",
        github: "https://github.com/drevrena/kanban",
        description: `That's a Kanban Board where you can create, delete, update and move around tasks. The application is secured with an authentication system implemented through Firebase cloud systems.`,
        techs: ["React", "React-Router-6", "Firebase", "Tailwind"]
    },
    {
        id: "2",
        img: "./assets/images/desktop-shoppyware.webp",
        name: "Shoppyware",
        slug: "shoppyware",
        github: "https://github.com/drevrena/shoppyware",
        description: `That's a mock ecommerce site where you can add to cart and checkout through Stripe payment API. Payment API requests are created through a simple AWS Lambda function.`,
        techs: ["React", "React-Router-6", "AWS Lambda", "Stripe API"]
    },
    {
        id: "3",
        img: "./assets/images/desktop-quiz.webp",
        name: "Quizzical",
        slug: "quiz",
        github: "https://github.com/drevrena/quizzical",
        description: `That's one of my first React projects inspired by Scrimba's course. It's a simple quiz game with trivia questions fetched from the open trivia db API.`,
        techs: ["React", "REST-API"]
    },
    {
        id: "4",
        img: "./assets/images/desktop-cardgame.webp",
        name: "Card Game",
        slug: "cardgame",
        github: "https://github.com/drevrena/memory-game",
        description: `It's a simple game that I built with the intent of learning Typescript and practicing state handling with Redux.`,
        techs: ["React", "Redux", "Typescript"]
    },
]

export default projects 





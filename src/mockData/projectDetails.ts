import image from './milkyway.jpeg'
function randomDateGenerator(start:Date, end:Date): Date{
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}



export const projectDetails: object = {
    title: "Test Project",
    description: "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. lad schooner scallywag dance the hempen jig ",
    mileStones: {
        design: randomDateGenerator(new Date(2022, 1, 1), new Date()),
        mockUp: randomDateGenerator(new Date(2022, 2, 2), new Date()),
        initialBuildout: randomDateGenerator(new Date(2022, 3, 3), new Date()),
        bugTesting: randomDateGenerator(new Date(2022, 4, 4), new Date()),
        turnover: randomDateGenerator(new Date(2022, 6, 6), new Date())
    },
    team: [
        {
            name: 'Jane Doe',
            specialty: ['Project Lead', 'Frontend', 'Back End', 'Smart Contracts'],
            contact: 'gogetem@gmail.com',
        },
        {
            name: 'John Doe',
            specialty: ['Frontend', 'Smart Contracts'],
        },
        {
            name: 'Betty Boop',
            specialty: ['Designer', 'Frontend'],
        },
        {
            name: 'John James Rambo',
            specialty: ['Taking Names']
        }
    ],
    costBreakdown: {
        totalEst: 57000,
        totalPayments: 30000,
        remaining: 27000
    },
    projectBoard: [
        {
            task: 'Create awesomeness',
            assignedTo: 'John Doe'
        },
        {
            task: 'Be the boss',
            assisgnedTo: 'Jane Doe'
        },
        {
            task: 'Lurk in the shadows',
            assignedTo: 'John James Rambo'
        },
        {
            task: 'Make stuff look right',
            assignedTo: 'Betty Boop'
        }
    ]
}
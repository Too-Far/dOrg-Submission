function randomDateGenerator(start:Date, end:Date): Date{
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

const mileStoneMap = new Map<string, object>();
mileStoneMap.set('design', {complete: true})
mileStoneMap.set('mockUp', {complete: true})
mileStoneMap.set('initialBuildout', {complete: true})
mileStoneMap.set('bugTesting', {complete: false})
mileStoneMap.set('turnover', {complete: false})



export const projectDetails: object = {
    title: "Test Project",
    description: "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. lad schooner scallywag dance the hempen jig ",
    mileStones: mileStoneMap,
    team: [
        {
            name: 'Jane Doe',
            specialties: ['Project Lead', 'Frontend', 'Back End', 'Smart Contracts'],
            contact: 'gogetem@gmail.com',
        },
        {
            name: 'John Doe',
            specialties: ['Frontend', 'Smart Contracts'],
        },
        {
            name: 'Betty Boop',
            specialties: ['Designer', 'Frontend'],
        },
        {
            name: 'John James Rambo',
            specialties: ['Taking Names']
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
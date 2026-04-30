export const SelectTravelesList = [
    {
        id: 1,
        title: 'Just Me',
        description: 'A solo traveles in exploration',
        icon: '🛩️',
        people: '1'
    },

    {
        id: 2,
        title: 'A Couple',
        description: 'Two traveles in tandem',
        icon: '🥂',
        people: '2 people'
    },

    {
        id: 3,
        title: 'Family',
        description: 'A group of fun loving adventures',
        icon: '🏡',
        people: '3 to 5 people'
    },

    {
        id: 4,
        title: 'Friends',
        description: 'A bunch of thrill-seekes',
        icon: '🚢',
        people: '5 to 10 people'
    },
];


export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💵',
    },

    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '💰',
    },

    {
        id: 3,
        title: 'Luxury',
        desc: 'Dont worry about cost',
        icon: '💸',
    },
];

export const AI_PROMPT = 'Generate travel plan for location : {location} for {totaldays} days for {traveler} with a {budget} budget, give me a hotel options list with Hotel name, hotel address, price. hotel image url, geo coordinates, rating, descriptions and suggest itinerary with place name, place details, place image url, geo coordinates, ticket pricing,rating, time travel each of the location for {totaldays} days with each day plan with best time to visit in JSON formate.'
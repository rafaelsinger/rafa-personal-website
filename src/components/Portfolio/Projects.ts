export type Project = {
    name: string,
    desc: string,
    slug: string,
    webslug: string,
    tech: Array<String>
}

const skipper: Project = {
    name: 'Skipper',
    desc: 'Your finance first mate. This free web application will help you visualize your spending, create budgets, and earn savings. Coming soon.',
    slug: 'skipper',
    webslug: 'skippercomingsoon.com',
    tech: ['Next.js', 'React', 'Tailwind.css', 'TypeScript', 'Firebase Auth', 'Plaid API', 'MongoDB', 'Mongoose ODM', 'Node.js']
}

const graderdays: Project = {
    name: 'Grader Days',
    desc: 'A calendar web application that allows people to visualize their daily progress. Create an account, answer a few questions about your day, and see your evolution over time.',
    slug: 'graderdays',
    webslug: 'graderdays.com',
    tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Firebase', 'Firebase Auth', 'Firestore DB']
}

const reviewblog: Project = {
    name: 'Review Blog',
    desc: 'A custom built personal review blog for movies, TV, books, and music. Design follows and emulates the top online review sites to deliver a fluid yet original experience.',
    slug: 'rafa-personal-website',
    webslug: 'rafaelsinger.com/reviews',
    tech: ['React', 'TypeScript', 'Sass', 'HTML', 'Node.js', 'GraphQL', 'Hygraph']
}

const covidmap: Project = {
    name: 'Covid Map',
    desc: 'A map of the United States that presents COVID-19 updated weekly from the CDC. Simply click on any of the four categories and see a beautiful display of the data.',
    slug: 'covid-map',
    webslug: 'simple-covid-map.netlify.app',
    tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Leaflet.js', 'React Leaflet', 'Node.js', 'CDC Data APIs', 'JSON/GeoJSON']
}
   

export const projects: Array<Project> = [
    skipper,
    graderdays,
    reviewblog,
    covidmap
]
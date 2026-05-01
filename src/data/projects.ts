interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  keyFeatures: Array<string>;
  preview: string;
  sourceCode: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "weather_app",
    image: "/weather_1.png",
   description: "Real-time weather app with live data, 5-day forecasts, and city search functionality.",

keyFeatures: [
  "Live weather data via OpenWeatherMap API",
  "Search any city worldwide",
  "5-day forecast",
  "Temperature unit toggle",
  "Fully responsive"
],
    preview: "https://weather-1-bice.vercel.app/",
    sourceCode: "https://github.com/SAGE00100/weather_1/tree/main/weather_1",
  },
  {
    id: 2,
    name: "GYM-Management-System",
    image: "/Gym.svg",
   description: "Full-stack gym management platform with member registration, membership plans, payment tracking, role-based access, and complete admin dashboard for managing users, memberships, and renewals.",

keyFeatures: [
  "JWT authentication with password reset via email",
  "Role-based access (Admin/User/Member)",
  "Member registration and profile management",
  "CRUD operations for members and memberships",
  "Membership renewal and expiration tracking",
  "Payment tracking and invoice generation",
  "Admin dashboard with analytics and reports",
  "Search and filter members by status/plan",
  "Image upload for member profiles",
  "Responsive design for all devices"
],
    preview: "gym-mgmt-system.vercel.app",
    sourceCode: "https://github.com/SAGE00100/proj2/tree/main/proj1",
  },
  {
    id: 3,
    name: "Movie App",
    image: "/moviewebapp.svg",
    description:
      "Developed a web application presenting comprehensive movie details,Fetched movie information from TheMoviesDatabase using Axios.",
    keyFeatures: [
      "Advance Search function",
      "Add friend with Email",
      "Send Messages at realtime",
    ],
    preview: "https://movie-app-7.netlify.app/",
    sourceCode: "https://github.com/SAGE00100/movie_mania/tree/main/MoviewebApp-master",
  },
];

export default projects;

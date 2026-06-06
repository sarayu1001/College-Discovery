import { College } from "../types/college";

export const colleges: College[] = [
  {
    id: "1",
    name: "IIT Hyderabad",
    location: "Hyderabad",
    fees: 250000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    overview: "Premier institute with strong placements.",
    placements: { avgPackage: 22, highestPackage: 65 },
    courses: ["CSE", "ECE", "ME"],
    reviews: [{ user: "Rahul", comment: "Amazing campus." }]
  },

  {
    id: "2",
    name: "NIT Warangal",
    location: "Warangal",
    fees: 180000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f",
    overview: "One of the best NITs.",
    placements: { avgPackage: 18, highestPackage: 52 },
    courses: ["CSE", "EEE", "Civil"],
    reviews: [{ user: "Anjali", comment: "Great academics." }]
  },

  {
    id: "3",
    name: "KL University",
    location: "Vijayawada",
    fees: 220000,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    overview: "Strong private university.",
    placements: { avgPackage: 10, highestPackage: 45 },
    courses: ["CSE", "AI", "Data Science"],
    reviews: [{ user: "Priya", comment: "Good opportunities." }]
  },

  {
    id: "4",
    name: "IIT Madras",
    location: "Chennai",
    fees: 250000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
    overview: "India's top engineering institute.",
    placements: { avgPackage: 25, highestPackage: 80 },
    courses: ["CSE", "ECE", "AI"],
    reviews: [{ user: "Kiran", comment: "Best college experience." }]
  },

  {
    id: "5",
    name: "IIT Bombay",
    location: "Mumbai",
    fees: 250000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    overview: "Excellent research ecosystem.",
    placements: { avgPackage: 28, highestPackage: 90 },
    courses: ["CSE", "Mechanical", "Electrical"],
    reviews: [{ user: "Amit", comment: "Fantastic placements." }]
  },

  {
    id: "6",
    name: "IIT Delhi",
    location: "Delhi",
    fees: 250000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    overview: "Top engineering institute.",
    placements: { avgPackage: 27, highestPackage: 85 },
    courses: ["CSE", "AI", "Chemical"],
    reviews: [{ user: "Rohit", comment: "World-class faculty." }]
  },

  {
    id: "7",
    name: "BITS Pilani",
    location: "Pilani",
    fees: 450000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f",
    overview: "Leading private engineering institution.",
    placements: { avgPackage: 20, highestPackage: 60 },
    courses: ["CSE", "ECE", "EEE"],
    reviews: [{ user: "Meera", comment: "Excellent opportunities." }]
  },

  {
    id: "8",
    name: "VIT Vellore",
    location: "Vellore",
    fees: 220000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    overview: "Popular private university.",
    placements: { avgPackage: 9, highestPackage: 44 },
    courses: ["CSE", "IT", "AI"],
    reviews: [{ user: "Sanjay", comment: "Good campus life." }]
  },

  {
    id: "9",
    name: "SRM University",
    location: "Chennai",
    fees: 210000,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
    overview: "Strong industry collaborations.",
    placements: { avgPackage: 8, highestPackage: 38 },
    courses: ["CSE", "ECE", "Civil"],
    reviews: [{ user: "Pooja", comment: "Nice infrastructure." }]
  },

  {
    id: "10",
    name: "Amrita University",
    location: "Coimbatore",
    fees: 200000,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    overview: "Known for academics and research.",
    placements: { avgPackage: 8, highestPackage: 35 },
    courses: ["CSE", "AI", "ECE"],
    reviews: [{ user: "Vikas", comment: "Good faculty." }]
  },

  // 11–30
  ...Array.from({ length: 20 }, (_, i) => ({
    id: String(i + 11),
    name: `Engineering College ${i + 11}`,
    location: [
      "Hyderabad",
      "Bangalore",
      "Mumbai",
      "Delhi",
      "Pune"
    ][i % 5],
    fees: 150000 + i * 5000,
    rating: Number((4 + (i % 10) / 10).toFixed(1)),
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585",
    overview: "Well-established engineering college.",
    placements: {
      avgPackage: 6 + i,
      highestPackage: 20 + i * 2
    },
    courses: ["CSE", "ECE", "Mechanical"],
    reviews: [
      {
        user: "Student",
        comment: "Good learning environment."
      }
    ]
  }))
];
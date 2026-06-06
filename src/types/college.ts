export interface College {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  image: string;
  overview: string;

  placements: {
    avgPackage: number;
    highestPackage: number;
  };

  courses: string[];

  reviews: {
    user: string;
    comment: string;
  }[];
}
export type Photo = {
  id: string;
  src: string;
  alt: string;
  location: string;
  date: string;
};

export type Collection = {
  id: string;
  title: string;
  slug: string;
  photos: Photo[];
};

export const collections: Collection[] = [
  {
    id: 'light',
    title: 'Light',
    slug: 'light',
    photos: [
      {
        id: 'chelsea-1',
        src: '/photos/chelsea-1.JPG',
        alt: 'High-contrast street scene through a glass door in Chelsea, New York',
        location: 'Chelsea, NY',
        date: '2026.07',
      },
      {
        id: 'chelsea-2',
        src: '/photos/chelsea-2.JPG',
        alt: 'Silhouettes of cyclists and pedestrians against a sunlit building in Chelsea, New York',
        location: 'Chelsea, NY',
        date: '2026.07',
      },
    ],
  },
  {
    id: 'love',
    title: 'Love',
    slug: 'love',
    photos: [],
  },
  {
    id: 'polaroids',
    title: 'Polaroids',
    slug: 'polaroids',
    photos: [],
  },
];

export const siteConfig = {
  name: 'April Ding',
  about: {
    headline: 'About',
    details: [
      'b.1998 Hangzhou, China',
      'UCLA Design Media Arts / Bachelor of Arts',
    ],
    description:
      'Using the interplay of light and shadow to explore the rhythm of breath. Currently based in New York City.',
    email: 'apr.ding@gmail.com',
  },
};

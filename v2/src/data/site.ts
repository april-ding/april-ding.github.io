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
        id: 'light-1',
        src: '/photos/light/light-1.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-2',
        src: '/photos/light/light-2.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-3',
        src: '/photos/light/light-3.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-4',
        src: '/photos/light/light-4.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-5',
        src: '/photos/light/light-5.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-6',
        src: '/photos/light/light-6.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-7',
        src: '/photos/light/light-7.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-8',
        src: '/photos/light/light-8.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-9',
        src: '/photos/light/light-9.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-10',
        src: '/photos/light/light-10.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-11',
        src: '/photos/light/light-11.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-12',
        src: '/photos/light/light-12.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-13',
        src: '/photos/light/light-13.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-14',
        src: '/photos/light/light-14.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-15',
        src: '/photos/light/light-15.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-16',
        src: '/photos/light/light-16.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-17',
        src: '/photos/light/light-17.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-18',
        src: '/photos/light/light-18.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
      {
        id: 'light-19',
        src: '/photos/light/light-19.jpg',
        alt: 'Light photography',
        location: '',
        date: '',
      },
    ],
  },
  {
    id: 'love',
    title: 'Love',
    slug: 'love',
    photos: [
      {
        id: 'love-1',
        src: '/photos/love/love-1.jpg',
        alt: 'Love photography',
        location: '',
        date: '',
      },
      {
        id: 'love-2',
        src: '/photos/love/love-2.jpg',
        alt: 'Love photography',
        location: '',
        date: '',
      },
      {
        id: 'love-3',
        src: '/photos/love/love-3.jpg',
        alt: 'Love photography',
        location: '',
        date: '',
      },
      {
        id: 'love-4',
        src: '/photos/love/love-4.jpg',
        alt: 'Love photography',
        location: '',
        date: '',
      },
      {
        id: 'love-5',
        src: '/photos/love/love-5.jpg',
        alt: 'Love photography',
        location: '',
        date: '',
      },
      {
        id: 'love-6',
        src: '/photos/love/love-6.jpg',
        alt: 'Love photography',
        location: '',
        date: '',
      },
      {
        id: 'love-7',
        src: '/photos/love/love-7.jpg',
        alt: 'Love photography',
        location: '',
        date: '',
      },
      {
        id: 'love-8',
        src: '/photos/love/love-8.jpg',
        alt: 'Love photography',
        location: '',
        date: '',
      },
      {
        id: 'love-9',
        src: '/photos/love/love-9.jpg',
        alt: 'Love photography',
        location: '',
        date: '',
      },
      {
        id: 'love-10',
        src: '/photos/love/love-10.jpg',
        alt: 'Love photography',
        location: '',
        date: '',
      },
      {
        id: 'love-11',
        src: '/photos/love/love-11.jpg',
        alt: 'Love photography',
        location: '',
        date: '',
      },
    ],
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

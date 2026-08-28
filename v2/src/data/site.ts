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
        alt: 'Light photography in Hokkaido',
        location: 'Hokkaido',
        date: '2022',
      },
      {
        id: 'light-2',
        src: '/photos/light/light-2.jpg',
        alt: 'Light photography in Iceland',
        location: 'Iceland',
        date: '2022',
      },
      {
        id: 'light-12',
        src: '/photos/light/light-12.jpg',
        alt: 'Light photography in Hangzhou',
        location: 'Hangzhou',
        date: '2025',
      },
      {
        id: 'light-7',
        src: '/photos/light/light-7.jpg',
        alt: 'Light photography at Noguchi Museum, New York',
        location: 'Noguchi Museum, New York',
        date: '2025',
      },
      {
        id: 'light-19',
        src: '/photos/light/light-19.jpg',
        alt: 'Light photography at ICP, New York',
        location: 'ICP, New York',
        date: '2026',
      },
      {
        id: 'light-6',
        src: '/photos/light/light-6.jpg',
        alt: 'Light photography at Jungfrau',
        location: 'Jungfrau',
        date: '2022',
      },
      {
        id: 'light-17',
        src: '/photos/light/light-17.jpg',
        alt: 'Light photography at ICP, New York',
        location: 'ICP, New York',
        date: '2026',
      },
      {
        id: 'light-14',
        src: '/photos/light/light-14.jpg',
        alt: 'Light photography in Dublin',
        location: 'Dublin',
        date: '2026',
      },
      {
        id: 'light-3',
        src: '/photos/light/light-3.jpg',
        alt: 'Light photography in Iceland',
        location: 'Iceland',
        date: '2022',
      },
      {
        id: 'light-9',
        src: '/photos/light/light-9.jpg',
        alt: 'Light photography in Hangzhou',
        location: 'Hangzhou',
        date: '2024',
      },
      {
        id: 'light-4',
        src: '/photos/light/light-4.jpg',
        alt: 'Light photography in Iceland',
        location: 'Iceland',
        date: '2022',
      },
      {
        id: 'light-18',
        src: '/photos/light/light-18.jpg',
        alt: 'Light photography at Tuileries, Paris',
        location: 'Tuileries, Paris',
        date: '2026',
      },
      {
        id: 'light-5',
        src: '/photos/light/light-5.jpg',
        alt: 'Light photography in Iceland',
        location: 'Iceland',
        date: '2022',
      },
      {
        id: 'light-20',
        src: '/photos/light/light-20.jpg',
        alt: 'Light photography at ICP, New York',
        location: 'ICP, New York',
        date: '2026',
      },
      {
        id: 'light-15',
        src: '/photos/light/light-15.jpg',
        alt: 'Light photography at Tuileries, Paris',
        location: 'Tuileries, Paris',
        date: '2026',
      },
      {
        id: 'light-16',
        src: '/photos/light/light-16.jpg',
        alt: 'Light photography at The Met, New York',
        location: 'The Met, New York',
        date: '2026',
      },
      {
        id: 'light-10',
        src: '/photos/light/light-10.jpg',
        alt: 'Light photography in Menton',
        location: 'Menton',
        date: '2025',
      },
      {
        id: 'light-13',
        src: '/photos/light/light-13.jpg',
        alt: 'Light photography at Tuileries, Paris',
        location: 'Tuileries, Paris',
        date: '2026',
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
        alt: 'Love photography in Hangzhou',
        location: 'Hangzhou',
        date: '2021',
      },
      {
        id: 'love-2',
        src: '/photos/love/love-2.jpg',
        alt: 'Love photography in Hangzhou',
        location: 'Hangzhou',
        date: '2021',
      },
      {
        id: 'love-3',
        src: '/photos/love/love-3.jpg',
        alt: 'Love photography at The Met, New York',
        location: 'The Met, New York',
        date: '2025',
      },
      {
        id: 'love-4',
        src: '/photos/love/love-4.jpg',
        alt: 'Love photography at Pumphouse Park, New York',
        location: 'Pumphouse Park, New York',
        date: '2025',
      },
      {
        id: 'love-5',
        src: '/photos/love/love-5.jpg',
        alt: 'Love photography in Hangzhou',
        location: 'Hangzhou',
        date: '2021',
      },
      {
        id: 'love-6',
        src: '/photos/love/love-6.jpg',
        alt: 'Love photography at Tuileries, Paris',
        location: 'Tuileries, Paris',
        date: '2026',
      },
      {
        id: 'love-7',
        src: '/photos/love/love-7.jpg',
        alt: 'Love photography in Hangzhou',
        location: 'Hangzhou',
        date: '2021',
      },
      {
        id: 'love-8',
        src: '/photos/love/love-8.jpg',
        alt: 'Love photography in Milan',
        location: 'Milan',
        date: '2026',
      },
      {
        id: 'love-9',
        src: '/photos/love/love-9.jpg',
        alt: 'Love photography in Milan',
        location: 'Milan',
        date: '2026',
      },
      {
        id: 'love-10',
        src: '/photos/love/love-10.jpg',
        alt: 'Love photography in Hangzhou',
        location: 'Hangzhou',
        date: '2021',
      },
      {
        id: 'love-11',
        src: '/photos/love/love-11.jpg',
        alt: 'Love photography at Dia Beacon, New York',
        location: 'Dia Beacon, New York',
        date: '2025',
      },
    ],
  },
];

export const siteConfig = {
  name: 'April Ding',
  about: {
    headline: 'About',
    paragraphs: [
      'April Ding (b. 1998, Hangzhou, China) currently lives and works in New York City. She holds a Bachelor of Arts degree from UCLA Design Media Arts.',
      'Early in her practice, she believed art needed to express something inherently sophisticated. Over time, however, she became less interested in prescribing what art should be, and more deeply invested in the simple act of paying attention.',
      'Reflecting on her recent archive, she found herself returning to the same enduring subjects: light and love. She considers herself less a creator than an observer. Her photographs are dedicated to preserving what feels calm, intimate, and pure.',
      'For Ding, image making is a method of thinking and communicating—a means of breathing, noticing, and remembering. Yet, the more she photographs, the more she interrogates the act of making itself, acknowledging the inherent futility of attempting to hold onto a moment that is meant to pass. Still, she continues to look.',
    ],
    email: 'apr.ding@gmail.com',
  },
};

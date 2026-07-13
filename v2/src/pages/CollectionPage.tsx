import { PhotoCard } from '../components/PhotoCard';
import { collections } from '../data/site';

type CollectionPageProps = {
  slug: string;
};

export function CollectionPage({ slug }: CollectionPageProps) {
  const collection = collections.find((item) => item.slug === slug);

  if (!collection) {
    return null;
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
      <h1 className="page-title">
        {collection.title}
      </h1>

      <div className="mt-10 flex flex-col gap-16 sm:mt-14 sm:gap-20">
        {collection.photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

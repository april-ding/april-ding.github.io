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
    <div className="ml-auto flex w-[78%] flex-col gap-16 pb-16 pt-0 sm:w-[72%] sm:gap-20 sm:pb-20 lg:w-[68%]">
      {collection.photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

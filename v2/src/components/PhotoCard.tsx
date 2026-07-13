import type { Photo } from '../data/site';

type PhotoCardProps = {
  photo: Photo;
};

export function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <figure className="group">
      <div className="overflow-hidden bg-neutral-50">
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
        />
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-neutral-500">
        <span>{photo.location}</span>
        <span className="tabular-nums">{photo.date}</span>
      </figcaption>
    </figure>
  );
}

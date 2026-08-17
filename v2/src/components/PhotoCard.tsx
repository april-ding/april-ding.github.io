import { useState } from 'react';
import type { Photo } from '../data/site';

type PhotoCardProps = {
  photo: Photo;
};

export function PhotoCard({ photo }: PhotoCardProps) {
  const [isPortrait, setIsPortrait] = useState(false);

  return (
    <figure
      className={[
        'group w-full',
        isPortrait ? 'lg:w-[58%]' : '',
      ].join(' ')}
    >
      <div className="overflow-hidden bg-neutral-50">
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          onLoad={(event) => {
            const { naturalWidth, naturalHeight } = event.currentTarget;
            setIsPortrait(naturalHeight > naturalWidth);
          }}
          className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
        />
      </div>
      <figcaption className="mt-1 flex justify-end font-serif text-sm text-neutral-500">
        <span className="tabular-nums">{photo.date}</span>
      </figcaption>
    </figure>
  );
}

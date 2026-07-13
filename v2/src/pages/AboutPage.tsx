import { siteConfig } from '../data/site';

export function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
      <h1 className="page-title">
        {siteConfig.about.headline}
      </h1>

      <p className="mt-10 text-sm leading-relaxed text-neutral-600 sm:mt-12 sm:text-base">
        {siteConfig.about.description}
      </p>

      <p className="mt-10 text-sm text-neutral-500">
        <a
          href={`mailto:${siteConfig.about.email}`}
          className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900"
        >
          {siteConfig.about.email}
        </a>
      </p>
    </div>
  );
}

import { siteConfig } from '@/lib/siteConfig';

/**
 * Structured data (Schema.org JSON-LD) for GEO / AEO — helps search engines and
 * AI answer engines (Google AI Overviews, ChatGPT, Perplexity, etc.) understand
 * and cite the business accurately.
 */

const PHONE_INTL = siteConfig.phone.replace(/\s/g, '');

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Schema is static and trusted — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    image: `${siteConfig.url}/logo.png`,
    url: siteConfig.url,
    telephone: PHONE_INTL,
    email: siteConfig.email,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.addressLine1,
      addressLocality: 'Argenteuil',
      postalCode: '95100',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.9377154,
      longitude: 2.2191504,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 48.9377154,
        longitude: 2.2191504,
      },
      geoRadius: 40000,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '18:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:30',
        closes: '12:30',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '250',
    },
    sameAs: [
      'https://www.instagram.com/docteurparebrise',
      'https://www.facebook.com/docteurparebrise',
      'https://www.tiktok.com/@docteurparebrise',
      'https://www.linkedin.com/company/docteurparebrise',
    ],
    makesOffer: [
      'Remplacement de pare-brise',
      "Réparation d'impact",
      'Vitrages latéraux et lunette arrière',
      'Rénovation de phares',
      'Pose de vitres teintées',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  };

  return <JsonLd data={data} />;
}

export function FaqJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return <JsonLd data={data} />;
}

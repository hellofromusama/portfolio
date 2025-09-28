import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://usamajaved.com'),
  title: {
    default: 'Usama Javed - Full Stack Developer | Perth, Australia | Web Development Expert',
    template: '%s | Usama Javed - Perth Developer'
  },
  description: 'Award-winning Full Stack Developer in Perth, Western Australia. Specializing in Next.js, React, Node.js, AI integrations, N8N automation, and enterprise solutions. Available for hire in Perth and remote projects across Australia.',
  keywords: [
    'Usama Javed',
    'Full Stack Developer Perth',
    'Web Developer Perth',
    'Software Developer Perth',
    'Perth programmer',
    'Western Australia developer',
    'Australian web developer',
    'Next.js developer Perth',
    'React developer Perth',
    'Node.js developer Perth',
    'AI developer Perth',
    'N8N automation expert',
    'NetSuite developer Australia',
    'ERP developer Perth',
    'Voice AI developer',
    'Perth tech consultant',
    'hire developer Perth',
    'freelance developer Perth',
    'remote developer Australia',
    'software engineer Perth WA',
    'web development services Perth',
    'custom software Perth',
    'digital solutions Perth'
  ],
  authors: [{ name: 'Usama Javed', url: 'https://usamajaved.com' }],
  creator: 'Usama Javed',
  publisher: 'Usama Javed',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://usamajaved.com',
    title: 'Usama Javed - Full Stack Developer | Perth, Australia',
    description: 'Expert Full Stack Developer in Perth, Western Australia. Specializing in modern web technologies, AI integrations, and enterprise solutions.',
    siteName: 'Usama Javed Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Usama Javed - Full Stack Developer Perth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Usama Javed - Full Stack Developer | Perth, Australia',
    description: 'Expert Full Stack Developer in Perth. Specializing in Next.js, React, Node.js, AI, and enterprise solutions.',
    images: ['/og-image.png'],
    creator: '@usamajaved',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://usamajaved.com',
    languages: {
      'en-AU': 'https://usamajaved.com',
      'en-US': 'https://usamajaved.com',
    },
  },
  category: 'technology',
  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Usama Javed',
    alternateName: 'UJ',
    url: 'https://usamajaved.com',
    image: 'https://usamajaved.com/profile.jpg',
    sameAs: [
      'https://github.com/usamajaved',
      'https://linkedin.com/in/usamajaved',
      'https://twitter.com/usamajaved'
    ],
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Perth',
      addressRegion: 'WA',
      addressCountry: 'AU',
      postalCode: '6000'
    },
    email: 'contact@usamajaved.com',
    telephone: '+61-XXX-XXX-XXX',
    knowsAbout: [
      'Web Development',
      'Full Stack Development',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Python',
      'AI Integration',
      'Machine Learning',
      'N8N Automation',
      'NetSuite',
      'ERP Systems',
      'Cloud Computing',
      'AWS',
      'Docker',
      'Kubernetes'
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University Name'
    },
    nationality: {
      '@type': 'Country',
      name: 'Australia'
    },
    description: 'Expert Full Stack Developer based in Perth, Western Australia. Specializing in modern web technologies, AI integrations, and enterprise solutions.'
  };

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://usamajaved.com/#business',
    name: 'Usama Javed - Full Stack Development Services',
    description: 'Professional web development and software engineering services in Perth, Western Australia',
    url: 'https://usamajaved.com',
    telephone: '+61-XXX-XXX-XXX',
    email: 'contact@usamajaved.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Perth CBD',
      addressLocality: 'Perth',
      addressRegion: 'WA',
      postalCode: '6000',
      addressCountry: 'AU'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -31.9505,
      longitude: 115.8605
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Perth'
      },
      {
        '@type': 'State',
        name: 'Western Australia'
      },
      {
        '@type': 'Country',
        name: 'Australia'
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: -31.9505,
        longitude: 115.8605
      },
      geoRadius: '50000'
    }
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://usamajaved.com/#website',
    url: 'https://usamajaved.com',
    name: 'Usama Javed Portfolio',
    description: 'Portfolio website of Usama Javed, Full Stack Developer in Perth, Australia',
    publisher: {
      '@type': 'Person',
      name: 'Usama Javed'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://usamajaved.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    inLanguage: 'en-AU'
  };

  return (
    <html lang="en-AU">
      <head>
        <meta name="geo.region" content="AU-WA" />
        <meta name="geo.placename" content="Perth" />
        <meta name="geo.position" content="-31.9505;115.8605" />
        <meta name="ICBM" content="-31.9505, 115.8605" />
        <meta name="DC.title" content="Usama Javed - Full Stack Developer Perth" />
        <meta name="DC.creator" content="Usama Javed" />
        <meta name="DC.subject" content="Web Development, Software Engineering, Perth, Australia" />
        <meta name="DC.description" content="Expert Full Stack Developer in Perth, Western Australia" />
        <meta name="DC.publisher" content="Usama Javed" />
        <meta name="DC.contributor" content="Usama Javed" />
        <meta name="DC.date" content="2025-01-28" />
        <meta name="DC.type" content="Portfolio" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://usamajaved.com" />
        <meta name="DC.language" content="en-AU" />
        <meta name="DC.coverage" content="Perth, Western Australia" />
        <meta name="DC.rights" content="Copyright 2025 Usama Javed" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const dmSans = localFont({
  src: '../fonts/DMSans.ttf',
  variable: '--font-dm-sans',
});

const cormorant = localFont({
  src: '../fonts/CormorantGaramond.ttf',
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'Frilic Growth System | Sistema de Aquisição de Clientes',
  description:
    'Sistema completo de aquisição de clientes para pequenas e médias empresas. Construa canais previsíveis de crescimento sem depender apenas de indicações.',

  keywords: [
    'marketing digital',
    'aquisição de clientes',
    'geração de leads',
    'growth marketing',
    'software house',
    'tráfego pago',
    'site profissional',
    'google meu negócio',
    'crescimento empresarial',
    'consultoria de marketing',
  ],

  authors: [{ name: 'Frilic' }],

  creator: 'Frilic',

  metadataBase: new URL('https://frilic.com'),

  openGraph: {
    title: 'Frilic Growth System',
    description:
      'Sistema completo de aquisição de clientes para empresas que querem crescer com previsibilidade.',
    url: 'https://frilic.com',
    siteName: 'Frilic',
    locale: 'pt_BR',
    type: 'website',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Frilic Growth System',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Frilic Growth System',
    description:
      'Sistema completo de aquisição de clientes para pequenas e médias empresas.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Frilic',
              url: 'https://frilic.com',
              description:
                'Software House especializada em tecnologia, crescimento digital e aquisição de clientes.',
            }),
          }}
        />
      </body>
    </html>
  );
}

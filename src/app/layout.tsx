import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fayez-mrouj-portfolio.vercel.app";
const PERSON_NAME = "Fayez Ahmad Mrouj";
const PERSON_DESC =
  "International Physics Educator with 28+ years of experience across Jordan and the UAE. Specialist in physics education, educational technology, AI in education, and smart learning.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PERSON_NAME} — International Physics Educator`,
    template: `%s — ${PERSON_NAME}`,
  },
  description: PERSON_DESC,
  keywords: [
    "Fayez Mrouj",
    "Physics Teacher",
    "Physics Educator",
    "International Teacher",
    "Jordan Physics Teacher",
    "UAE Physics Teacher",
    "Educational Technology",
    "AI in Education",
    "Smart Learning",
    "STEM Education",
    "Alef Platform",
    "Distance Learning",
    "Hybrid Learning",
    "Curriculum Planning",
    "Educational Leadership",
  ],
  authors: [{ name: PERSON_NAME }],
  creator: PERSON_NAME,
  publisher: PERSON_NAME,
  icons: {
    icon: "/logo-fayez.png",
    apple: "/logo-fayez.png",
  },
  openGraph: {
    title: `${PERSON_NAME} — International Physics Educator`,
    description: PERSON_DESC,
    url: SITE_URL,
    siteName: `${PERSON_NAME} — Portfolio`,
    images: [
      {
        url: "/portrait.jpg",
        width: 1200,
        height: 630,
        alt: PERSON_NAME,
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSON_NAME} — International Physics Educator`,
    description: PERSON_DESC,
    images: ["/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "education",
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSON_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/portrait.jpg`,
  jobTitle: "International Physics Educator",
  description: PERSON_DESC,
  email: "mailto:fayez.mrouj@gmail.com",
  telephone: "+962-78-0-084-600",
  nationality: { "@type": "Country", name: "Jordan" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Irbid",
    addressCountry: "Jordan",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Yarmouk University",
    address: { "@type": "PostalAddress", addressCountry: "Jordan" },
  },
  knowsAbout: [
    "Physics Education",
    "Science Education",
    "STEM Education",
    "Educational Technology",
    "Artificial Intelligence in Education",
    "Smart Learning",
    "Hybrid Learning",
    "Distance Learning",
    "Curriculum Planning",
    "Assessment",
    "Classroom Management",
    "Educational Leadership",
    "Prompt Engineering",
    "Alef Platform",
    "Microsoft Office",
    "Adobe Photoshop",
    "CorelDRAW",
  ],
  knowsLanguage: ["Arabic", "English"],
  worksFor: {
    "@type": "EducationalOrganization",
    name: "Ministry of Education — Jordan",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Physics Teacher",
    occupationLocation: {
      "@type": "Country",
      name: "Jordan",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

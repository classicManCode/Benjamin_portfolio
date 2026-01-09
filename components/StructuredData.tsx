export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Benjamin Onyia",
    url: "https://benjamin-onyia.vercel.app",
    image: "https://benjamin-onyia.vercel.app/portfolio_image.jpeg",
    sameAs: [
      "https://github.com/classicManCode",
      "https://linkedin.com/in/benjaminonyia",
    ],
    jobTitle: "Fullstack Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description:
      "Benjamin Onyia is a Fullstack Web Developer with 6+ years of experience building scalable web applications using React, Next.js, TypeScript, Node.js, and modern SEO practices.",
    email: "legenderyprime@gmail.com",
    alumniOf: {
      "@type": "Organization",
      name: "University",
    },
    knowsAbout: [
      "Web Development",
      "Fullstack Development",
      "Frontend Development",
      "Backend Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "UI/UX Design",
      "Performance Optimization",
      "Responsive Design",
      "SEO Optimization",
      "Technical SEO",
      "Search Engine Optimization",
      "REST API Development",
      "GraphQL",
      "Database Design",
      "MERN Stack",
      "Web Application Architecture",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Experience",
      about: "6+ years of professional web development experience",
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Benjamin Onyia Portfolio",
    url: "https://benjamin-onyia.vercel.app",
    description:
      "Professional portfolio of Benjamin Onyia - Fullstack Web Developer specializing in React, Next.js, Node.js, and SEO.",
    author: {
      "@type": "Person",
      name: "Benjamin Onyia",
    },
    inLanguage: "en-US",
  };

  const professionalServiceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Benjamin Onyia - Web Development Services",
    url: "https://benjamin-onyia.vercel.app",
    description:
      "Professional web development services including fullstack development, frontend, backend, API development, and SEO optimization.",
    serviceType: [
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Fullstack Development",
      "SEO Services",
      "API Development",
      "Website Optimization",
    ],
    provider: {
      "@type": "Person",
      name: "Benjamin Onyia",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Remote",
      serviceLocation: {
        "@type": "Place",
        name: "Remote / Online",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fullstack Web Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Frontend Development (React, Next.js)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Backend Development (Node.js, Express)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceData),
        }}
      />
    </>
  );
}

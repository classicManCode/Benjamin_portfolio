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
      "Fullstack Web Developer with 6+ years of experience building scalable web applications using React, Next.js, TypeScript, and Node.js.",
    email: "legenderyprime@gmail.com",
    alumniOf: {
      "@type": "Organization",
      name: "University",
    },
    knowsAbout: [
      "Web Development",
      "Fullstack Development",
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
      "Professional portfolio of Benjamin Onyia, Fullstack Web Developer",
    author: {
      "@type": "Person",
      name: "Benjamin Onyia",
    },
    inLanguage: "en-US",
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
    </>
  );
}

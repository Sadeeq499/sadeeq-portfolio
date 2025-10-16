import React from "react";

function Skills() {
  const skillCategories = [
    {
      title: "💻 Programming & Scripting",
      skills: [
        {
          name: "JavaScript",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
        },
        {
          name: "TypeScript",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg",
        },
      ],
    },
    {
      title: "⚙️ Frameworks & Libraries",
      skills: [
        {
          name: "Node.js",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg",
        },
        {
          name: "Express.js",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg",
        },
        {
          name: "React",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
        },
        {
          name: "React Native",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
        },
        {
          name: "Next.js",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg",
        },
      ],
    },
    {
      title: "🧠 State Management & Architecture",
      skills: [
        {
          name: "Redux Toolkit",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/redux.svg",
        },
        {
          name: "Zustand",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zustand.svg",
        },
        {
          name: "React Query",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/reactquery.svg",
        },
        {
          name: "Context API",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
        },
        {
          name: "React Hooks",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
        },
      ],
    },
    {
      title: "🗄️ Databases & ORMs",
      skills: [
        {
          name: "MongoDB",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg",
        },
        {
          name: "MySQL",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg",
        },
        {
          name: "PostgreSQL",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg",
        },
        {
          name: "Prisma ORM",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/prisma.svg",
        },
        {
          name: "Mongoose",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg",
        },
        {
          name: "Redis",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/redis.svg",
        },
      ],
    },
    {
      title: "🧩 DevOps & Infrastructure",
      skills: [
        {
          name: "Docker",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg",
        },
        {
          name: "VPS",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linux.svg",
        },
        {
          name: "PM2",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg",
        },
        {
          name: "NGINX",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nginx.svg",
        },
        {
          name: "Jenkins",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jenkins.svg",
        },
        {
          name: "Certbot",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/letsencrypt.svg",
        },
        {
          name: "Vercel",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg",
        },
        {
          name: "Netlify",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netlify.svg",
        },
        {
          name: "Firebase",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/firebase.svg",
        },
      ],
    },
    {
      title: "🔐 Authentication & Security",
      skills: [
        {
          name: "JWT",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jsonwebtokens.svg",
        },
        {
          name: "OAuth 2.0",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/auth0.svg",
        },
        {
          name: "Google Login",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg",
        },
        {
          name: "Facebook Login",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
        },
        {
          name: "RBAC",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/okta.svg",
        },
        {
          name: "Rate Limiting",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cloudflare.svg",
        },
      ],
    },
    {
      title: "🧰 Developer Tools",
      skills: [
        {
          name: "VS Code",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualstudiocode.svg",
        },
        {
          name: "Chrome DevTools",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlechrome.svg",
        },
        {
          name: "Git",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg",
        },
        {
          name: "GitHub",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
        },
        {
          name: "Postman",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postman.svg",
        },
        {
          name: "Insomnia",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/insomnia.svg",
        },
        {
          name: "Webpack",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/webpack.svg",
        },
        {
          name: "Vite",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vite.svg",
        },
        {
          name: "ESLint",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/eslint.svg",
        },
        {
          name: "Prettier",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/prettier.svg",
        },
      ],
    },
    {
      title: "🧪 Testing & QA",
      skills: [
        {
          name: "Jest",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jest.svg",
        },
        {
          name: "Mocha",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mocha.svg",
        },
        {
          name: "Cypress",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cypress.svg",
        },
        {
          name: "Playwright",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/playwright.svg",
        },
        {
          name: "Postman API",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postman.svg",
        },
      ],
    },
    {
      title: "🎨 UI / UX & Design",
      skills: [
        {
          name: "HTML5",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg",
        },
        {
          name: "CSS3",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg",
        },
        {
          name: "Tailwind CSS",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg",
        },
        {
          name: "Material UI",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mui.svg",
        },
        {
          name: "Framer Motion",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/framer.svg",
        },
        {
          name: "Figma",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg",
        },
      ],
    },
    {
      title: "💳 Payments & Billing",
      skills: [
        {
          name: "Stripe",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg",
        },
        {
          name: "Razorpay",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/razorpay.svg",
        },
        {
          name: "PayPal",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg",
        },
        {
          name: "Webhooks",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/webhooksdotio.svg",
        },
        {
          name: "Subscriptions",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg",
        },
      ],
    },
    {
      title: "🗺️ Maps & Location Services",
      skills: [
        {
          name: "Google Maps",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlemaps.svg",
        },
        {
          name: "Leaflet.js",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/leaflet.svg",
        },
        {
          name: "Mapbox",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mapbox.svg",
        },
      ],
    },
    {
      title: "📂 File & Media Handling",
      skills: [
        {
          name: "Cloudinary",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cloudinary.svg",
        },
        {
          name: "Firebase Storage",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/firebase.svg",
        },
        {
          name: "File Uploads",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazons3.svg",
        },
        {
          name: "PDF Generation",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobeacrobatreader.svg",
        },
        {
          name: "Image Compression",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cloudinary.svg",
        },
      ],
    },
    {
      title: "🚀 Performance & Optimization",
      skills: [
        {
          name: "Code Splitting",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/webpack.svg",
        },
        {
          name: "Lazy Loading",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
        },
        {
          name: "Caching",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/redis.svg",
        },
        {
          name: "SEO Optimization",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg",
        },
        {
          name: "Lighthouse",
          iconUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlechrome.svg",
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">
            My <span className="text-[#FF014F]">Talent</span>
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Professional Skills
          </h2>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-white border-b border-gray-700 pb-2">
                {category.title}
              </h3>

              {/* Skills Grid for this Category */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  return (
                    <div
                      key={skillIndex}
                      className="relative bg-[#1E1E1E] rounded-lg p-4 text-center hover:bg-[#2A2A2A] transition-all duration-300 group border border-gray-800 hover:border-[#FF014F]/30 shadow-lg hover:shadow-[#FF014F]/10 hover:shadow-xl transform hover:-translate-y-1"
                    >
                      {/* Skill Icon */}
                      <div className="flex justify-center mb-3">
                        {skill.iconUrl ? (
                          <div className="w-10 h-10 flex items-center justify-center">
                            <img
                              src={skill.iconUrl}
                              alt={skill.name}
                              className="w-8 h-8 object-contain"
                              style={{
                                filter:
                                  "brightness(0) saturate(100%) invert(1)",
                                opacity: 0.8,
                              }}
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                              {skill.name.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Skill Name */}
                      <h4 className="text-white text-xs font-medium group-hover:text-[#FF014F] transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

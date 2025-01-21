import CanAngoImage from '@/assets/images/canangotrading-image.png'
import HoneyspotImage from '@/assets/images/honeyspot.png'
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import GitHubIcon from '@/assets/icons/arrow-up-right.svg'
import GrainTexture from '@/assets/images/grain.jpg'
import carDashboardStock from '@/assets/images/WFR-CAR-dashboard.jpg'

const professionalExperience = [
  {
    company: "Western Formula Racing",
    year: "2025",
    title: "Dashboard Engineer",
    results: [
      { title: "Designed & built an embedded dashboard " },
      { title: "Meaningful increase in driver performance" },
      { title: "Developed according to a strict rule set" },
    ],
    link: "https://github.com/MOABDeveloper/WFR-Dashboard",
    image: carDashboardStock,
  },
  {
    company: "Can-Ango Trading",
    year: "2022-2023",
    title: "Jr. Financial Analyst",
    results: [
      { title: "Boosted profitability through financial analysis." },
      { title: "Enhanced market share with strategic insights." },
      { title: "Streamlined and Improved reporting with automation tools." },
    ],
    link: "https://www.linkedin.com/company/canango-trading/",
    image: CanAngoImage,
  },
  {
    company: "HoneySpot",
    year: "05/2021-08/2021",
    title: "Budget Analyst Intern",
    results: [
      { title: "Optimized budget reporting, reducing preparation." },
      { title: "Enhanced financial forecasting accuracy for better estimates." },
      { title: "Achieved cost reductions with strategic planning." },
    ],
    link: "https://www.linkedin.com/in/mhsaaad/",
    image: HoneyspotImage,
  },
];

export const Experience = () => {
  return (
  <section className="pb-16 pt-16">
    <div className="container">
      <div className="sticky" style={{top:'80px'}}>
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-300 to-violet-600 text-center bg-clip-text text-transparent">
            Proven Impact
          </p>
        </div>
          <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
            Professional Experience
          </h2>
          <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
            In the pursuit for meaningful work through innovation, showcasing real-world results and a commitment to excellence..
          </p>
        </div>
      <div className="flex flex-col mt-10 gap-20">
        {professionalExperience.map(work => (
          <div key={work.title} style={{top:'300px'}} className="sticky bg-gray-1000 border rounded-3xl  z-0 overflow-hidden after:content-[''] after:absolute after:-z-10  after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 lg:pt-16 lg:px-20">

            <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage: `url(${GrainTexture.src})`}}></div>


            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="flex">
                  <div className="bg-gradient-to-r from-purple-300 to-violet-600 inline-flex font-bold uppercase tracking-widest text-sm gap-2 bg-clip-text text-transparent">
                    <span>{work.company}</span>
                    <span>&bull;</span>
                    <span>{work.year}</span>
                  </div>
                </div>
              <h3 className="font-serif text-2xl mt-2 mb-2">{work.title}</h3>
              <hr className="border-t-2 border-white/5" />
              <ul className="flex flex-col gap-3 mt-4">
                {work.results.map((result, index) => (
                  <li key={`${result.title}-${index}`} className="flex gap-2 text-white/50">
                    <CheckCircleIcon className="size-5" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>

              <a href={work.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-gray-1000 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>Visit Resource</span>
                  <GitHubIcon className="size-4"/>
                </button>
              </a>
              </div>
                <div className="relative">
                  <Image 
                    src={work.image} 
                    alt={work.title}
                    className="mt-8 -mb-4 rounded-3xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                />
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};



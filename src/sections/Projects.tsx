import BSPD from '@/assets/images/BSPD.png'
import PetcareImage from '@/assets/images/petcare.jpg'
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import GitHubIcon from '@/assets/icons/arrow-up-right.svg'
import TTMS from '@/assets/images/TyreSense.png'

import {Card} from '@/components/Card'
const portfolioProjects = [
  {
    company: "Built with: Altium",
    title: "Brake Signal Plausibility Device (BSPD)",
    results: [
      { title: "Validates brake/throttle signals in real time & triggers shutdown." },
      { title: "Reduced PCB footprint and component count by 30%." },
      { title: "Stable and faultless operation." },
    ],
    link: "https://abdulnabi.dev/BSPDDesignDoc.pdf",
    image: BSPD,
  },
  {
    company: "Build in Progress..",
    title: "Tyre Telemetry Monitoring System",
    results: [
      { title: "Provides real-time tyre data to improve tuning and diagnostics." },
      { title: "Built a dev board to validate sensors, power design, and wireless performance." },
      { title: "Utaliizing BLE to transmit wirelessly from tyre to reciever on vehicle" },
    ],
    link: "https://abdulnabi.dev/TyreSenseDevBoard.pdf",
    image: TTMS,
  },
  {
    company: "Built with: Java",
    title: "Virtual Pet Care Game",
    results: [
      { title: "Developed and implemented a virtual pet care simulation application in Java." },
      { title: "Collaborated within a team to apply and utilize software engineering principles." },
      { title: "Designed and integrated an intuitive UI to increase immersion." },
    ],
    link: "https://github.com/MOABDeveloper/VirtualPetCare",
    image: PetcareImage,
  },
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:mt-60 md:mt-80">
    <div className="container">
      <div className="sticky" style={{top:'80px'}}>
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-300 to-violet-600 text-center bg-clip-text text-transparent">
            Real World Results
          </p>
        </div>
          <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
            Featured Projects
          </h2>
          <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          Bringing ideas to life with innovative solutions, creating engaging and impactful experiences.
          </p>
      </div>

      <div className="flex flex-col mt-10 gap-16">
        {portfolioProjects.map(project => (
          <Card key={project.title} className="px-8 pt-8 pb-0 lg:pt-16 lg:px-20 sticky top-[300px]">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="flex">
                  <div className="bg-gradient-to-r from-purple-300 to-violet-600 inline-flex font-bold uppercase tracking-widest text-sm gap-2 bg-clip-text text-transparent">
                    <span>{project.company}</span>
                  </div>
                </div>
              <h3 className="font-serif text-2xl mt-2 mb-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5" />
              <ul className="flex flex-col gap-3 mt-4">
                {project.results.map((result, index) => (
                  <li key={`${result.title}-${index}`} className="flex gap-2 text-white/50">
                    <CheckCircleIcon className="size-5" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>Visit Resource</span>
                  <GitHubIcon className="size-4" />
                </button>
              </a>
              </div>
                <div className="relative">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    className="mt-8 -mb-4 rounded-3xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                />
                </div>
              </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
  );
};

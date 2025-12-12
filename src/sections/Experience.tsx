"use client";

import CanAngoImage from '@/assets/images/canangotrading-image.png';
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import GitHubIcon from '@/assets/icons/arrow-up-right.svg';
import GrainTexture from '@/assets/images/grain.jpg';
import carDashboardStock from '@/assets/images/Dashboard_asm.png';
import steeringWheelRender from "@/assets/images/InCockpitRender.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Card } from '@/components/Card';


const professionalExperience = [
  {
    company: "Western Formula Racing",
    year: "2025-curr",
    title: "Firmware & Cockpit controls Lead",
    results: [
      { title: "Restructuring ECU firmware into modular components to accelerate dev cycles." },
      { title: "Extending sensor support and ECU logic to enhance data accuracy and coverage."},
      { title: "Program multifunction steering wheel for responsive, intuitive in-race control." },
    ],
    link: "https://clear-beard-f56.notion.site/2026-Firmware-Overhaul-238616c6c07580e1a481d6fbdb56af7d",
    image: steeringWheelRender,
  },
  {
    company: "Western Formula Racing",
    year: "2024-2025",
    title: "Dashboard Engineer",
    results: [
      { title: "Develop and deploy an embedded dashboard for real-time telemetry display." },
      { title: "Significantly reduce debugging time by exposing key faults and system states." },
      { title: "Worked with subsystems to ensure useful and accurate telemetry." }
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
];

export const Experience = () => {
  return (
    <section className="pb-16 pt-16">
      <div className="container">
        <div className="sticky" style={{ top: '80px' }}>
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

        <div className="relative mt-16">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '.exp-prev',
              nextEl: '.exp-next',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            spaceBetween={30}
            slidesPerView={1}
            className="experience-swiper"
          >
            {professionalExperience.map((work) => (
              <SwiperSlide key={work.title}>
                <Card className="px-8 pt-8 lg:pt-16 lg:px-20">
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
                          <GitHubIcon className="size-4" />
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
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom arrows positioned outside card */}
          <div className="exp-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white text-3xl">
            ‹
          </div>
          <div className="exp-next absolute -right-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white text-3xl">
            ›
          </div>
        </div>
      </div>
    </section>
  );
};
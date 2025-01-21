"use client";
import {SectionHeader} from '@/components/SectionHeader';
import {Card} from '@/components/Card';
import { CardHeader } from '@/components/CardHeader';
import { DevIcons } from '@/components/DevIcons';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Marquee from "react-fast-marquee";

import BookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import LocationImage from '@/assets/images/locationMap.png';



import SmileMemoji from '@/assets/images/locationPin.png';
import CplusplusIcon from '@/assets/icons/cplusplus.svg';
import CIcon from '@/assets/icons/c.svg';
import JavaIcon from '@/assets/icons/java.svg';
import PythonIcon from '@/assets/icons/Python.svg'
import ReactIcon from '@/assets/icons/React.svg';
import HTMLIcon from '@/assets/icons/HTML5.svg';
import CSSIcon from '@/assets/icons/css.svg';
import ARMIcon from '@/assets/icons/arm.svg';
import SQLIcon from '@/assets/icons/sql.svg';
import MysqlIcon from '@/assets/icons/MySQL.svg';
import GitlabIcon from '@/assets/icons/GitLab.svg'
import LinuxIcon from '@/assets/icons/Linux.svg'
import JiraIcon from '@/assets/icons/Jira.svg';
import BashIcon from '@/assets/icons/Bash.svg'
import BitBucketIcon from '@/assets/icons/BitBucket.svg'
import JetBrainsIcon from '@/assets/icons/JetBrains.svg'
import SlackIcon from '@/assets/icons/Slack.svg'
import VSCIcon from '@/assets/icons/VSC.svg'

import F1Icon from '@/assets/icons/motorsport.png'
import CarsIcon from '@/assets/icons/cars.png'
import FilmIcon from '@/assets/icons/films.png'
import MusicIcon from '@/assets/icons/music.png'
import CookingIcon from '@/assets/icons/cooking.png'
import InvestingIcon from '@/assets/icons/investing.png'

const toolBoxItems = [
{
  title: 'C++',
  icon: CplusplusIcon,
},
{
  title: 'C',
  icon: CIcon,
},
{
  title: 'Java',
  icon: JavaIcon,
},
{
  title: 'Python',
  icon: PythonIcon,
},
{
  title: 'React',
  icon: ReactIcon,
},
{
  title: 'HTML',
  icon: HTMLIcon,
},
{
  title: 'CSS',
  icon: CSSIcon,
},
{
  title: 'ARM',
  icon: ARMIcon,
},
{
  title: 'SQL',
  icon: SQLIcon,
},
{
  title: 'MySQL',
  icon: MysqlIcon,
},
{
  title: 'VSC',
  icon: VSCIcon,
},
{
  title: 'GitLab',
  icon: GitlabIcon,
},
{
  title: 'Linux',
  icon: LinuxIcon,
},
{
  title: 'Jira',
  icon: JiraIcon,
},
{
  title: 'Bash',
  icon: BashIcon,
},
{
  title: 'BitBucket',
  icon: BitBucketIcon,
},
{
  title: 'JetBrains',
  icon: JetBrainsIcon,
},
{
  title: 'Slack',
  icon: SlackIcon,
},
]

const hobbies = [
  {
    title: 'Motorsport',
    emoji: F1Icon,
    left: '50%',
    top: '40%',
  },
  {
    title: 'Music',
    emoji: MusicIcon,
    left: '10%',
    top: '60%',
  },
  {
    title: 'Cars',
    emoji: CarsIcon,
    left: '60%',
    top: '10%',
  },
  {
    title: 'Cooking',
    emoji: CookingIcon,
    left: '9%',
    top: '5%',
  },
  {
    title: 'Film',
    emoji: FilmIcon,
    left: '30%',
    top: '26%',
  },
  {
    title: 'Finance',
    emoji: InvestingIcon,
    left: '70%',
    top: '70%',
  },
]



export const AboutSection = () => {
  const beyondTheCodeRef = useRef(null);
  return (
    <div className="py-16">
      <div className='container'>
        <SectionHeader
          eyebrow="About Me"
          title="A Peak Into My World"
          description="Learn more about who I am and what I love!"
        />
        
        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5 '>
            {/* SECTION ABOUT MY CURRENT TV-SHOWS */}
              <Card className='h-[320px] sm:col-span-3 md:col-span-2'>
                <CardHeader title="Book Hightlight" description="Favorite book I read in the last year"/>
                <div className='w-40 mx-auto mt-2'>
                  <Image src={BookImage} alt="Book Cover"/>
                </div>
              </Card>

            {/* SECTION ABOUT LANGUAGES AND FRAMEWORKS*/}
            <Card className='h-[320px] col-span-3'>
              <CardHeader 
                title="My Toolbox" 
                description="Some of the technologies at my disposable"
                className='mb-2'
              />
              <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mt-4">
              <Marquee speed={90} direction='right' pauseOnClick>
                <div className="flex flex-none py-1 gap-4">
                  {toolBoxItems.map((item) => (
                    <div
                      key={item.title}
                      className="inline-flex items-center font-semibold size-xl gap-2 mx-2 py-2 px-4  rounded-lg text-white/60"
                    >
                      <DevIcons component={item.icon} />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
            </Card>
          </div>

          {/* SECTION ABOUT HOBBIES*/}
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5'>
            <Card className='h-[320px] flex flex-col col-span-3'>
              <CardHeader
                title="Beyond the Code"
                description="Explore my hobbies and interests outside of code"
                className='px-6 py-6'
              />
              <div className='relative flex-1' ref={beyondTheCodeRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title} // Add the key prop here
                    className='inline-flex gap-2 items-center px-5 bg-gradient-to-r from-purple-600 to-purple-900 rounded-full py-1.5 absolute'
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={beyondTheCodeRef}
                  >
                    <span className='font-semibold text-white'>
                      {hobby.title}
                    </span>
                    <Image
                      src={hobby.emoji}
                      alt={`Emoji Representing hobby: ${hobby.title}`}
                      width={18}
                      height={18}
                    />
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* SECTION ABOUT MY CURRENT LOCATION*/}  
            <Card className='h-[320px] relative sm:col-span-3 md:col-span-2'>
              <Image className='h-full w-full object-cover' src={LocationImage} alt="Location currentlt residing in, London Ontario"/>
              <div className='absolute top-[47%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                <Image className='size-10' src={SmileMemoji} alt="Memoji used as a pin marker on the map to mark my location"/>
              </div>
            </Card>
          </div>  
        </div>
      </div>
    </div>
  );
};

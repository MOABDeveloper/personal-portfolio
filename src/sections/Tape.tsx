import StarIcon from "@/assets/icons/star.svg"
import Marquee from "react-fast-marquee";

const softSkills = [
  "Adaptable",
  "Creative",
  "Fast Learner",
  "Motivated",
  "Flexable",
  "Hard Working",
  "Problem Solver",
  "Critical Thinking",
  "Team Player",
  "Effective Communicator",
  "Empathetic",
  "Detail-Oriented",
  "Leadership",
  "Organized",
  "Time Management",
  "Collaborative",
  "Open-Minded",
  "Resilient",
  "Dependable",
  "Innovative",
  "Self-Starter",
]


export const TapeSection = () => {
  return (
  <div className="py-16">
    <div className="bg-gradient-to-r from-purple-300 to-violet-600 overflow-x-clip -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Marquee speed={150} >
            <div className='flex flex-none gap-4 py-2'>
              {softSkills.map((skill) => (
                <div key={skill} className='inline-flex gap-4 items-center'>
                    <span className="text-gray-900 uppercase font-extrabold text-m ">
                      {skill}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12"/>
                </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  </div>
  );
};

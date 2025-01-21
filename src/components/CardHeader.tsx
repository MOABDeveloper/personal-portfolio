import StarIcon from "@/assets/icons/star.svg"
import { twMerge } from "tailwind-merge";

export const CardHeader = ({title, description, className,}: {
    title: string;
    description: string;
    className?: string;
}) => {
    return (
        <div className={twMerge('flex flex-col text-center p-4',className)}>
            <div className='inline-flex items-center gap-2 justify-center mt-2'>
            <div className='bg-green-400 size-3 rounded-full rounded-large pulse'></div>
                <h3 className='font-serif text-3xl'>
                    {title}
                </h3>
            </div>
            <p className='text-sm text-white/60 mt-2 justify-center'>
                {description}
            </p>
        </div>
    );
}
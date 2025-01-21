import GrainTexture from '@/assets/images/grain.jpg'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = ({className, children
}: ComponentPropsWithoutRef<'div'>) => {
    return(
    <div className={twMerge("bg-gray-1000 border rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:-z-10  after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20",className)}>
        <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage: `url(${GrainTexture.src})`}}>
        </div>
        {children}
    </div>

    );
};
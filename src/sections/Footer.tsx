import ArrowRight from '@/assets/icons/arrow-up-right.svg'

const FooterLinks = [
{
  title: 'LinkedIn',
  link: 'https://www.linkedin.com/in/abdulnabim/',
},
{
  title: 'GitHub',
  link: 'https://github.com/MOABDeveloper',
}
]

export const Footer = () => {
  return (
  <footer>
    <div className="container">
      <div className='border-t border-white py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
        <div className='text-white/40'>&copy; 2025. All rights reserved. | Images are for Illustrative purposes only. </div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {FooterLinks.map(link => (
              <a href="#" key={link.title} className='inline-flex items-center gap-1.5'>
                <span className='font-semibold'>{link.title}</span>
                <ArrowRight className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
    </div>
  </footer>
  );
};
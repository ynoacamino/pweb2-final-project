import FacebookLogo from '@/components/icons/social/FacebookLogo';
import InstagramLogo from '@/components/icons/social/InstagramLogo';
import TwitterLogo from '@/components/icons/social/TwitterLogo';
import TiktokLogo from '@/components/icons/social/TiktokLogo';
import BrandTitle from './BrandTitle';

const SOCIALS = [
  {
    Icon: FacebookLogo,
    href: 'https://www.facebook.com/learning',
    label: 'Facebook',
  },
  {
    Icon: InstagramLogo,
    href: 'https://www.instagram.com/learning',
    label: 'Instagram',
  },
  {
    Icon: TwitterLogo,
    href: 'https://www.twitter.com/learning',
    label: 'Twitter',
  },
  {
    Icon: TiktokLogo,
    href: 'https://www.tiktok.com/@learning',
    label: 'TikTok',
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-foreground/10 px-6 flex justify-between items-start py-6">
      <div className="flex flex-col gap-4">
        <BrandTitle />
        <span>
          © 2024 Learning. Todos los derechos reservados.
        </span>
      </div>
      <ul className="flex gap-6 items-center justify-center">
        {
          SOCIALS.map(({ Icon, href, label }) => (
            <li key={label}>
              <a href={href}>
                <Icon className="w-10 h-auto" />
                <span className="sr-only">{label}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </footer>
  );
}

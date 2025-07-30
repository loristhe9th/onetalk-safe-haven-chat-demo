import logoSrc from '@/assets/logo.png';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <img
      src={logoSrc}
      alt="OneTalk Logo"
      className={cn("w-auto h-auto", className)}
    />
  );
};

export default Logo;

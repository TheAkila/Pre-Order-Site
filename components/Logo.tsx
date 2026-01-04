import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-28 h-auto',
    md: 'w-40 h-auto',
    lg: 'w-56 h-auto',
    xl: 'w-72 sm:w-80 md:w-96 lg:w-[28rem] h-auto',
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Image
        src="/images/lifting-social-logo.svg"
        alt="Lifting Social"
        width={680}
        height={360}
        className="w-full h-auto"
        priority
      />
    </div>
  );
}

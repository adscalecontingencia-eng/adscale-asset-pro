import { Shield } from "lucide-react";

interface LogoProps {
  className?: string;
  iconSize?: number;
}

const Logo = ({ className = "", iconSize = 20 }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <Shield
          className="text-primary"
          style={{ width: iconSize, height: iconSize }}
          fill="currentColor"
          strokeWidth={1.5}
        />
      </div>
      <span className="font-display font-bold text-xl tracking-tight">
        <span className="text-foreground">AD</span>
        <span className="text-primary">Scale</span>
      </span>
    </div>
  );
};

export default Logo;

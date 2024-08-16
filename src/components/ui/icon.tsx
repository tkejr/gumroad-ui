import React from 'react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = '', className = '' }) => {
  const iconPath = `/icons/${name}.svg`;
  console.log(iconPath);

  return (
    <span 
      className={`inline-block ${className}`}
      style={{
        width: size,
        height: size,
        WebkitMask: `url(${iconPath}) no-repeat center / contain`,
        mask: `url(${iconPath}) no-repeat center / contain`,
      }}
    />
  );
};

export default Icon;

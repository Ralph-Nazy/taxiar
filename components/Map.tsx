import React from 'react';

interface MapProps {
  src: string;
  width: string;
  height: string;
}

const Map: React.FC<MapProps> = ({ src, width, height }) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
    />
  );
};

export default Map;

import { useState, useEffect, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

type Orientation = 'landscape' | 'portrait';

export const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState<Orientation>('landscape');

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width < height) {
      setOrientation('portrait');
    } else {
      setOrientation('landscape');
    }
  }, [height, width]);

  const menuWidth = useMemo(() => (width * 60) / 100, [width]);

  return {
    deviceOrientation: orientation,
    windowHeight: height,
    windowWidth: width,
    menuWidth,
  };
};

export default useDeviceOrientation;

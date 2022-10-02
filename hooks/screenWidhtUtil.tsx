import * as React from 'react';

const screenWidthUtil = ({ percent }: { percent?: number }) => {
  const [screenWidth, setScreenWidth] = React.useState(850);

  React.useEffect(() => {
    setScreenWidth(window?.innerWidth);
  }, []);

  console.log({ screenWidth });
  if (percent) return screenWidth * (percent / 100);

  return screenWidth;
};

export default screenWidthUtil;

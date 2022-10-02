import { useRouter } from 'next/router';
import * as React from 'react';

const useCurrentRoute = () => {
  let route;
  return useRouter().pathname;
};

export default useCurrentRoute;

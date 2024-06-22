import { alpha } from '@mui/material/styles';

import { grey, info, error, common, primary, success, warning, secondary } from './palette';


export function customShadows() {
  const transparent = alpha(grey[500], 0.16);

  return {
    z1: `0 1px 2px 0 ${transparent}`,
    z4: `0 4px 8px 0 ${transparent}`,
    z8: `0 8px 16px 0 ${transparent}`,
    z12: `0 12px 24px -4px ${transparent}`,
    z16: `0 16px 32px -4px ${transparent}`,
    z20: `0 20px 40px -4px ${transparent}`,
    z24: `0 24px 48px 0 ${transparent}`,
    
    // Table 的 shadow 調色
    card: `0 0 50px #0ef`,

  };
}

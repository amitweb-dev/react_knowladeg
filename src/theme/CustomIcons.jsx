import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export function GoogleIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M21.35 11.1h-9.18v2.98h5.27c-.23 1.24-1.39 3.65-5.27 3.65-3.17 0-5.76-2.62-5.76-5.85s2.59-5.85 5.76-5.85c1.81 0 3.02.77 3.72 1.43l2.54-2.47C16.18 4.5 14.36 3.5 12.17 3.5 6.98 3.5 2.5 7.98 2.5 13.17s4.48 9.67 9.67 9.67c5.59 0 9.27-3.92 9.27-9.45 0-.63-.07-1.25-.19-1.84z" />
    </SvgIcon>
  );
}

export function FacebookIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
    </SvgIcon>
  );
}

export function SitemarkIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#1976d2" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">S</text>
    </SvgIcon>
  );
}

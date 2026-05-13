import { Mail, Send } from "lucide-react";
export { Mail, Send };

const base = "h-4 w-4";
type P = React.SVGProps<SVGSVGElement> & { className?: string };

export const Linkedin = ({ className = base, ...p }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...p}>
    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zM10 9.5h3.8v1.6h.05c.53-.95 1.84-1.95 3.8-1.95 4.06 0 4.8 2.5 4.8 5.75V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21h-4V9.5z"/>
  </svg>
);
export const Github = ({ className = base, ...p }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...p}>
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.4-4.04-1.4-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.77-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.31-.54-1.54.12-3.21 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.67.25 2.9.12 3.21.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5z"/>
  </svg>
);
export const Twitter = ({ className = base, ...p }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...p}>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.79l-4.78-6.27L4.8 22H2l7.02-8.02L2 2h6.91l4.34 5.78L18.244 2zm-2.38 18h1.88L7.21 4H5.2l10.66 16z"/>
  </svg>
);

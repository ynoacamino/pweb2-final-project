import { cn } from '@/libraries/utils';

export default function Icon1({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 94 115"
      className={cn('fill-current', className)}
    >
      <path d="M46.875 0L0 20.8333V52.0833C0 80.9896 20 108.021 46.875 114.583C73.75 108.021 93.75 80.9896 93.75 52.0833V20.8333L46.875 0ZM46.875 57.2396H83.3333C80.5729 78.6979 66.25 97.8125 46.875 103.802V57.2917H10.4167V27.6042L46.875 11.4063V57.2396Z" fill="fillCurrent" />
    </svg>
  );
}

import { cn } from '@/libraries/utils';

export default function Logo({ className = '' }:{ className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="512"
      height="512"
      className={cn('fill-current', className)}
    >
      <path d="m18.5,0H5.5C2.468,0,0,2.467,0,5.5v13c0,3.033,2.468,5.5,5.5,5.5h13c3.032,0,5.5-2.467,5.5-5.5V5.5c0-3.033-2.468-5.5-5.5-5.5Zm2.5,18.5c0,1.378-1.121,2.5-2.5,2.5H5.5c-1.379,0-2.5-1.122-2.5-2.5V5.5c0-1.378,1.121-2.5,2.5-2.5h13c1.379,0,2.5,1.122,2.5,2.5v13Zm-3-1c0,.829-.672,1.5-1.5,1.5h-7c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-.829.672-1.5,1.5-1.5s1.5.671,1.5,1.5v9c0,.276.225.5.5.5h7c.828,0,1.5.671,1.5,1.5Z" />
    </svg>
  );
}

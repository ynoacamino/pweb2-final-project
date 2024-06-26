import { cn } from '@/libraries/utils';

export default function Icon2({ className = '' }:{ className?: string }) {
  return (
    <svg
      className={cn('fill-current', className)}
      viewBox="0 0 24 24"
    >
      <path d="m20,0H5c-1.654,0-3,1.346-3,3v18c0,1.654,1.346,3,3,3v-2c-.552,0-1-.448-1-1s.448-1,1-1h2v4l2.5-2.5,2.5,2.5v-4h8v2h-6v2h8V2c0-1.103-.897-2-2-2ZM4,18.172V3c0-.552.448-1,1-1h1v16h-1c-.351,0-.687.061-1,.172Zm4-.172V2h12v16h-12Z" />
    </svg>

  );
}

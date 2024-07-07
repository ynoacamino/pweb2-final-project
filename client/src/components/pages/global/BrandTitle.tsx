import Logo from '@/components/icons/Logo';

export default function BrandTitle() {
  return (
    <div className="text-primary text-4xl font-bold flex gap-1">
      <Logo className="w-10 h-10" />
      <span>
        earning
      </span>
    </div>
  );
}

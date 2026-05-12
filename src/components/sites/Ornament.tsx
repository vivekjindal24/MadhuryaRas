export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[color:var(--gold)]" />
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gold">
        <path d="M12 2c1.5 4 4 6 8 6-4 0-6.5 2-8 6-1.5-4-4-6-8-6 4 0 6.5-2 8-6Z" fill="currentColor" opacity=".9"/>
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[color:var(--gold)]" />
    </div>
  );
}

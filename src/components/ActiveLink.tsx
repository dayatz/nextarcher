'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function ActiveLink({ children, href, className }: {
  children: React.ReactNode,
  href: string
  className?: string,
}) {
  const pathname = usePathname();
  const isActive = pathname === href

  return (
    <Link href={href} className={`
      flex-1 h-full grid place-items-center
      ${isActive ? 'border-t-2 border-[var(--color-primary)] bg-slate-100' : 'bg-white'}
      ${className}`}>
      {children}
    </Link>
  );
}

export default ActiveLink;

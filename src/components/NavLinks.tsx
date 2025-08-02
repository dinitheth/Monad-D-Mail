
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Inbox, Send, Bot, Users, Contact, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLinksProps {
  onLinkClick?: () => void;
}

const navLinks = [
  { href: '/inbox', label: 'Public Feed', icon: Inbox },
  { href: '#', label: 'Inbox', icon: Inbox, disabled: true },
  { href: '/send', label: 'Send', icon: Send },
  { href: '/contacts', label: 'Contacts', icon: Contact },
  { href: 'https://forms.gle/kkMMvV2PmALbTC2m8', label: 'FeedBack', icon: MessageSquare, isExternal: true },
];

export function NavLinks({ onLinkClick }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      <div className="flex items-center gap-2 mb-10">
        <Bot className="h-8 w-8 text-primary" />
        <h1 className="text-xl font-bold font-headline text-foreground">
          Monad D-Mail
        </h1>
      </div>
      <nav className="space-y-2">
        {navLinks.map(({ href, label, icon: Icon, disabled, isExternal }) => {
          const isActive = !isExternal && (pathname === href || (href === '/inbox' && pathname === '/'));
          
          const commonClasses = cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all",
            !disabled && "hover:text-primary hover:bg-muted",
            isActive && "bg-muted text-primary",
            disabled && "opacity-50 cursor-not-allowed"
          );

          const linkContent = (
             <>
              <Icon className="h-4 w-4" />
              <span>{label}</span>
              {disabled && <span className="text-xs ml-auto">(Soon)</span>}
            </>
          );

          if (isExternal) {
            return (
              <a
                key={href + label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onLinkClick}
                className={commonClasses}
              >
                {linkContent}
              </a>
            )
          }

          return (
            <Link
              key={href + label}
              href={disabled ? '#' : href}
              onClick={onLinkClick}
              className={commonClasses}
            >
              {linkContent}
            </Link>
          );
        })}
      </nav>
    </>
  );
}

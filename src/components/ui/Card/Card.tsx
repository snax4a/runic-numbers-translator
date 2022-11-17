import { cn } from '@/lib/classnames';

import styles from './Card.module.css';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return <article className={cn(styles.card, className)}>{children}</article>;
}

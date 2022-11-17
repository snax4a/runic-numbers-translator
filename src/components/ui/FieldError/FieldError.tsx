import { cn } from '@/lib/classnames';

import styles from './FieldError.module.css';

interface FieldErrorProps {
  className?: string;
  children: React.ReactNode;
}

export default function FieldError({ className, children }: FieldErrorProps) {
  return <p className={cn(styles.fieldError, className)}>{children}</p>;
}

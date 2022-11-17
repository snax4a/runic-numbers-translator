import { cn } from '@/lib/classnames';

import styles from './Label.module.css';

interface LabelProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function Label(props: LabelProps) {
  return (
    <label htmlFor={props.id} className={cn(styles.label, props.className)}>
      {props.children}
    </label>
  );
}

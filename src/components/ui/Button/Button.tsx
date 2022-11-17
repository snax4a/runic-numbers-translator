import { forwardRef } from 'react';

import { cn } from '@/lib/classnames';

import LoadingDots from '@/components/ui/LoadingDots';

import styles from './Button.module.css';

interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  > {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    loading,
    className,
    disabled,
    type = 'button',
    ...passThroughProps
  } = props;

  return (
    <button
      ref={ref}
      type={type}
      {...passThroughProps}
      disabled={disabled || loading}
      className={cn(styles.button, { [styles.disabled]: disabled }, className)}
    >
      {loading ? <LoadingDots /> : children}
    </button>
  );
});

export default Button;

import { forwardRef } from 'react';

import { cn } from '@/lib/classnames';

import FieldError from '@/components/ui/FieldError';
import Label from '@/components/ui/Label';

import styles from './InputField.module.css';

interface InputFieldProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'ref'
  > {
  id: string;
  label?: string | React.ReactNode;
  error?: boolean | string | React.ReactNode;
  autoComplete?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { id, label, error, type = 'text', className, autoComplete, disabled, ...props },
    ref
  ) => {
    return (
      <div className={cn(styles.root, className)}>
        {!!label && <Label id={id}>{label}</Label>}
        <input
          {...props}
          id={id}
          ref={ref}
          type={type}
          disabled={disabled}
          className={cn(
            styles.input,
            { [styles.error]: !!error },
            { [styles.disabled]: disabled }
          )}
          // Browser's treat autocomplete "off" as "on"
          // https://bugs.chromium.org/p/chromium/issues/detail?id=468153#c164
          autoComplete={autoComplete === 'off' ? 'turn-off-autocomplete' : autoComplete}
        />
        {!!error && <FieldError>{error}</FieldError>}
      </div>
    );
  }
);

export default InputField;

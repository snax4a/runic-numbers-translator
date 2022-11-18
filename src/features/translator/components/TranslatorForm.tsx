import { z } from 'zod';

import useZodForm from '@/hooks/useZodForm';

import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';

export const translatorFormSchema = z.object({
  decimalNumber: z.number().positive().lte(9999),
});

export type TranslatorFormValues = z.TypeOf<typeof translatorFormSchema>;

interface TranslatorFormProps {
  id?: string;
  className?: string;
  isSubmitting?: boolean;
  defaultValues?: Partial<TranslatorFormValues>;
  onSubmit: (data: TranslatorFormValues) => void;
}

export default function TranslatorForm({
  id,
  className,
  defaultValues,
  isSubmitting,
  onSubmit,
}: TranslatorFormProps) {
  const { formState, register, handleSubmit } = useZodForm({
    defaultValues,
    schema: translatorFormSchema,
    reValidateMode: 'onSubmit',
  });

  return (
    <form id={id} className={className} onSubmit={handleSubmit(onSubmit)}>
      <InputField
        required
        min={1}
        max={9999}
        type='number'
        id='decimalNumber'
        label='Decimal number'
        error={formState.errors.decimalNumber?.message}
        placeholder='Please input your number'
        {...register('decimalNumber', { valueAsNumber: true })}
      />
      <Button type='submit' disabled={isSubmitting} loading={isSubmitting}>
        GET RUNIC REPRESENTATION
      </Button>
    </form>
  );
}

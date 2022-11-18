import RunicRepresentation from '@/features/translator/components/RunicRepresentation';
import TranslatorForm from '@/features/translator/components/TranslatorForm';
import { TranslatorFormValues } from '@/features/translator/components/TranslatorForm';
import useRunicTranslator from '@/features/translator/hooks/useRunicTranslator';

import styles from './TranslatorView.module.css';

export default function TranslatorView() {
  const { translateAsync, translationResult } = useRunicTranslator();

  async function handleSubmitForm(data: TranslatorFormValues) {
    await translateAsync(data.decimalNumber);
  }

  return (
    <main className={styles.root}>
      <TranslatorForm className={styles.form} onSubmit={handleSubmitForm} />
      {translationResult && <RunicRepresentation svgPaths={translationResult} />}
    </main>
  );
}

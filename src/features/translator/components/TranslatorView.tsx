import TranslatorForm, {
  TranslatorFormValues,
} from '@/features/translator/components/TranslatorForm';

import styles from './TranslatorView.module.css';

export default function TranslatorView() {
  function handleSubmitForm(data: TranslatorFormValues) {
    console.log(data);
  }

  return (
    <main>
      <TranslatorForm className={styles.form} onSubmit={handleSubmitForm} />
    </main>
  );
}

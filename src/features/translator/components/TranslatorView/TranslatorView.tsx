import { runicRepresentations } from '@/data/runic-representations';

import RunicRepresentation from '@/features/translator/components/RunicRepresentation';
import TranslatorForm from '@/features/translator/components/TranslatorForm';
import { TranslatorFormValues } from '@/features/translator/components/TranslatorForm';

import styles from './TranslatorView.module.css';

export default function TranslatorView() {
  function handleSubmitForm(data: TranslatorFormValues) {
    console.log(data);
  }

  return (
    <main>
      <TranslatorForm className={styles.form} onSubmit={handleSubmitForm} />
      <RunicRepresentation pathCommands={runicRepresentations[0].pathCommands} />
    </main>
  );
}

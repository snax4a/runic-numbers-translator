import StandardLayout from '@/components/layouts/StandardLayout';
import Card from '@/components/ui/Card';

import TranslatorView from '@/features/translator/components/TranslatorView';

export default function App() {
  return (
    <StandardLayout>
      <Card>
        <TranslatorView />
      </Card>
    </StandardLayout>
  );
}

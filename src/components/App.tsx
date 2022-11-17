import StandardLayout from '@/components/layouts/StandardLayout';
import Card from '@/components/ui/Card';

export default function App() {
  return (
    <StandardLayout>
      <Card>
        <p>Hello World</p>
        <input type='text' />
        <h1>test</h1>
        <h3>test</h3>
      </Card>
    </StandardLayout>
  );
}

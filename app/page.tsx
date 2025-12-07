import Dashboard from '@/components/Dashboard';
import { curriculum } from '@/data/curriculum';

export default function Home() {
  return (
    <main>
      <Dashboard weeks={curriculum.weeks} />
    </main>
  );
}


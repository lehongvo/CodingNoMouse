import Dashboard from '@/components/Dashboard';
import SyncStatus from '@/components/SyncStatus';
import { curriculum } from '@/data/curriculum';
import { verifyAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const isAuthenticated = await verifyAuth();
  
  if (!isAuthenticated) {
    redirect('/login');
  }

  return (
    <main>
      <Dashboard weeks={curriculum.weeks} />
      <SyncStatus />
    </main>
  );
}


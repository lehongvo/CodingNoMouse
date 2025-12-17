import Dashboard from '@/components/Dashboard';
import Navigation from '@/components/Navigation';
import SyncStatus from '@/components/SyncStatus';
import { curriculumTesterComplete } from '@/data/curriculum-tester-complete';
import { verifyAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function TesterPage() {
  const isAuthenticated = await verifyAuth();
  
  if (!isAuthenticated) {
    redirect('/login');
  }

  return (
    <main>
      <Navigation />
      <div className="pt-16">
        <Dashboard 
          weeks={curriculumTesterComplete.weeks} 
          curriculum={curriculumTesterComplete}
          title="🧪 Manual Tester"
          description="Lộ trình học Manual Testing từ cơ bản đến nâng cao - Sẵn sàng đi làm sau 8 tháng"
        />
        <SyncStatus />
      </div>
    </main>
  );
}


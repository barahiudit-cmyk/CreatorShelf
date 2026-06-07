import DashboardLayout from './DashboardLayout';
import DashboardOverview from '@/components/dashboards/pages/overview';

export default function Page() {
  return (
    <DashboardLayout>
      <DashboardOverview />
    </DashboardLayout>
  );
}
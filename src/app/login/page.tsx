import { PageLayout } from '@/components/layout/page-layout';
import { LoginForm } from '@/features/auth';

export default function LoginPage() {
  return (
    <PageLayout title="Login">
      <LoginForm />
    </PageLayout>
  );
}

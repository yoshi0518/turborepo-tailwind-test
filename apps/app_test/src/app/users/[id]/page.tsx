import { UserDetailPage } from '@/features/users/pages/UserDetailPage';

const Page = ({ params }: { params: { id: string } }) => <UserDetailPage id={params.id} />;

export default Page;

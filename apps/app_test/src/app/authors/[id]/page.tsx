import { AuthorDetailPage } from '@/features/authors/pages/AuthorDetailPage';

const Page = ({ params }: { params: { id: string } }) => <AuthorDetailPage id={params.id} />;

export default Page;

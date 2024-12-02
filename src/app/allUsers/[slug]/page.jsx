import UserDetails from "@/components/layouts/UserDetails/UserDetails";

const Page = async ({ params }) => {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  return <UserDetails slug={slug} />;
};

export default Page;

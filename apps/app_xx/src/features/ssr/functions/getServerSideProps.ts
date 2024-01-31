export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  console.log('=== SSR =====');
  console.log(users);

  return { props: { users } };
};

import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </>
  );
};

export default HomePage;

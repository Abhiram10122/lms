import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <UserButton afterSignOutUrl="/sign-in" />
      <div>Protected Page</div>
    </main>
  );
}

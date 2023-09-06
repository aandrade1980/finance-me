import { UserButton } from '@clerk/nextjs';

export default function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between p-4 px-8 h-[60px]">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        FinanceMe
      </h1>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}

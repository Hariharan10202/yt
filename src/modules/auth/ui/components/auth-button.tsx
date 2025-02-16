"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ClapperboardIcon, UserCircleIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AuthButton = () => {
  const pathname = usePathname();

  return (
    <>
      <SignedIn>
        {pathname !== "/studio" && (
          <Button asChild variant="secondary">
            <Link href="/studio">
              <ClapperboardIcon />
              Studio
            </Link>
          </Button>
        )}
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-600 border-blue-500/20 rounded-full shadow-none"
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default AuthButton;

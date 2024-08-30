import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign In | DevOverflow",
  description:
    "Access your DevOverflow account and connect with the developer community.",
};

export default function Page() {
  return <SignIn />;
}

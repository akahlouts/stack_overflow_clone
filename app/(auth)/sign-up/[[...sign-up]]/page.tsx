import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign Up | DevOverflow",
  description:
    "Create a new account on DevOverflow and join the developer community.",
};

export default function Page() {
  return <SignUp />;
}

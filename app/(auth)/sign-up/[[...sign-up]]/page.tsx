import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign Up | Dev Overflow",
  description:
    "Create a new account on Dev Overflow and join the developer community.",
};

export default function Page() {
  return <SignUp />;
}

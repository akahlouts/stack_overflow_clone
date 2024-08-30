import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";

import { getUserById } from "@/lib/actions/user.action";

import Profile from "@/components/forms/Profile";

import { ParamsProps } from "@/types";

export const metadata: Metadata = {
  title: "Edit Profile | DevOverflow",
  description:
    "Update your profile information on DevOverflow to keep your account up-to-date.",
};

const Page = async ({ params }: ParamsProps) => {
  const { userId } = auth();

  if (!userId) return null;

  const mongoUser = await getUserById({ userId });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Profile</h1>

      <div className="mt-9">
        <Profile clerkId={userId} user={JSON.stringify(mongoUser)} />
      </div>
    </>
  );
};

export default Page;

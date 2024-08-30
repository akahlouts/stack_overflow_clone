import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { getUserById } from "@/lib/actions/user.action";

import Question from "@/components/forms/Question";

export const metadata: Metadata = {
  title: "Ask a Question | DevOverflow",
  description:
    "Got a question? Post it on DevOverflow and get answers from the developer community.",
};

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>

      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser?._id)} />
      </div>
    </div>
  );
};

export default Page;

import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";

import { getUserById } from "@/lib/actions/user.action";
import { getQuestionById } from "@/lib/actions/question.action";

import Question from "@/components/forms/Question";

import { ParamsProps } from "@/types";

export const metadata: Metadata = {
  title: "Edit Question | DevOverflow",
  description:
    "Update and refine your question on DevOverflow to get better responses from the community.",
};

const Page = async ({ params }: ParamsProps) => {
  const { userId } = auth();

  if (!userId) return null;

  const mongoUser = await getUserById({ userId });
  const result = await getQuestionById({ questionId: params.id });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Question</h1>

      <div className="mt-9">
        <Question
          type="Edit"
          mongoUserId={JSON.stringify(mongoUser._id)}
          questionDetails={JSON.stringify(result)}
        />
      </div>
    </>
  );
};

export default Page;

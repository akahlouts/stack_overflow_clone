"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "../mongoose";

import Answer from "@/database/answer.model";
import Question from "@/database/question.model";

import { CreateAnswerParams } from "./shared.types";

export async function createAnswer(params: CreateAnswerParams) {
  try {
    connectToDatabase();

    const { content, author, question, path } = params;

    const newAnswer = new Answer({ content, author, question });

    // Add the answer to the question's answers array
    await Question.findByIdAndUpdate(question, {
      $push: { answers: newAnswer._id },
    });

    // TODO: Add interaction...

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

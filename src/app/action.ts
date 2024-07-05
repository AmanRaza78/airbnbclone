"use server"

import prisma from "@/lib/db";
import { redirect } from "next/navigation";

// user->Your airbnb home -> createHome(API endpoint)
// if we don't have any home created by user create one with userId and keep rest of the fields null
// if we don't have any category, description and location redirect to category page
// if we have category but no description the redirect to the description page
// if we have category and description but no location then redirect to the location page
// if we have all three fields then user wants to create new property so just create one.

export async function createHome(formData: FormData) {
  const userId = formData.get("userId") as string;

  if (!userId) {
    return redirect("/api/auth/login");
  }

  const data = await prisma.home.findFirst({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (data === null) {
    const data = await prisma.home.create({
      data: {
        userId: userId,
      },
    });

    return redirect(`/create/${data.id}/category`);
  } else if (!data.isCategory && !data.isDescription && !data.isLocation) {
    return redirect(`/create/${data.id}/category`);
  } else if (data.isCategory && !data.isDescription) {
    return redirect(`/create/${data.id}/description`);
  } else if (data.isCategory && data.isDescription && !data.isLocation) {
    return redirect(`/create/${data.id}/location`);
  } else if (data.isLocation && data.isCategory && data.isDescription) {
    const data = await prisma.home.create({
      data: {
        userId: userId,
      },
    });
    return redirect(`/create/${data.id}/category`);
  }
}

import { authOptions } from "@/library/authOptions";
import dbConnect, { collectionNameObj } from "@/library/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const session = await getServerSession(authOptions);

  if (session) {
    const email = session.user.email;
    const checkoutCollection = await dbConnect(
      collectionNameObj.checkoutCollection
    );
    const result = await checkoutCollection.find({ email: email }).toArray();
    return NextResponse.json(result);
  }

  return NextResponse.json({ message: "Service API is working" });
};

export const POST = async (request) => {
  const body = await request.json();
  const checkoutCollection = await dbConnect(
    collectionNameObj.checkoutCollection
  );
  const result = await checkoutCollection.insertOne(body);
  return NextResponse.json(result);
};

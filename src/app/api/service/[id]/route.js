import { authOptions } from "@/library/authOptions";
import dbConnect, { collectionNameObj } from "@/library/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const checkoutCollection = await dbConnect(
    collectionNameObj.checkoutCollection
  );

  const { id } = params;

  const session = await getServerSession(authOptions);
  const currentBooking = await checkoutCollection.findOne({
    _id: new ObjectId(id),
  });

  const isOwnerOk = session?.user?.email === currentBooking?.email;

  if (isOwnerOk) {
    const result = await checkoutCollection.deleteOne({
      _id: new ObjectId(id),
    });
    revalidatePath("/my-bookings");
    return NextResponse.json(result);
  } else {
    return NextResponse.json(
      {
        success: false,
        message: "You are not authorized to delete this booking.",
      },
      { status: 403 }
    );
  }
};

export const GET = async (request, { params }) => {
  const { id } = params;
  const servicesCollection = await dbConnect(
    collectionNameObj.servicesCollection
  );
  const data = await servicesCollection.findOne({ _id: new ObjectId(id) });

  return NextResponse.json(data);
};

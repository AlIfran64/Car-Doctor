import { authOptions } from "@/library/authOptions";
import dbConnect, { collectionNameObj } from "@/library/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// ✅ GET (Fetch Single Booking)
export const GET = async (request, { params }) => {
  try {
    const p = await params;
    const checkoutCollection = await dbConnect(
      collectionNameObj.checkoutCollection
    );
    const query = { _id: new ObjectId(p.id) };

    const session = await getServerSession(authOptions);
    const email = session?.user?.email;

    const currentBookingData = await checkoutCollection.findOne(query); // ✅ fixed variable name

    if (!currentBookingData) {
      return NextResponse.json(
        { message: "Booking not found" },
        { status: 404 }
      );
    }

    const isOwnerOk = email === currentBookingData?.email;

    if (isOwnerOk) {
      return NextResponse.json(currentBookingData);
    } else {
      return NextResponse.json(
        { message: "Forbidden update request" },
        { status: 403 }
      );
    }
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

// ✅ PATCH (Update Booking)
export const PATCH = async (request, { params }) => {
  try {
    const p = await params;
    const checkoutCollection = await dbConnect(
      collectionNameObj.checkoutCollection
    );
    const query = { _id: new ObjectId(p.id) };

    const session = await getServerSession(authOptions);
    const email = session?.user?.email;

    const currentBookingData = await checkoutCollection.findOne(query);
    const isOwnerOk = email === currentBookingData?.email;

    if (isOwnerOk) {
      const body = await request.json();

      const filter = { $set: { ...body } };
      const option = { upsert: true };

      const updateResponse = await checkoutCollection.updateOne(
        query,
        filter,
        option
      );
      revalidatePath("/my-bookings");

      return NextResponse.json(updateResponse);
    } else {
      return NextResponse.json(
        { message: "Forbidden update request" },
        { status: 403 }
      );
    }
  } catch (error) {
    console.error("PATCH Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

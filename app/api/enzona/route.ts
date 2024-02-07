import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import fs from "fs"

interface IParams {
  listingId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid Id");
  }

  let favoritesIds = [...(currentUser.favoriteIds || [])];

  favoritesIds.push(listingId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds: favoritesIds,
    },
  });

  return NextResponse.json(user);
}


export async function GET(request: Request) {
   // Import the necessary libraries.

// Create a new file and write data to it.
fs.writeFile('success.txt', JSON.stringify(request), (err: any) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

// Close the file.
fs.close(fs.openSync('data.txt', 'w'), (err: any) => {
  if (err) throw err;
  console.log('The file has been closed!');
});

      return NextResponse.json("Escribio");

  }
  
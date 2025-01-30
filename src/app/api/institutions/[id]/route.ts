import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { trace } from "console";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  try {
    const institusi = await prisma.institusi.findUnique({
      where: { id: parseInt(id) },
    });

    if (!institusi) {
      return NextResponse.json({ error: "institusi does not exist" });
    }

    return NextResponse.json(institusi);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to show institution` + error },
      { status: 500 },
    );
  }
}

// Update
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const data = await request.json();
    const institution = await prisma.institusi.update({
      where: { id: parseInt(params.id) },
      data,
    });
    return NextResponse.json(institution);
  } catch (error) {
    return NextResponse.json(
      { error: "failed to update institution" },
      { status: 500 },
    );
  }
}

// Delete
// export async function DELETE(
//   request: NextRequest,
//   { params }: { params: { id: string } },
// ) {
//   try {
//     await prisma.institusi.delete({
//       where: { id: parseInt(params.id) },
//     });
//     return NextResponse.json({ message: "Institution deleted successfully" });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to delete institution" });
//   }
// }

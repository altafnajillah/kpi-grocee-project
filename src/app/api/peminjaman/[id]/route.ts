import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// show
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const peminjaman = await prisma.peminjaman.findUnique({
      where: { id: params.id },
      include: {
        barang: true,
        instansi: true,
      },
    });

    if (!peminjaman) {
      return NextResponse.json({ error: "Peminjaman tidak ditemukan " });
    }

    return NextResponse.json(peminjaman);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to show peminjaman" + error },
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
    const peminjaman = await prisma.peminjaman.update({
      where: { id: params.id },
      data,
    });
    return NextResponse.json(peminjaman);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update peminjaman" },
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
//     await prisma.barang.delete({
//       where: { id: params.id },
//     });
//     return NextResponse.json({ message: "Institution deleted successfully" });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to delete institution" });
//   }
// }

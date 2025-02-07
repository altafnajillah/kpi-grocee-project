import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// show
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const barang = await prisma.barang.findUnique({
      where: { id: params.id },
      include: {
        pj: true,
      },
    });

    if (!barang) {
      return NextResponse.json({ error: "Barang tidak ditemukan " });
    }

    return NextResponse.json(barang);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to show barang" + error },
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
    const barang = await prisma.barang.update({
      where: { id: params.id },
      data,
    });
    return NextResponse.json(barang);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update barang" + error },
    );
  }
}

// Delete
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await prisma.barang.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ message: "Institution deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete institution" });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const barang = await prisma.barang.findMany({
      include: {
        pj: true,
      },
    });
    return NextResponse.json(barang);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
}

export async function POST(request: Request) {
  try {
    const req = await request.json();
    console.log(req);
    const barang = await prisma.barang.create({
      data: {
        id: req.id,
        name: req.name,
        stok: parseInt(req.stok),
        pjId: parseInt(req.pjId),
      },
    });
    return NextResponse.json(barang);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to create data", status: 500 });
  }
}

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const staff = await prisma.pjBarang.findMany();
    return NextResponse.json(staff);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch staff" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const staff = await prisma.pjBarang.create({ data });
    return NextResponse.json(staff, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create staff" },
      { status: 500 },
    );
  }
}

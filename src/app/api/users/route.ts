import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.pengguna.findMany({
      where: { id: 1 },
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch users ${error}` },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const user = await prisma.pengguna.create({ data });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 },
    );
  }
}

import {prisma} from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET() {
    try {
        const institutions = await prisma.institusi.findMany();
        return NextResponse.json(institutions);
    } catch (error) {
        return NextResponse.json({error: 'Failed to get institutions'}, {status: 500});
    }
}

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const institution = await prisma.institusi.create({ data })
        return NextResponse.json(institution);
    } catch (error) {
        return NextResponse.json({error: 'Failed to create institution', status: 500});
    }
}
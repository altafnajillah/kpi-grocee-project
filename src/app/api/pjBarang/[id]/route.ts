import {NextRequest, NextResponse} from 'next/server'
import {prisma} from '@/lib/prisma'

export async function GET(
    request: NextRequest,
    {params}: { params: { id: string } }
) {
    try {
        const user = await prisma.pjBarang.findUnique({
            where: {id: parseInt(params.id)}
        })
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({error: 'User not found'}, {status: 404})
    }
}

// Update user
export async function PUT(
    request: NextRequest,
    {params}: { params: { id: string } }
) {
    try {
        const data = await request.json()
        const user = await prisma.pjBarang.update({
            where: {id: parseInt(params.id)},
            data
        })
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({error: 'Failed to update user'}, {status: 500})
    }
}

// Delete user
export async function DELETE(
    request: NextRequest,
    {params}: { params: { id: string } }
) {
    try {
        await prisma.pjBarang.delete({
            where: {id: parseInt(params.id)}
        })
        return NextResponse.json({message: 'User deleted successfully'})
    } catch (error) {
        return NextResponse.json({error: 'Failed to delete user'}, {status: 500})
    }
}
import {prisma} from "@/lib/prisma";

export const getPjBarang = async () => {
    try {
        return await prisma.pjBarang.findMany();
    } catch (error) {
        // throw new Error("Failed to fetch PjBarang");
        console.error(error);
    }
}
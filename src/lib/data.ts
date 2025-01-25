import { prisma } from "@/lib/prisma";

export const getPjBarangById = async (id: number) => {
    try {
      const pjBarang = await prisma.pjBarang.findUnique({
        where: { id },
      });
      return pjBarang;
    } catch (error) {
      throw new Error("Failed to fetch pjBarang data");
    }
  };
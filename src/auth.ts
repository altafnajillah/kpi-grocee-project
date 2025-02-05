import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { SignInSchema } from "@/lib/zod";
import { compareSync } from "bcrypt-ts";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedFields = SignInSchema.safeParse(credentials);

        if (!validatedFields.success) {
          return null;
        }

        const { email, password } = validatedFields.data;

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) {
          throw new Error("User tidak ditemukan");
        }

        const passwordMatch = compareSync(password, user.password);

        if (!passwordMatch) return null;

        return user;
      },
    }),
  ],

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const ProtectedRoutes = [
        "/admin",
        "/barang",
        "/penanggungjawab",
        "/institusi",
        "/settings",
        // "/apil",
      ];

      // Check if current path starts with any protected route
      const isProtectedRoute = ProtectedRoutes.some(
        (route) =>
          nextUrl.pathname === route ||
          nextUrl.pathname.startsWith(`${route}/`),
      );

      // Redirect to login if trying to access protected route while not logged in
      if (!isLoggedIn && isProtectedRoute) {
        return Response.redirect(new URL("/auth/signin", nextUrl));
      }

      if (isLoggedIn && nextUrl.pathname.startsWith("/auth/signin")) {
        return Response.redirect(new URL("/admin", nextUrl));
      }
      return true;
    },

    //   jwt({ token, user }) {
    //     if (user) {
    //       token.role = user.role;
    //     }
    //     return token;
    //   },

    //   session({ session, token }) {
    //     session.user.id = token.sub;
    //     session.user.role = token.role;
    //     return session;
    //   },
  },
});

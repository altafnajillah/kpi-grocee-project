import { auth } from "@/auth";
import React from "react";

const HelloUser = async () => {
  const session = await auth();
  return (
    <div>
      <h1>Hello World</h1>
      <h2>{session?.user?.name}</h2>
      <h4>{JSON.stringify(session)}</h4>
    </div>
  );
};

export default HelloUser;

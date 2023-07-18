import React from "react";

import { usePocket } from "../contexts/PocketContext";
import { Tae } from "../components/Tae";

import PocketBase from "pocketbase";

export const Protected = () => {
  const { logout, user } = usePocket();

  const basura = async () => {
    const pb = new PocketBase("http://127.0.0.1:8090");

    const authData = await pb
      .collection("users")
      .authWithPassword("react.router.budget@gmail.com", "Abcd1234@");

    console.log(authData);

  };

  return (
    <section>
      <h2>Protected</h2>
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
      <button onClick={logout}>Logout</button>
      <Tae />
    </section>
  );
};

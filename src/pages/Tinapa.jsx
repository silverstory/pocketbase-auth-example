import React from "react";

import { Tae } from "../components/Tae";

import PocketBase from "pocketbase";

export const Tinapa = () => {
  const basura = async () => {
    const pb = new PocketBase("http://127.0.0.1:8090");

    // after the above you can also access the auth data from the authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    if (pb.authStore.isValid) console.log(pb.authStore.model.id)

    // "logout" the last authenticated model
    // pb.authStore.clear();
  };

  return (
    <section>
      <h2>Tae</h2>
      <Tae />

      <h2>Sign Check</h2>
      <button onClick={basura}>Check Mo Na</button>
    </section>
  );
};

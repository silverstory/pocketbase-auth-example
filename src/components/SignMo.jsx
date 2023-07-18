import React from "react";

import PocketBase from "pocketbase";

export const SignMo = () => {
  const basura = async () => {
    const pb = new PocketBase("http://127.0.0.1:8090");

    const authData = await pb
      .collection("users")
      .authWithPassword("shet@shet.com", "Qwe6789%");

    console.log(authData);

    // after the above you can also access the auth data from the authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model.id);

    // "logout" the last authenticated model
    // pb.authStore.clear();
  };

  const waste = async () => {
    const pb = new PocketBase("http://127.0.0.1:8090");

    // "logout" the last authenticated model
    pb.authStore.clear();
    
  };

  return (
    <section>
      <h2>Sign Mo</h2>
      <button onClick={basura}>Sign Mo Na</button>
      <button onClick={waste}>Logout Mo</button>
    </section>
  );
};

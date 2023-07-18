import React from "react";

import PocketBase from "pocketbase";

export const Tae = () => {
  const basura = async () => {
    const pb = new PocketBase("http://127.0.0.1:8090");

    const record = await pb
      .collection("sourcerecipecategories")
      .getOne("4697cqwfyik1w30");

    console.log(record);

    const records = await pb
      .collection("sourcerecipecategories")
      .getList(1, 50, {
        filter: 'created >= "2022-01-01 00:00:00"',
      });

    console.log(records);
  };

  return (
    <section>
      <h2>Test unsigned</h2>
      <button onClick={basura}>tae</button>
    </section>
  );
};

"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

export default function NavigationBar() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    setSearchText(e.target.value);
  };

  return (
    <div>
      <button>menu</button>
      <button onClick={() => router.push("/")}>react icon</button>
      <input
        type='text'
        placeholder='Search'
        onChange={(e) => handleSearchText(e)}
      ></input>
      <button>dark mode</button>
      <p>profile</p>
    </div>
  );
}

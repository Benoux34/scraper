import React, { useState } from "react";

export default function Home() {
  const [data, setData] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const getLink = async () => {
    const res = await fetch("http://localhost:3000/api/hello", {
      method: "POST",
      body: JSON.stringify({ input }),
    });
    const { html } = await res.json();
    setData(html);
  };

  return (
    <main className="mt-10 flex flex-col items-center justify-center px-[5%] space-y-10">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        placeholder="Entrer l'URL d'une page"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={getLink}
      >
        Monstre
      </button>
      {data && (
        <p className="h-full w-full overflow-x-hidden p-5 text-white text-sm">
          {data}
        </p>
      )}
    </main>
  );
}

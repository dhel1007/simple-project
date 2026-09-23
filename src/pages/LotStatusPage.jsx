
import { useState } from "react";

export default function LotStatus() {
  const [lotNumber, setLotNumber] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Searching for lot:", lotNumber);

    // Later, this will call your Express API:
    // fetch(`/api/lots/search?lot_no=${lotNumber}`)
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-bold text-gray-900">
          Lot Status
        </h1>

        <p className="mt-2 text-gray-600">
          Search for a lot and view its current allocation status.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={lotNumber}
            onChange={(e) => setLotNumber(e.target.value)}
            placeholder="Enter lot number"
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600 dark:border-gray-700"
          />

          <button
            type="submit"
            className="rounded-lg hover:bg-green-800 bg-green-700 px-6 py-3 font-medium text-white "
          >
            Search
          </button>
        </form>

        <div className="mt-10 rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-gray-900 ">
            Lot Information
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Search for a lot number to display its information.
          </p>
        </div>

      </div>
    </div>
  );
}
import { useEffect, useState } from "react";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">VoteGuard</h1>
    </header>
  );
}
function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-3 text-sm">
      &copy; 2025 VoteGuard Project
    </footer>
  );
}

export default function App() {
  const [states, setStates] = useState([]);
  useEffect(() => {
    fetch("/states.json").then(r => r.json()).then(setStates);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <h2 className="text-lg font-semibold mb-3">State Data</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[480px] table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-3 py-2 text-left">State</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Fraud Count</th>
              </tr>
            </thead>
            <tbody>
              {states.map((s) => (
                <tr key={s.name}>
                  <td className="border border-gray-300 px-3 py-2">{s.name}</td>
                  <td className="border border-gray-300 px-3 py-2">{s.fraudCount}</td>
                </tr>
              ))}
              {states.length === 0 && (
                <tr>
                  <td colSpan={2} className="border border-gray-300 px-3 py-2 text-gray-500">
                    Loading…
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}

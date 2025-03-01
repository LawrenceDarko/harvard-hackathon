'use client';

type OverviewCardProps = {
  title: string;
  value: string;
};

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-2xl font-bold text-[#299D91]">{value}</p>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <h1 className="text-3xl font-bold text-[#191919] mb-6 text-center md:text-left">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <OverviewCard title="Total Searches" value="120" />
        <OverviewCard title="Novel Cases Flagged" value="5" />
        <OverviewCard title="Common Symptoms" value="Fever, Cough" />
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">
          Recent Diagnoses
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Symptoms</th>
                <th className="py-2 px-4">Top Match</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">2025-03-01</td>
                <td className="py-2 px-4">Fever, Fatigue</td>
                <td className="py-2 px-4 text-[#299D91]">Dengue Fever</td>
                <td className="py-2 px-4">
                  <button className="text-sm text-white bg-[#299D91] px-3 py-1 rounded">
                    View
                  </button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">2025-02-28</td>
                <td className="py-2 px-4">Headache, Nausea</td>
                <td className="py-2 px-4 text-[#299D91]">Migraine</td>
                <td className="py-2 px-4">
                  <button className="text-sm text-white bg-[#299D91] px-3 py-1 rounded">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

import { colleges } from "../../data/colleges";

export default function ComparePage() {
  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1 className="text-5xl font-bold mb-4">
        Compare Colleges
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        Compare fees, ratings, placements and available courses.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-xl">
          <thead>
            <tr className="bg-gray-900">
              <th className="p-4 text-left">Criteria</th>

              {colleges.map((college) => (
                <th key={college.id} className="p-4">
                  {college.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-gray-700">
              <td className="p-4 font-semibold">Location</td>
              {colleges.map((college) => (
                <td key={college.id} className="p-4">
                  {college.location}
                </td>
              ))}
            </tr>

            <tr className="border-t border-gray-700">
              <td className="p-4 font-semibold">Rating</td>
              {colleges.map((college) => (
                <td key={college.id} className="p-4">
                  ⭐ {college.rating}
                </td>
              ))}
            </tr>

            <tr className="border-t border-gray-700">
              <td className="p-4 font-semibold">Fees</td>
              {colleges.map((college) => (
                <td key={college.id} className="p-4">
                  ₹{college.fees.toLocaleString()}
                </td>
              ))}
            </tr>

            <tr className="border-t border-gray-700">
              <td className="p-4 font-semibold">
                Average Package
              </td>

              {colleges.map((college) => (
                <td key={college.id} className="p-4">
                  {college.placements.avgPackage} LPA
                </td>
              ))}
            </tr>

            <tr className="border-t border-gray-700">
              <td className="p-4 font-semibold">
                Highest Package
              </td>

              {colleges.map((college) => (
                <td key={college.id} className="p-4">
                  {college.placements.highestPackage} LPA
                </td>
              ))}
            </tr>

            <tr className="border-t border-gray-700">
              <td className="p-4 font-semibold">
                Courses
              </td>

              {colleges.map((college) => (
                <td key={college.id} className="p-4">
                  {college.courses.join(", ")}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-5">
          Recommendation
        </h2>

        <div className="border rounded-xl p-6">
          <p>
            IIT Hyderabad offers the strongest placement
            performance and highest rating among the
            available colleges.
          </p>
        </div>
      </div>
    </div>
  );
}
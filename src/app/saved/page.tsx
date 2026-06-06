"use client";

import { colleges } from "../../data/colleges";
import { useCollegeStore } from "../../store/useCollegeStore";

export default function SavedPage() {
  const savedIds = useCollegeStore(
    (state) => state.saved
  );

  const savedColleges = colleges.filter(
    (college) =>
      savedIds.includes(college.id)
  );

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1 className="text-5xl font-bold mb-10">
        Saved Colleges
      </h1>

      {savedColleges.length === 0 ? (
        <p>No colleges saved yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {savedColleges.map((college) => (
            <div
              key={college.id}
              className="border rounded-xl p-5"
            >
              <h2 className="text-xl font-bold">
                {college.name}
              </h2>

              <p>{college.location}</p>

              <p>⭐ {college.rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
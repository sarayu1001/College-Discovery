import { colleges } from "../../../data/colleges";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CollegeDetailPage({
  params,
}: Props) {
  const { id } = await params;

  const college = colleges.find(
    (c) => c.id === id
  );

  if (!college) {
    return <div className="p-10">College Not Found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-10">
      <img
        src={college.image}
        alt={college.name}
        className="w-full h-[500px] object-cover rounded-2xl"
      />

      <div className="mt-8">
        <h1 className="text-5xl font-bold">
          {college.name}
        </h1>

        <p className="text-xl mt-3">
          📍 {college.location}
        </p>

        <div className="flex gap-8 mt-6">
          <div className="border rounded-xl p-5">
            <h3 className="font-semibold">
              Rating
            </h3>
            <p className="text-3xl">
              ⭐ {college.rating}
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold">
              Annual Fees
            </h3>
            <p className="text-3xl">
              ₹{college.fees.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-bold">
          About College
        </h2>

        <p className="mt-4 text-lg">
          {college.overview}
        </p>

        <p className="mt-4">
          This institution is recognized for
          academic excellence, modern infrastructure,
          experienced faculty and industry-oriented
          curriculum.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-5">
          Placement Insights
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-xl p-6">
            <h3>Average Package</h3>
            <p className="text-5xl mt-3">
              {college.placements.avgPackage} LPA
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3>Highest Package</h3>
            <p className="text-5xl mt-3">
              {college.placements.highestPackage} LPA
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-5">
          Courses Offered
        </h2>

        <div className="flex flex-wrap gap-3">
          {college.courses.map((course) => (
            <span
              key={course}
              className="bg-blue-600 px-4 py-2 rounded-full"
            >
              {course}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-5">
          Student Reviews
        </h2>

        {college.reviews.map((review, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 mb-4"
          >
            <h3 className="font-bold">
              {review.user}
            </h3>

            <p className="mt-2">
              {review.comment}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
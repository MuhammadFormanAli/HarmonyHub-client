const LatestUpdate = () => {
  return (
    <div className="my-8">
      <header className="bg-gray-800 text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Latest Update</h1>
      </header>

      <section className="mx-auto">
        <div className="border p-4 mb-4 bg-gray-200">
          <p className="text-xl font-bold mb-2">
            New Course Launched: Mastering the Guitar
          </p>
          <p className="text-gray-600">Published on: January 15, 2023</p>
        </div>

        <div className="border p-4 mb-4 bg-gray-200">
          <p className="text-xl font-bold mb-2">
            Community Spotlight: Meet Our Star Pianist
          </p>
          <p className="text-gray-600">Published on: January 10, 2023</p>
        </div>

        {/* Add more update cards as needed */}
      </section>
    </div>
  );
};

export default LatestUpdate;

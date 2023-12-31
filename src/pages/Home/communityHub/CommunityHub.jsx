import { Slide } from "react-awesome-reveal";

const CommunityHub = () => {
    return (
        <Slide direction="right">
          <section className="bg-gray-900 bg-opacity-40 rounded-md my-3 p-3 text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Community Hub</h2>
        <p className="text-lg mb-6">
          Join our musical community to connect with fellow learners, share your experiences, and grow together on your musical journey.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
          Join the Community
        </button>
      </div>
    </section>
        </Slide>
    );
};

export default CommunityHub;
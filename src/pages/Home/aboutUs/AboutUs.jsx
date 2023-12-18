

const AboutUs = () => {

    return (
        <section className="bg-black bg-opacity-40 p-7 mt-4 text-white rounded-md">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Welcome to the Music Learning Hub, your go-to destination for mastering musical instruments and connecting with a vibrant community of learners.
              </p>
              <p className="text-lg mb-4">
                At Music Learning Hub, we believe in the transformative power of music education. Whether you are a beginner picking up your first instrument or an experienced musician looking to refine your skills, we are here to support your musical journey.
              </p>
              <p className="text-lg mb-4">
                Our mission is to provide high-quality tutorials, resources, and a platform for music enthusiasts to share their passion. From instrument showcases to performance tips, our website is designed to inspire and guide you every step of the way.
              </p>
            </div>
  
            <div>
              <img src="https://plus.unsplash.com/premium_photo-1664302427357-40eb7c8fd3c0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8fDA%3D" alt="About Us" className="w-full h-auto rounded-md" />
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutUs;
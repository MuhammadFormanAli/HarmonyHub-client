import { Slide } from "react-awesome-reveal";

const InstrumentShowcase = () => {
    return (
        <div className="bg-black bg-opacity-40 rounded-md">
        
        <div>
        <header className=" text-white py-4 text-center">
        <h2 className="text-2xl font-bold ">Instrument Showcase</h2>
        </header>
  
        <section className="shadow-md">
          
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 gap-3">

<Slide direction="right">
  <div className="border p-4 bg-gray-200 rounded-md group  bg-opacity-50 hover:bg-opacity-90">
              <h3 className="text-xl font-bold mb-2">Piano</h3>
              <img src="https://plus.unsplash.com/premium_photo-1682326302625-1e5b7826fb3c?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Piano" className="w-full h-40 object-cover mb-2 rounded-md group-hover:scale-[1.05] saturate-0 group-hover:saturate-100 group-hover:rotate-0 rotate-2 transition-all duration-500 " />
              <p className="text-gray-600">Explore the beauty of piano playing with our expert tutorials.</p>
            </div>
</Slide>

<Slide direction="right">
  <div className="border p-4 bg-gray-200 rounded-md group  bg-opacity-50 hover:bg-opacity-90">
              <h3 className="text-xl font-bold mb-2">Guitar</h3>
              <img src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Guitar" className="w-full h-40 object-cover mb-2 rounded-md group-hover:scale-[1.05] saturate-0 group-hover:saturate-100 group-hover:rotate-0 rotate-2 transition-all duration-500 " />
              <p className="text-gray-600">Master the art of guitar playing from beginner to advanced levels.</p>
            </div>
</Slide>

<Slide direction="right">
<div className="border p-4 bg-gray-200 rounded-md group  bg-opacity-50 hover:bg-opacity-90">
              <h3 className="text-xl font-bold mb-2">Violin</h3>
              <img src="https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Violin" className="w-full h-40 object-cover mb-2 rounded-md group-hover:scale-[1.05] saturate-0 group-hover:saturate-100 group-hover:rotate-0 rotate-2 transition-all duration-500 " />
              <p className="text-gray-600">Learn the nuances of violin performance with our detailed lessons.</p>
            </div>


</Slide>
<Slide>
  <div className="border p-4 bg-gray-200 rounded-md group  bg-opacity-50 hover:bg-opacity-90">
              <h3 className="text-xl font-bold mb-2">Flute</h3>
              <img src="https://plus.unsplash.com/premium_photo-1681053901931-e0d3af9449e1?q=80&w=750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Violin" className="w-full h-40 object-cover mb-2 rounded-md group-hover:scale-[1.05] saturate-0 group-hover:saturate-100 group-hover:rotate-0 rotate-2 transition-all duration-500 " />
              <p className="text-gray-600">Learn the nuances of violin performance with our detailed lessons.</p>
            </div>
</Slide>
<Slide>
  <div className="border p-4 bg-gray-200 rounded-md group  bg-opacity-50 hover:bg-opacity-90">
              <h3 className="text-xl font-bold mb-2">Trumpet</h3>
              <img src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Violin" className="w-full h-40 object-cover mb-2 rounded-md group-hover:scale-[1.05] saturate-0 group-hover:saturate-100 group-hover:rotate-0 rotate-2 transition-all duration-500 " />
              <p className="text-gray-600">Learn the nuances of violin performance with our detailed lessons.</p>
            </div>
</Slide>
<Slide>
  <div className="border p-4 bg-gray-200 rounded-md group  bg-opacity-50 hover:bg-opacity-90">
              <h3 className="text-xl font-bold mb-2">Harp</h3>
              <img src="https://plus.unsplash.com/premium_photo-1682201793802-de2e7d426810?q=80&w=750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Violin" className="w-full h-40 object-cover mb-2 rounded-md group-hover:scale-[1.05] saturate-0 group-hover:saturate-100 group-hover:rotate-0 rotate-2 transition-all duration-500 " />
              <p className="text-gray-600">Learn the nuances of violin performance with our detailed lessons.</p>
            </div>
</Slide>
            
          </div>
          
        </section>


        </div>
        
      </div>
    );
};

export default InstrumentShowcase;
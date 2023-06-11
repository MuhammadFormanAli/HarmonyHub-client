
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div><Fade> <Slide>
            <div className="flex flex-col items-center justify-center h-screen relative">
                <h1 className="text-4xl font-bold mb-4  z-10">404 - Page Not Found</h1>
                <img
                    src='/preview.png'
                    alt="404 Not Found"
                    className="h-full absolute top-0"
                />
                <Link to="/" className="mt-4 text-blue-500 btn z-10 ">
                    Back to Home
                </Link>
            </div></Slide></Fade>
        </div>
    );
};

export default Error;
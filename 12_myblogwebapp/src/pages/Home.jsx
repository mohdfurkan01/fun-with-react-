import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.png';

function Home() {
  
    return (
        <div className='w-full h-[calc(100vh-100px)]'>
            {/* Full Page Images Section */}
            <div className="relative w-full h-full p-4 md:p-8 flex flex-col gap-4 md:gap-8 overflow-hidden bg-gradient-to-r from-blue-400 via-fuchsia-500 to-indigo-500 animate-gradient">
                <img 
                    src={img2} 
                    alt="Top Image" 
                    className="w-full h-1/2 object-cover rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                />
                <img 
                    src={img3} 
                    alt="Bottom Image" 
                    className="w-full h-1/2 object-cover rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                />
            </div>
        </div>
    )
}

export default Home

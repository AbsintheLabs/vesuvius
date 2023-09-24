import { Link } from 'react-router-dom';
import vesuviuslogo from '../assets/vesuviuslogo.svg';

const HomePage = () => {
	// const [isHoveredModerator, setIsHoveredModerator] = useState(false);
	// const [isHoveredLabeler, setIsHoveredLabeler] = useState(false);

	return (
		<div className="flex flex-col justify-center min-h-screen bg-black p-4 md:p-0">

			{/* vesuvius heading */}
			<div data-aos="fade-down" className="flex flex-col md:flex-row justify-center items-center text-white space-y-4 md:space-y-0">
				<img src={vesuviuslogo} alt="Vesuvius Logo" className='h-12 md:h-16 pr-0 md:pr-5' />
				<h1 className='text-4xl md:text-6xl text-center'> Welcome to Vesuvius </h1>
			</div>

			{/* buy-line */}
			<div data-aos="fade-down" data-aos-delay="200" className="flex justify-center items-center pt-10 md:pt-20 text-gray-400">
				<h1 className='text-xl md:text-2xl text-center'> Vesuvius accelerates ai hypergrowth with BLOCKCHAIN </h1>
			</div>

			{/* router buttons */}
			<div data-aos="fade-in" data-aos-delay="500" className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-5 md:space-y-0 pt-16 md:pt-24">
				<Link to="/providers">
					<button className="p-2 rounded-md w-40 md:w-32 bg-white"
					// onMouseEnter={() => setIsHoveredModerator(true)}
					// onMouseLeave={() => setIsHoveredModerator(false)}
					>
						Moderators 👨‍💻
					</button>
				</Link>

				<Link to="/labelers">
					<button className="p-2 rounded-md w-40 md:w-32 bg-white"
					// onMouseEnter={() => setIsHoveredModerator(true)}
					// onMouseLeave={() => setIsHoveredModerator(false)}
					>
						Labelers 🕵️‍♂️
					</button>
				</Link>
		</div>

			{/* tooltip box */ }
	{/* { !isHoveredModerator ? null : (
		<div className='flex justify-center items-center pt-20 '>
			<div className='flex p-2 bg-gray-400 text-black w-40' >
<p>sup</p>

			</div>

		</div>)} */}

		</div >
	);
}

export default HomePage;

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

	return (
		<>
			<nav className='bg-blue-500 top-0 fixed w-full flex items-center min-h-[8vh] px-5 justify-between t'>
				<div className="left flex text-white">
					<Link to={"/home"}><div className="logo font-bold text-2xl text-white mt-2">SVMS</div></Link>
					<ul className='flex ml-4 items-center space-x-4 mt-2 no-underlin'>
						<Link to={"/home"}><li className='text-white '>Home</li></Link >
						<Link to={"/ManageElection"}><li className='text-white'>Manage Election</li></Link>
						<Link to={"/ManageVoter"}><li className='text-white'>Manage Voter</li></Link>
						<Link to={"/givevote"}><li className='text-white'>Give Vote</li></Link>
					</ul>
				</div>
				<Link to={"/Signin"}><button className='text-white'>Sign Out</button></Link>
			</nav>
		</>
	)
}

export default Navbar
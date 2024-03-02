import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const ShowVoters = () => {
    const [voterData, setVoterData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/voterInsertRoutes/getVoter');
                setVoterData(response.data);
            } catch (error) {
                console.error('Error fetching voter data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex justify-between p-4 mb-2 rounded-md">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Ward Number</th>
                            <th>Pincode</th>
                            <th>District</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {voterData.map(voter => (
                            <tr key={voter.id}>
                                <td>{voter.id}</td>
                                <td>{voter.voterName}</td>
                                <td>{voter.age}</td>
                                <td>{voter.gender}</td>
                                <td>{voter.wardNumber}</td>
                                <td>{voter.pincode}</td>
                                <td>{voter.district}</td>
                                <td>{voter.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ShowVoters;

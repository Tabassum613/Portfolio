//import React from 'react'
import { useState, useEffect } from "react";
function AboutP() {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        // Mock fetch data; replace with actual fetch call if needed
        setTeamMembers([
            { id: 1, name: "Atik Habib", role: "Frontend Developer", imageUrl: "https://randomuser.me/api/portraits/men/1.jpg" },
            { id: 2, name: "Shahed Islam", role: "UI/UX Designer", imageUrl: "https://randomuser.me/api/portraits/men/2.jpg" },
            { id: 3, name: "Tanvir Dipto", role: "Backend Developer", imageUrl: "https://randomuser.me/api/portraits/men/3.jpg" },
            { id: 4, name: "AninDita Roy", role: "Frontend Developer", imageUrl: "https://randomuser.me/api/portraits/women/1.jpg" },
            { id: 5, name: "Tazkia Faruk", role: "Backend Developer", imageUrl: "https://randomuser.me/api/portraits/women/2.jpg" },
            { id: 6, name: "Jannatul Ferdos", role: "UI/UX Designer", imageUrl: "https://randomuser.me/api/portraits/women/3.jpg" },
        ]);
    }, []);
    return (
        <div className="p-8">
            <section className="mb-12">
                <h1 className="text-3xl font-extrabold mb-4 mt-12 text-gray-800 text-center">About Us</h1>
                <p className="text-lg text-gray-700">
                    We are a passionate team dedicated to crafting beautiful and functional web solutions. Our mission is to deliver exceptional digital experiences that help our clients thrive in the online world.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map(member => (
                        <div key={member.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                            <img className="w-24 h-24 rounded-full mb-4" src={member.imageUrl} alt={member.name} />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutP

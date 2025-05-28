import { useState } from 'react';

export default function Tracker() {
  const [applications, setApplications] = useState([]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">My Applications</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700 transition">
        Add Application
      </button>
      <ul className="space-y-2">
        {applications.length === 0 ? (
          <p className="text-gray-500">No applications yet.</p>
        ) : (
          applications.map((app, index) => (
            <li key={index} className="p-4 border rounded shadow">
              {app.company} - {app.position}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

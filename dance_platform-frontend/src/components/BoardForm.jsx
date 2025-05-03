import { useState } from 'react';
import axios from 'axios';

function BoardForm({ userId }) {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/boards', { title, userId });
            setTitle('');
            alert('Board created!');
        } catch (error) {
            console.error(error);
            alert('Error creating board');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Create a Board</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Board title (e.g., Ballet Inspo)"
                className="w-full p-2 border rounded-md mb-4"
                required
            />
            <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                Create
            </button>
        </form>
    );
}

export default BoardForm;
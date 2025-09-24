import { useState } from 'react';

const UrlForm = () => {
    const [ shortCode, setShortCode ] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setShortCode(event.target.value);
    }

    const handleSubmit = () => {
        if (!shortCode) return;

        console.log('submitting');
    }

    return <>
    <div className="flex-1">
        <input 
            value={shortCode}
            onChange={handleChange}
            type="text" 
            placeholder="Paste your long URL here..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
    </div>
    <button onClick={handleSubmit} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
        Snip It!
    </button>
    </>
}

export default UrlForm;
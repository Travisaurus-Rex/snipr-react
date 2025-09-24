import { useState } from 'react';
import useUrlShortener from '../hooks/useUrlShortener';

const UrlForm = () => {
    const [ longURL, setLongURL ] = useState('');
    const { loading, error, data, shorten } = useUrlShortener();

    const handleSubmit = () => {
        shorten(longURL);
    }

    return <>
        <div className="flex-1">
            <input
                value={longURL}
                onChange={(e) => setLongURL(e.target.value)}
                type="text"
                placeholder="Paste your long URL here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
        </div>
        <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
        >
            {loading ? "Snipping..." : "Snip It!"}
        </button>

        {error && <p className="text-red-600 mt-2">{error.message}</p>}
        {data && (
            <div className="mt-4 text-left bg-gray-50 rounded-lg p-4 border border-gray-100">
                <div className="text-sm text-gray-500 mb-1">Your snipped URL:</div>
                <div className="text-blue-600 font-mono break-all">
                    {data.short_code}
                </div>
            </div>
        )}
    </>
}

export default UrlForm;
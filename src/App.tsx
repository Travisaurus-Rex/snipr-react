import './App.css';
import { SniprHeader } from './components/Header';
import UrlForm from './components/UrlForm';

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <SniprHeader />
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transform Long URLs into Short, Shareable Links
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Snipr cuts down your URLs to their essence - clean, fast, and reliable URL shortening.
            </p>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <UrlForm />
              </div>
              
              <div className="text-left bg-gray-50 rounded-lg p-4 border border-gray-100">
                <div className="text-sm text-gray-500 mb-1">Your snipped URL:</div>
                <div className="text-blue-600 font-mono break-all">snipr.ly/abc123</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

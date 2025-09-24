import { FaHandScissors } from "react-icons/fa";

export function SniprHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="h-2 w-20 bg-gray-200 rounded-full relative overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
              
              <div className="relative">
                <FaHandScissors className="w-5 h-5 text-blue-600 rotate-45" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
              </div>
              
              <div className="h-2 w-8 bg-blue-600 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Sni<span className="text-blue-600">pr</span>
            </h1>
            <div className="ml-2 px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">
              URL Shortener
            </div>
          </div>
        </div>
        
        <div className="mt-2 text-sm text-left text-gray-600 ml-8">
          Cut your URLs down to size
        </div>
      </div>
    </header>
  );
}
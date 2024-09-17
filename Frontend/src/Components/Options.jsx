import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";   
import { Card } from "./Card";

export function Options() {
    const [activeButton, setActiveButton] = useState("Trending");
    const [datas, setData] = useState([]);
    let x;

    const Search = async () => {
        const response = await axios.post('http://localhost:3048/news', { topic: activeButton });
        const data = await response.data;
        console.log(data);
        setData(data.data);
    };

    useEffect(() => {
        Search();
    }, [activeButton]);

    return (
        <>
            <div className="relative mb-6">
                <input 
                    onChange={(e) => { x = e.target.value; }} 
                    type="text" 
                    placeholder="Search..." 
                    className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500 mt-3" 
                />
                <FaSearch 
                    className="absolute top-6 right-3 text-gray-500 cursor-pointer hover:text-gray-700 transition duration-200" 
                    onClick={() => setActiveButton(x)} 
                />
            </div>

            <div className="p-4 flex flex-wrap justify-between bg-gray-100 rounded-lg shadow-md mb-6">
                <button onClick={() => setActiveButton("Trending")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">Trending</button>
                <button onClick={() => setActiveButton("Technology")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">Technology</button>
                <button onClick={() => setActiveButton("Politics")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">Politics</button>
                <button onClick={() => setActiveButton("Business")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">Business</button>
                <button onClick={() => setActiveButton("Sports")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">Sports</button>
                <button onClick={() => setActiveButton("Entertainment")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">Entertainment</button>
                <button onClick={() => setActiveButton("Health")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">Health</button>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Showing results for: {activeButton}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {datas.length > 0 ? (
                    datas.map((article, index) => (
                        <Card key={index} article={article} />
                    ))
                ) : (
                    <h1 className="col-span-full text-center text-gray-600">No articles found</h1>
                )}
            </div>
        </>
    );
}

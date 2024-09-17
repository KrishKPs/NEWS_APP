export function Navbar() {
    return (
        <>
            <div className="bg-gray-800 h-16 w-full flex justify-between items-center px-6 shadow-lg">
                <h1 className="text-white text-2xl font-semibold">Get Latest News</h1>
                <div className="flex space-x-6">
                    <button className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-200">
                        Home
                    </button>
                    <button className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-200">
                        About
                    </button>
                    <button className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-200">
                        Contact
                    </button>
                </div>
            </div>
        </>
    );
}

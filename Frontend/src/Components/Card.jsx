export function Card({ article }) {
    return (
        <div className="border border-gray-200 rounded-lg p-4 m-2 shadow-lg bg-white max-w-xs overflow-hidden">
            <img 
                src={article.imageurl} 
                alt="Image Not Available" 
                className="w-full h-auto rounded-md mb-4" 
            />
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
                {article.title}
            </h1>
            <h3 className="text-lg text-gray-600 mb-2">
                {article.source}
            </h3>
            <p className="text-gray-700">
                {article.description}
            </p>
        </div>
    );
}

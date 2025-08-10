const ListView = ({ numbers, sortOrder, onSort, onRemoveItem, onReset }) => {
  const sortedNumbers = [...numbers].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.value - b.value;
    } else {
      return b.value - a.value;
    }
  });

  const maxNumber = numbers.length > 0 ? Math.max(...numbers.map(item => item.value)) : null;
  const minNumber = numbers.length > 0 ? Math.min(...numbers.map(item => item.value)) : null;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-inner">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-700">Numbers List</h2>
        <div className="flex space-x-2">
          <button
            onClick={onReset}
            className="py-2 px-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors shadow-md"
          >
            Reset
          </button>
          <button
            onClick={onSort}
            className="py-2 px-4 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-1 shadow-md"
          >
            <span>Sort</span>
            {sortOrder === 'asc' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {numbers.length > 0 ? (
        <ul className="space-y-3">
          {sortedNumbers.map((item) => (
            <li
              key={item.id}
              className={`flex items-center justify-between p-4 rounded-xl shadow-md transition-colors ${
                item.value === maxNumber
                  ? 'bg-green-100 border-2 border-green-400' 
                  : item.value === minNumber
                  ? 'bg-red-100 border-2 border-red-400' 
                  : 'bg-white'
              }`}
            >
              <span className="text-xl font-semibold text-gray-800">
                {item.value}
              </span>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 italic">
          No numbers added yet. Use the counter above to add some!
        </p>
      )}
      {numbers.length > 0 && (
        <div className="mt-6 p-4 text-center bg-gray-200 rounded-lg text-gray-700 font-bold">
          Total numbers: {numbers.length}
        </div>
      )}
    </div>
  );
};

export default ListView;
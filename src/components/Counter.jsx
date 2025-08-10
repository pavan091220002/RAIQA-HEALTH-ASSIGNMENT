const Counter = ({ value, onIncrement, onDecrement, onAddToList }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 mb-8 shadow-inner">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Counter</h2>
      <div className="flex items-center justify-center space-x-4 mb-6">
        <button
          onClick={onDecrement}
          className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-md"
          aria-label="Decrement counter"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
        </button>
        <span className="text-5xl font-extrabold text-blue-700 w-20 text-center">
          {value}
        </span>
        <button
          onClick={onIncrement}
          className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-md"
          aria-label="Increment counter"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      <button
        onClick={onAddToList}
        disabled={value === 0}
        className={`w-full py-3 rounded-lg font-bold text-lg transition-all ${
          value > 0
            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Add to List
      </button>
    </div>
  );
};

export default Counter;
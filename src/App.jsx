import { useState, useEffect } from 'react';
import Counter from './components/Counter';
import ListView from './components/ListView';

const AlertBox = ({ message, onClose }) => {
  if (!message) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
        <h3 className="text-xl font-bold mb-2 text-gray-800">Application Message</h3>
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          OK
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    try {
      const storedNumbers = JSON.parse(localStorage.getItem('raiqaNumbers'));
      if (storedNumbers) {
        setNumbers(storedNumbers);
      }
    } catch (error) {
      console.error("Failed to parse numbers from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('raiqaNumbers', JSON.stringify(numbers));
  }, [numbers]);


  const handleIncrement = () => setCounter(prevCounter => prevCounter + 1);
  const handleDecrement = () => setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : 0));

  const handleAddToList = () => {
    if (counter > 0) {
      const isDuplicate = numbers.some(item => item.value === counter);
      if (!isDuplicate) {
        setNumbers(prevNumbers => [...prevNumbers, { id: Date.now(), value: counter }]);
        setCounter(0);
      } else {
        setAlertMessage("This number is already in the list!");
      }
    }
  };

  const handleSort = () => setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  const handleReset = () => {
    setNumbers([]);
    setCounter(0);
  };
  const handleRemoveItem = (id) => setNumbers(prevNumbers => prevNumbers.filter(item => item.id !== id));

  const handleCloseAlert = () => {
    setAlertMessage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="relative w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 md:p-8">
        <AlertBox message={alertMessage} onClose={handleCloseAlert} />

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8">
          Counter & List App
        </h1>
        <Counter
          value={counter}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onAddToList={handleAddToList}
        />
        <ListView
          numbers={numbers}
          sortOrder={sortOrder}
          onSort={handleSort}
          onRemoveItem={handleRemoveItem}
          onReset={handleReset}
        />
      </div>
    </div>
  );
};

export default App;
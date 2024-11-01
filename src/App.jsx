import React from 'react';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState({
    name: '',
    age: ''
  })

  const [arr, setArr] = useState([])


  const [editIndex, setEditIndex] = useState(null)

  const hendleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const Submit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedArr = [...arr];
      updatedArr[editIndex] = data
      setArr(updatedArr)
      setEditIndex(null)
    } else {
      setArr([...arr, data]);
    }
    setData({
      name: '',
      age: ''
    });
  };


  const Edit = (id) => {
    setEditIndex(id)
    setData(arr[id])
  }

  const Delete = (deleteId) => {
    const newArr = arr.filter((item, id) => id !== deleteId)
    setArr(newArr)

  }

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-black text-white'>
        <form className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder='Enter Your Name'
            name='name'
            value={data.name}
            onChange={hendleInput}
            className="p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder='Enter Your Age'
            name='age'
            value={data.age}
            onChange={hendleInput}

            className="p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
          />
          <button className="px-4 py-2 mt-4 bg-blue-600 rounded-md hover:bg-blue-700"
            onClick={Submit}
          >{editIndex !=null ? "Edit" : "Submit"}</button>
        </form>


        <div className="mt-8 flex gap-7">
          <p>Your Name</p>
          <p>Your Age</p>
        </div>
        <div >
          {arr.map((item, id) => (
            <div key={id} className="mt-8 flex gap-7 justify-center items-center">
              <p>{item.name}</p>
              <p>{item.age}</p>
              <button className="px-4 py-2 mt-4 bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={() => Edit(id)}
              >Edit</button>
              <button className="px-4 py-2 mt-4 bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={() => Delete(id)}
              >Delete</button>
            </div>

          ))}
        </div>
      </div>
    </>
  );
}

export default App;

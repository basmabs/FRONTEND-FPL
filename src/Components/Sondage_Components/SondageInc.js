import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SondageServices from '../Services/Sondage';
function CountTracker() {

  const params = useParams();
  const [count, setCount] = useState({
    count: '',
    option: ''
  })

  useEffect(() => {
    const getData = async () => {
      const response = await SondageServices.handleClick(params.idcount)
      setCount(response.data)
    }
    getData()
  }, [params.idcount])

  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const handleIncrementOne = () => {
    setCountOne((prevCount) => prevCount + 1);
  };
  const handleDecrementTwo = () => {
    setCountTwo((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <button className='btn btn-info mx-2' onClick={handleIncrementOne}>yes</button>
      <button className='btn btn-info' onClick={handleDecrementTwo}>no</button>
      <hr />
      <div className='d-flex justify-content-between'>
        <p>{countOne}</p>
        <p>{countTwo}</p>
      </div>
    </div>
  );
}
export default CountTracker
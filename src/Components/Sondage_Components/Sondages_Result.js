import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle";
import Count from './Count';
import Button from './Button';
import React, { useCallback, useState } from 'react';
function SondageResult() {
  const percentage = (10 / 100) * 100
  const [countOne, setCountOne] = useState({ value: 0, btnColor: 'success', increment: percentage });
  const [countTwo, setCountTwo] = useState({ value: 0, btnColor: 'danger', increment: percentage });

  const incrementCountOne = useCallback((val) => {
    countOne.value < 100 && setCountOne({ ...countOne, value: countOne.value + val })
  }, [countOne])

  const incrementCountTwo = useCallback((val) => {
    countTwo.value < 100 && setCountTwo({ ...countTwo, value: countTwo.value + val })
  }, [countTwo])

  return (
    <div className="card mx-auto w-50 mt-5">
      <div className="card-header text-center">
        <h4>Sondage Result</h4>
      </div>
      <div className="mx-2">
        <Count text="Countone" count={countOne.value} bgColor={countOne.btnColor} />
        <Count count={countTwo.value} bgColor={countTwo.btnColor} />
      </div><hr />
      <div className='d-flex justify-content-around '>
        <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>yes</Button>
        <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>no</Button>
      </div>
    </div>
  );
};
export default SondageResult;
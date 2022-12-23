import React from "react";
const Count = ({ count, bgColor }) => {
  console.log(`count added to sondage`);
  const progress = { width: `${count}%` };
  return (
    <>
      <p>{count}%</p>
      <div className="progress">
        <div className={`progress-bar progress-bar-striped bg-${bgColor}`} role="progressbar" style={progress}>
        </div>
      </div>
    </>
  )
}
export default React.memo(Count);

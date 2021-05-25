import React,{useState,useMemo} from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  
  const getNums = x => {
    
    return x  + (x + 1);
  };
  
  const numsss = useMemo(() => {
    return num ? getNums(num) : 0;
  }, [num]);
  
  return (
    <div>
      <div>Enter a number.</div>
      <input value={num} onChange={(e) =>
        setNum(e.target.value)}
      />
      <div>The added of {num} is {numsss}.</div>
    </div>
  );
}

export default App;
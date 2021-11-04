import logo from './logo.svg';
import './App.css';
import useOnlineStatus from './useOnlineStatus';
import { useEffect, useState, useRef } from 'react';
import moment from 'moment';

function App() {
  const {onlineStatus} = useOnlineStatus();
  const [statusArray, setStatusArray] = useState([]);

  useEffect(() => {
    setStatusArray(previousArray => {
      let newArray = [...previousArray];
      newArray.unshift({
        onlineStatus,
        statusTime: moment().toISOString(),
        count: (newArray[0]?.count || 0) + 1,
      })
  
      return newArray.slice(0, Math.min(newArray.length, 100));
    })
  }, [onlineStatus])

  return (
    <div className="App">
      <div className="App-header">
        <table>
          <thead>
            <th>Count</th>
            <th>Time</th>
            <th>Status</th>
          </thead>
          <tbody>
            {statusArray.map((n) => {
              return <tr key={n.statusTime}>
                <td>{n.count}</td>
                <td>{n.statusTime}</td>
                <td>{n.onlineStatus ? 'ONLINE' : 'OFFLINE'}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

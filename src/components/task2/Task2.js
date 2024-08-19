import React, { useEffect, useState } from 'react';
import './Task2.css'

const Task2 = () => {
    const [transactions, setTransactions] = useState([]);
    const [totalSum, setTotalSum] = useState(0);
    const [ws, setWs] = useState(null);

    useEffect(() => {
        return () => {
            if (ws) {
                ws.close();
            }
        };
    }, [ws]);

    const handleStart = () => {
        if (ws) return;

        const socket = new WebSocket("wss://ws.blockchain.info/inv");

        socket.onopen = () => {
            socket.send(JSON.stringify({ op: 'unconfirmed_sub' }));
        };

        socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                const transaction = {
                    hash: data.x.hash,
                    from: data.x.inputs[0]?.prev_out.addr || 'Unknown',
                    to: data.x.out[1]?.addr || 'Unknown',
                    sum: data.x.out.reduce((sum, output) => sum + output.value, 0) / 100000000,
                };
                setTransactions(prev => [...prev, transaction]);
                setTotalSum(prev => prev + transaction.sum);
            } catch (error) {
                console.error('Error parsing WebSocket message', error);
            }
        };

        socket.onerror = (error) => {
            console.error('WebSocket error', error);
        };
        setWs(socket);
    }


    const handleStop = () => {
        if (ws) {
            ws.send(JSON.stringify({ op: 'unconfirmed_unsub' }));
            ws.close();
            setWs(null);
        }
    };

    const handleReset = () => {
        setTransactions([]);
        setTotalSum(0);
    };

    return (
        <div className='task2'>
            <div className='buttons'>
                <button style={{ backgroundColor: "green" }} onClick={handleStart}>ЗАПУСК</button>
                <button style={{ backgroundColor: "red" }} onClick={handleStop}>ЗУПИНКА</button>
                <button style={{ backgroundColor: "orange" }} onClick={handleReset}>СКИНУТИ</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "40%" }}>From</th>
                        <th style={{ width: "40%" }}>To</th>
                        <th style={{ width: "20%" }}>Sum</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.reverse().map(item =>
                        <tr key={item.hash}>
                            <td>{item.from}</td>
                            <td>{item.to}</td>
                            <td><b>{totalSum} BTC</b></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Task2;

import React, { useState, useEffect } from "react";
import { Button, Input, Card, Table, Form, Popconfirm } from "antd";
import moment from "moment";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import '../Styles/Dashboard.css'; 

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const classifyText = async (text) => {
    try {
        const response = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-mnli", {
            method: "POST",
            headers: {
                Authorization: `Bearer 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`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inputs: text,
                parameters: { candidate_labels: ["Income", "Expense"] },
            }),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error classifying text:", error);
    }
};

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [totalBalance, setTotalBalance] = useState(0);

    useEffect(() => {
        const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
        setTransactions(storedTransactions);
    }, []);

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));

        const balance = transactions.reduce((acc, transaction) =>
            transaction.type === "Income" ? acc + transaction.amount : acc - transaction.amount
        , 0);
        setTotalBalance(balance);
    }, [transactions]);

    const handleAnalyze = async () => {
        const result = await classifyText(textInput);

        if (result && result.labels && result.labels.length > 0) {
            const label = result.labels[0];
            const amountMatch = textInput.match(/\d+(\.\d+)?/);
            const amount = amountMatch ? parseFloat(amountMatch[0]) : 0;

            const newTransaction = {
                key: Date.now(),  
                date: moment().format("YYYY-MM-DD"),
                amount,
                type: label,
                description: textInput,
            };

            setTransactions([...transactions, newTransaction]);
            setTextInput(""); 
        }
    };

    const handleDelete = (key) => {
        const updatedTransactions = transactions.filter((item) => item.key !== key);
        setTransactions(updatedTransactions);
    };

    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (_, record) => (
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                    <Button>Delete</Button>
                </Popconfirm>
            ),
        },
    ];

    const incomeData = transactions.filter((transaction) => transaction.type === "Income");
    const expenseData = transactions.filter((transaction) => transaction.type === "Expense");

    const incomeAmount = incomeData.reduce((acc, transaction) => acc + transaction.amount, 0);
    const expenseAmount = expenseData.reduce((acc, transaction) => acc - transaction.amount, 0);

    const data = {
        labels: ["Income", "Expense"],
        datasets: [
            {
                label: "Amount",
                data: [incomeAmount, expenseAmount],
                backgroundColor: ["#4caf50", "#f44336"]
            },
        ],
    };

    return (
        <div className="dashboard-container">
            <h1>Personal Profile</h1>
            <div className="total-balance">
                <h2>Total Balance: ${totalBalance.toFixed(2)}</h2>
            </div>
            <Input.TextArea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                rows={4}
                placeholder="Enter text to classify as Income or Expense"
                className="dark-gray-input"
            />
            <Button onClick={handleAnalyze} className="analyze-button">
                Analyze and Add Transaction
            </Button>

            <div className="card-container">
                <Card title="Income" className="dark-gray-table">
                    <Table
                        bordered
                        dataSource={incomeData}
                        columns={columns}
                        pagination={false}
                        className="dark-gray-table"
                    />
                </Card>

                <Card title="Expense" className="dark-gray-table">
                    <Table
                        bordered
                        dataSource={expenseData}
                        columns={columns}
                        pagination={false}
                        className="dark-gray-table"
                    />
                </Card>
            </div>

            <div className="chart-container">
                <h2>Income vs Expense</h2>
                <div style={{ width: '300px', height: '300px', margin: '0 auto' }}> {}
                    <Pie data={data} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

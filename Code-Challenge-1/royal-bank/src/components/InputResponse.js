import React, { useState } from 'react';
import { Form, Row, Col, Button, Table } from 'react-bootstrap';

function TransactionForm() {
    const [formData, setFormData] = useState({
        date: '',
        description: '',
        category: '',
        amount: ''
    });
    const [transactions, setTransactions] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = { ...formData };
        setTransactions([...transactions, newTransaction]);
        setFormData({
            date: '',
            description: '',
            category: '',
            amount: ''
        });
    };

    const handleDelete = (index) => {
        const updatedTransactions = [...transactions];
        updatedTransactions.splice(index, 1);
        setTransactions(updatedTransactions);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="text" name="date" value={formData.date} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={formData.description} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" name="category" value={formData.category} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="text" name="amount" value={formData.amount} onChange={handleInputChange} />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Add Transactions
                </Button>
            </Form>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default TransactionForm;

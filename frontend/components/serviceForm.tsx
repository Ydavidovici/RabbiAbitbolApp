import { useState } from 'react';
import axios from 'axios';

interface FormProps {
    fetchServices: () => void;
}

const ServiceForm: React.FC<FormProps> = ({ fetchServices }) => {
    const [form, setForm] = useState({ name: '', time: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/services', form);
        setForm({ name: '', time: '' });
        fetchServices();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Service Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Service Time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                required
            />
            <button type="submit">Add Service</button>
        </form>
    );
};

export default ServiceForm;

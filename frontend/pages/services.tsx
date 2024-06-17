import { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceForm from '../components/ServiceForm';
import ServiceList from '../components/ServiceList';

interface Service {
    id: number;
    name: string;
    time: string;
}

const Services: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        const response = await axios.get('http://localhost:5000/api/services');
        setServices(response.data);
    };

    return (
        <div>
            <h1>Services</h1>
            <ServiceForm fetchServices={fetchServices} />
            <ServiceList services={services} fetchServices={fetchServices} />
        </div>
    );
};

export default Services;

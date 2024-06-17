import axios from 'axios';

interface Service {
    id: number;
    name: string;
    time: string;
}

interface ListProps {
    services: Service[];
    fetchServices: () => void;
}

const ServiceList: React.FC<ListProps> = ({ services, fetchServices }) => {
    const handleDelete = async (id: number) => {
        await axios.delete(`http://localhost:5000/api/services/${id}`);
        fetchServices();
    };

    const handleUpdate = async (id: number) => {
        const updatedService = prompt('Enter new details:', 'name time');
        if (updatedService) {
            const [name, time] = updatedService.split(' ');
            await axios.put(`http://localhost:5000/api/services/${id}`, { name, time });
            fetchServices();
        }
    };

    return (
        <ul>
            {services.map(service => (
                <li key={service.id}>
                    {service.name} at {service.time}
                    <button onClick={() => handleUpdate(service.id)}>Update</button>
                    <button onClick={() => handleDelete(service.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ServiceList;

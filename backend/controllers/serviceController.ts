import { Request, Response } from 'express';

interface Service {
    id: number;
    name: string;
    time: string;
}

let services: Service[] = [];

export const getAllServices = (req: Request, res: Response): void => {
    res.json(services);
};

export const createService = (req: Request, res: Response): void => {
    const service: Service = { id: Date.now(), ...req.body };
    services.push(service);
    res.status(201).json(service);
};

export const updateService = (req: Request, res: Response): void => {
    const { id } = req.params;
    const index = services.findIndex(service => service.id == Number(id));
    if (index !== -1) {
        services[index] = { id: Number(id), ...req.body };
        res.json(services[index]);
    } else {
        res.status(404).json({ message: 'Service not found' });
    }
};

export const deleteService = (req: Request, res: Response): void => {
    const { id } = req.params;
    services = services.filter(service => service.id != Number(id));
    res.status(204).end();
};

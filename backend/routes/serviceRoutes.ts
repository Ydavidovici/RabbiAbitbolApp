import { Router } from 'express';
import { getAllServices, createService, updateService, deleteService } from '../controllers/serviceController';

const router: Router = Router();

router.get('/services', getAllServices);
router.post('/services', createService);
router.put('/services/:id', updateService);
router.delete('/services/:id', deleteService);

export default router;

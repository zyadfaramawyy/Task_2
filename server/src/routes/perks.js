import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { filterPerks, getPerk, createPerk, updatePerk, deletePerk,getAllPerks } from '../controllers/perkController.js';

const router = Router();

// router.get('/', filterPerks);
router.get('/',requireAuth, getAllPerks);
router.get('/:id',requireAuth,getPerk);

router.post('/',requireAuth, createPerk);
// put vs patch: put is for full updates, patch is for partial updates. they will both work,However it is just a convention.
router.patch('/:id', requireAuth,updatePerk);
router.delete('/:id',requireAuth, deletePerk);

export default router;

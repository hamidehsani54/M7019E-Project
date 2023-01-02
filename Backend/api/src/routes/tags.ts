import { Router, Request, Response } from 'express';
import Rabbitmq from '../../../common/rabbitmq';
import { respond } from '..';

const router = Router();

export default () => {
	/**
	 * @swagger
	 * /tags:
	 *   get:
	 *     tags:
	 *       - Tags
	 *     summary: Get a set of 10 tags
	 *     description: Get a set of 10 tags, ordered by newest created. Set = 1 gets the fist 10 tags, set = 2 gets the next 10, etc.
	 *     requestBody:
	 *         content:
	 *            application/x-www-form-urlencoded:
	 *              schema:
	 *                 $ref: '#/components/schemas/Set'
	 *            application/json:
	 *              schema:
	 *                 $ref: '#/components/schemas/Set'
	 *     responses:
	 *       200:
	 *         description: Success
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/TagsArray'
	 *       500:
	 *         description: Internal Server Error
	 */
	router.get('/', async (req: Request, res: Response) => {
		const data = req.body;
		const result = await Rabbitmq.sendRPC(
			'tags.get_all',
			JSON.stringify(data)
		);
		respond(res, result);
	});

	/**
	 * @swagger
	 * /tags/{id}:
	 *   get:
	 *     tags:
	 *       - Tags
	 *     summary: Get one tag
	 *     description: Get the tag of the given id
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         schema:
	 *           type: string
	 *           required: true
	 *     responses:
	 *       200:
	 *         description: Success
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/Tag'
	 *       500:
	 *         description: Internal Server Error
	 */
	router.get('/:id', async (req: Request, res: Response) => {
		const data = { ...req.body, ...req?.params };
		const result = await Rabbitmq.sendRPC(
			'tags.get_one',
			JSON.stringify(data)
		);
		respond(res, result);
	});

	/**
	 * @swagger
	 * /tags:
	 *   post:
	 *     tags:
	 *       - Tags
	 *     summary: Create a new tag. Only admins can do this.
	 *     description: Create a new tag with the given data
	 *     requestBody:
	 *         content:
	 *            application/x-www-form-urlencoded:
	 *              schema:
	 *                 $ref: '#/components/schemas/TagCreate'
	 *            application/json:
	 *              schema:
	 *                 $ref: '#/components/schemas/TagCreate'
	 *     responses:
	 *       200:
	 *         description: Success
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/Tag'
	 *       500:
	 *         description: Internal Server Error
	 */
	router.post('/', async (req: Request, res: Response) => {
		const data = req.body;
		const result = await Rabbitmq.sendRPC(
			'tags.post',
			JSON.stringify(data)
		);
		respond(res, result);
	});

	/**
	 * @swagger
	 * /tags/{id}:
	 *   patch:
	 *     tags:
	 *       - Tags
	 *     summary: Update one tag
	 *     description: Update the tag of the given id with the given data. Only admins can do this.
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         schema:
	 *           type: string
	 *           required: true
	 *     requestBody:
	 *         content:
	 *            application/x-www-form-urlencoded:
	 *              schema:
	 *                 $ref: '#/components/schemas/tagUpdate'
	 *            application/json:
	 *              schema:
	 *                 $ref: '#/components/schemas/tagUpdate'
	 *     responses:
	 *       200:
	 *         description: Success
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/tag'
	 *       500:
	 *         description: Internal Server Error
	 */
	router.patch('/:id', async (req: Request, res: Response) => {
		const data = { ...req.body, ...req?.params };
		const result = await Rabbitmq.sendRPC(
			'tags.patch',
			JSON.stringify(data)
		);
		respond(res, result);
	});

	return router;
};

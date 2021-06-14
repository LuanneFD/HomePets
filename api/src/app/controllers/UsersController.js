import User from '../models/User';
import sha1 from 'sha1';

class UserController {
    async store(req, res) { // CREATE
        const {
            name,
            date_of_birth,
            email,
            type,
            password
        } = req.body;

        const verifyUser = await User.findOne({
            where: { email }
        });

        if (verifyUser === null) {
            const user = await User.create({
                name,
                date_of_birth: new Date(date_of_birth),
                email,
                type,
                password: sha1(password)
            });

            return res.json({
                result: 'success',
                user
            });
        }

        return res.json({
            result: 'error'
        });
    }

    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    }

    async indexPrestador(req, res) {
        const users = await User.findAll({
            where: { type: 'P' }
        });

        return res.json(users);
    }

    async show(req, res) {
        const { id } = req.params;

        const user = await User.findByPk(id);

        return res.json(user);
    }

    async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email, password: sha1(password) }
        });

        return res.json({ result: 'success', user });
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, email, type, date_of_birth } = req.body;

        const user = await User.findByPk(id);
        await user.update({
            name,
            email,
            type,
            date_of_birth
        });

        return res.json(user);
    }
}

export default new UserController();



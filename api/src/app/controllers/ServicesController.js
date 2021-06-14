import Service from '../models/Service';
import User from '../models/User';

class ServicesController {
    async store(req, res) {
        const { name, duration, price, id_user } = req.body;

        const response = await Service.create({
            name,
            duration,
            price,
            id_user
        });

        return res.status(200).json({
            message: 'Serviço cadastrado com sucesso!',
            Service: response,
            success: true,
        });

    }

    async index(req, res) {
        const { id } = req.query;
        var response;
        if (id) {
            response = await Service.findAll({
                raw: true,
                where: [
                    { id_user: id }
                ],
                include: [
                    { model: User, as: 'user' }
                ]
            });
        }
        else {
            response = await Service.findAll({
                include: [
                    { model: User, as: 'user' }
                ]
            }
            );
        }
        return res.status(200).json(response);
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, duration, price, id_user } = req.body;

        const service = await Service.findByPk(id);

        const response = await service.update({
            name,
            duration,
            price,
            id_user
        });

        return res.status(200).json({
            message: 'Serviço atualizado com sucesso!',
            service: response,
            success: true,
        });
    }

    async destroy(req, res) {
        const { id } = req.params;

        const listId = id.split(',');

        listId.map(async item => {
            await Service.destroy({ where: { id: item } });
        });

        return res.json({
            message: 'Serviço(s) deletado(s) com sucesso!',
            success: true,
        });
    }
}

export default new ServicesController();
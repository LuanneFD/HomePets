import Schedule from '../models/Schedule';
import Pet from '../models/Pet';
import Service from '../models/Service';
import User from '../models/User';

class SchedulesController {
    async store(req, res) {
        const { id_service, id_pet, id_user, time } = req.body;

        const response = await Schedule.create({
            id_service,
            id_pet,
            id_user,
            time
        });

        return res.status(200).json({
            message: 'Serviço contratado com sucesso!',
            Schedule: response,
            success: true,
        });

    }

    async index(req, res) {
        const { id } = req.params;
        const response = await Schedule.findAll({
            raw: true,
            where: [
                { id_user: id }
            ],
            include: [
                {
                    model: Service, as: 'service',
                    include: [
                        { model: User, as: 'user' }
                    ]
                },
                { model: Pet, as: 'pet' }
            ]
        });
        return res.status(200).json(response);
    }

    async update(req, res) {
        const { id } = req.params;
        const { id_service, id_pet, time } = req.body;

        const schedule = await Schedule.findByPk(id);

        const response = await schedule.update({
            id_service,
            id_pet,
            time
        });

        return res.status(200).json({
            message: 'Atualizado com sucesso!',
            schedule: response,
            success: true,
        });
    }

    async destroy(req, res) {
        const { id } = req.params;

        const listId = id.split(',');

        listId.map(async id => {
            await Schedule.destroy({ where: { id } });
        });

        return res.json({
            message: 'Excluído com sucesso!',
            success: true,
        });
    }
}

export default new SchedulesController();
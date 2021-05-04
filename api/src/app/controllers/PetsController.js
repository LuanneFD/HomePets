import Pet from '../models/Pet';

class PetsController {
  async store(req, res) {
    const { name, age, breed, type, id_user } = req.body;

    const response = await Pet.create({
      name,
      age,
      breed,
      type,
      id_user
    });

    return res.status(200).json({
      message: 'Pet cadastrado com sucesso!',
      Pet: response,
      success: true,
    });

  }

  async index(req, res) {
    const { id } = req.params;
    const response = await Pet.findAll({
      raw: true,
      where: [
        { id_user: id }
      ]
    });

    return res.status(200).json(response);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, age, breed, type, id_user } = req.body;

    const pet = await Pet.findByPk(id);

    const response = await pet.update({
      name,
      age,
      breed,
      type,
      id_user
    });

    return res.status(200).json({
      message: 'Pet atualizado com sucesso!',
      pet: response,
      success: true,
    });
  }

  async destroy(req, res) {
    const { id } = req.params;

    const listId = id.split(',');

    listId.map(async id => {
      await Pet.destroy({ where: { id } });
    });

    return res.json({
      message: 'Pet(s) deletado(s) com sucesso!',
      success: true,
    });
  }
}

export default new PetsController();
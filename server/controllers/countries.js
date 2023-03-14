import { sequelize } from "../models/init-models.js";

const getCountries = async (req, res) => {
  try {
    const countries = await req.context.models.countries.findAll();
    return res.send(countries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getCountriesById = async (req, res) => {
  try {
    const countries = await req.context.models.countries.findOne({
      where: { country_id: req.params.id },
    });
    return res.send(countries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const addCountries = async (req, res) => {
  try {
    const { country_id, country_name, region_id } = req.body;
    const countries = await req.context.models.countries.create({
      country_id: country_id,
      country_name: country_name,
      region_id: region_id,
    });
    return res.send(countries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateCountries = async (req, res) => {
  try {
    const { country_id, country_name, region_id } = req.body;
    const countries = await req.context.models.countries.update(
      {
        country_id: country_id,
        country_name: country_name,
        region_id: region_id,
      },
      { returning: true, where: { country_id: req.params.id } }
    );
    return res.send(countries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteCountries = async (req, res) => {
  try {
    const countries = await req.context.models.countries.destroy({
      where: { country_id: req.params.id },
    });
    return res.send(`delete ${countries} rows`);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllCountriesQuery = async (req, res) => {
  try {
    const query = await sequelize.query("SELECT * from countries where country_id = :id", { replacements: { id: req.params.id }, type: sequelize.QueryTypes.SELECT });
    return res.send(query);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default {
  getCountries,
  getCountriesById,
  addCountries,
  updateCountries,
  deleteCountries,
  getAllCountriesQuery,
};
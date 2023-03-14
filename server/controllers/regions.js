import { sequelize } from "../models/init-models.js";

const getRegions = async (req, res) => {
  try {
    const region = await req.context.models.regions.findAll();
    return res.send(region);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getRegionById = async (req, res) => {
  try {
    const region = await req.context.models.regions.findOne({
      where: { region_id: req.params.id },
    });
    return res.send(region);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const addRegion = async (req, res) => {
  try {
    const { region_id, region_name } = req.body;
    const region = await req.context.models.regions.create({
      region_id: region_id,
      region_name: region_name,
    });
    return res.send(region);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateRegion = async (req, res) => {
  try {
    const { region_name } = req.body;
    const region = await req.context.models.regions.update(
      {
        region_name: region_name,
      },
      { returning: true, where: { region_id: req.params.id } }
    );
    return res.send(region);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteRegion = async (req, res) => {
  try {
    const region = await req.context.models.regions.destroy({
      where: { region_id: req.params.id },
    });
    return res.send(`delete ${region} rows`);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllRegionQuery = async (req, res) => {
  try {
    const query = await sequelize.query("SELECT * from regions where region_id = :id", { replacements: { id: req.params.id }, type: sequelize.QueryTypes.SELECT });
    return res.send(query);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default {
  getRegions,
  getRegionById,
  addRegion,
  updateRegion,
  deleteRegion,
  getAllRegionQuery,
};
import { sequelize } from "../models/init-models.js";

const getDepartment = async (req, res) => {
  try {
    const department = await req.context.models.departments.findAll();
    return res.send(department);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getDepartmentById = async (req, res) => {
  try {
    const department = await req.context.models.departments.findOne({
      where: { department_id: req.params.id },
    });
    return res.send(department);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const addDepartment = async (req, res) => {
  try {
    const { department_id, department_name, location_id } = req.body;
    const departments = await req.context.models.departments.create({
      department_id: department_id,
      department_name: department_name,
      location_id: location_id,
    });
    return res.send(departments);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateDepartment = async (req, res) => {
  try {
    const { department_id, department_name, location_id } = req.body;
    const departments = await req.context.models.departments.update(
      {
        department_id: department_id,
        department_name: department_name,
        location_id: location_id,
      },
      { returning: true, where: { department_id: req.params.id } }
    );
    return res.send(departments);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const department = await req.context.models.departments.destroy({
      where: { department_id: req.params.id },
    });
    return res.send(`delete ${department} rows`);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getDepartmentQueryById = async (req, res) => {
  try {
    const query = await sequelize.query("SELECT * from departments where department_id = :id", { replacements: { id: req.params.id }, type: sequelize.QueryTypes.SELECT });
    return res.send(query);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default {
  getDepartment,
  getDepartmentById,
  addDepartment,
  updateDepartment,
  deleteDepartment,
  getDepartmentQueryById,
};
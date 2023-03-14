import { sequelize } from "../models/init-models.js";

const getJobs = async (req, res) => {
  try {
    const job = await req.context.models.jobs.findAll();
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getRegJobsById = async (req, res) => {
  try {
    const job = await req.context.models.jobs.findOne({
      where: { job_id: req.params.id },
    });
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const addJobs = async (req, res) => {
  try {
    const { job_id,job_title, min_salary, max_salary} = req.body;
    const job = await req.context.models.jobs.create({
      job_id : job_id,
      job_title : job_title,
      min_salary : min_salary,
      max_salary : max_salary,
    });
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateJobs = async (req, res) => {
  try {
    const { job_title,min_salary,max_salary} = req.body;
    const job = await req.context.models.jobs.update(
      {
        job_title: job_title,
        min_salary : min_salary,
        max_salary : max_salary,
      },
      { returning: true, where: { job_id: req.params.id } }
    );
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteJobs = async (req, res) => {
  try {
    const job = await req.context.models.jobs.destroy({
      where: { job_id: req.params.id },
    });
    return res.send(`delete ${job} rows`);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllJobsQuery = async (req, res) => {
  try {
    const query = await sequelize.query("SELECT * from jobs where job_id = :id", { replacements: { id: req.params.id }, type: sequelize.QueryTypes.SELECT });
    return res.send(query);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default {
  getJobs,
  getRegJobsById,
  addJobs,
  updateJobs,
  deleteJobs,
  getAllJobsQuery,
};
import  Sequelize  from "sequelize";
import config from "../../config/config";

const sequelize = new Sequelize(config.db_name, config.db_username, config.db_pass, {
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const DataTypes = require("sequelize").DataTypes;
const _countries = require("./countries");
const _departments = require("./departments");
const _employees = require("./employees");
const _job_history = require("./job_history");
const _jobs = require("./jobs");
const _locations = require("./locations");
const _regions = require("./regions");

function initModels(sequelize) {
  const countries = _countries(sequelize, DataTypes);
  const departments = _departments(sequelize, DataTypes);
  const employees = _employees(sequelize, DataTypes);
  const job_history = _job_history(sequelize, DataTypes);
  const jobs = _jobs(sequelize, DataTypes);
  const locations = _locations(sequelize, DataTypes);
  const regions = _regions(sequelize, DataTypes);

  locations.belongsTo(countries, { as: "country", foreignKey: "country_id" });
  countries.hasMany(locations, { as: "locations", foreignKey: "country_id" });
  employees.belongsTo(departments, { as: "department", foreignKey: "department_id" });
  departments.hasMany(employees, { as: "employees", foreignKey: "department_id" });
  job_history.belongsTo(departments, { as: "department", foreignKey: "department_id" });
  departments.hasMany(job_history, { as: "job_histories", foreignKey: "department_id" });
  employees.belongsTo(jobs, { as: "job", foreignKey: "job_id" });
  jobs.hasMany(employees, { as: "employees", foreignKey: "job_id" });
  departments.belongsTo(locations, { as: "location", foreignKey: "location_id" });
  locations.hasMany(departments, { as: "departments", foreignKey: "location_id" });
  departments.belongsTo(locations, { as: "manager", foreignKey: "manager_id" });
  locations.hasMany(departments, { as: "manager_departments", foreignKey: "manager_id" });
  countries.belongsTo(regions, { as: "region", foreignKey: "region_id" });
  regions.hasMany(countries, { as: "countries", foreignKey: "region_id" });

  return {
    countries,
    departments,
    employees,
    job_history,
    jobs,
    locations,
    regions,
  };
}
const models = initModels(sequelize);
export default models;
export { sequelize };

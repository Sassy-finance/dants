import { Model } from "sequelize";
import { Table } from 'sequelize-typescript'

export interface IJob {
  pipeline: string,
  cid: string,
  result: string,
  status: string,
  bacalhauJob: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  @Table({ tableName: "job" })
  class Job extends Model<IJob> {
    pipeline: string;
    cid: string;
    result: string;
    status: string;
    bacalhauJob: string;
  }

  Job.init({
    pipeline: DataTypes.STRING,
    cid: DataTypes.STRING,
    result: DataTypes.STRING,
    status: DataTypes.STRING,
    bacalhauJob: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Job',
    timestamps: false
  })

  // Job.sync({force: true})

  return Job

}

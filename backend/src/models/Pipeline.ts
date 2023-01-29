import { Model } from "sequelize";
import { Table } from 'sequelize-typescript'

export interface IPipeline {
  name: string,
  description: string,
  price: string,
  sourceOne: string,
  sourceTwo: string,
  sourceThree: string,
  sourceFour: string,
  user: string,
}

module.exports = (sequelize: any, DataTypes: any) => {
  @Table({ tableName: "pipeline" })
  class Pipeline extends Model<IPipeline> {
    name: string;
    description: string;
    price: string;
    sourceOne: string;
    sourceTwo: string;
    sourceThree: string;
    sourceFour: string;
    user: string;
  }

  Pipeline.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    sourceOne: DataTypes.STRING,
    sourceTwo: DataTypes.STRING,
    sourceThree: DataTypes.STRING,
    sourceFour: DataTypes.STRING,
    user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pipeline',
    timestamps: false
  })

  Pipeline.sync({force: true});

  return Pipeline

}

import { Model } from "sequelize";
import { Table } from 'sequelize-typescript'

export interface IETL {
  etl_id: string,
  etl_name: string,
  etl_description: string,
  source_id: string,
  destination_id: string,
  source_name: string,
  destination_name: string,
  user: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  @Table({ tableName: "etl" })
  class ETL extends Model<IETL> {
    etl_id: string;
    etl_name: string;
    etl_description: string;
    source_id: string;
    destination_id: string;
    source_name: string;
    destination_name: string;
    user: string
  }

  ETL.init({
    etl_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    etl_name: DataTypes.STRING,
    etl_description: DataTypes.STRING,
    source_id: DataTypes.STRING,
    destination_id: DataTypes.STRING,
    source_name: DataTypes.STRING,
    destination_name: DataTypes.STRING,
    user: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ETL',
    timestamps: false
  })

  //ETL.sync({force: true});

  return ETL

}

import * as Sequelize from "sequelize";
import { IMember } from "../@types/member";
import { DataTypes, Model } from "sequelize";

export class Member extends Model<IMember> implements IMember {
    declare _id: number;
    declare name?: string;
    declare phone?: string;
    declare address?: string;
    declare password?: string;
    declare created_at?: Date;
    declare updated_at?: Date;
    declare deleted_at?: Date;

    static initModel(sequelize: Sequelize.Sequelize): typeof Member {
        Member.init(
            {
                _id: {
                    autoIncrement: true,
                    type: DataTypes.BIGINT,
                    allowNull: false,
                    primaryKey: true,
                },

                name: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                },

                phone: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                },

                address: {
                    type: DataTypes.STRING(255),
                    allowNull: true,
                },

                password: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                },

                created_at: {
                    type: DataTypes.DATE,
                    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
                    allowNull: false,
                },

                updated_at: {
                    type: DataTypes.DATE,
                    allowNull: true,
                },

                deleted_at: {
                    type: DataTypes.DATE,
                    allowNull: true,
                },
            },

            {
                /*속성 기입*/
                sequelize,
                tableName: "members",
                modelName: "member",
                freezeTableName: true,
                timestamps: false,
                paranoid: false,
                indexes: [
                    {
                        name: "PRIMARY",
                        unique: true,
                        using: "BTREE",
                        fields: ["_id"],
                    },
                ],
            }
        );

        return Member;
    }
}

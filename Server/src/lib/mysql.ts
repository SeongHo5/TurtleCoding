import { Sequelize } from "sequelize";
import { Member } from "../models/member.model";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.schema,
    process.env.username,
    process.env.password,
    {
        host: process.env.host,
        dialect: "mysql",
        dialectOptions: {
            connectTimeout: 1000,
        },
        pool: {
            // 연결관리(성능관리)
            max: 30, // 최대 30명 동시접속
            min: 0,
            acquire: 60000, // 연결을 흭득하는데 걸리는 최대시간(밀리초 단위)
            idle: 5000, // 연결이 풀에 유휴 상태로 유지되는 최대 시간
        },
        timezone: "+09:00",
        logging: false,
    }
);

export { sequelize as mysql };

export function initModels() {
    Member.initModel(sequelize);
}

export async function connect() {
    try {
        initModels();
        await sequelize.sync();
        console.log("MySQL Connection has been established successfully!!");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

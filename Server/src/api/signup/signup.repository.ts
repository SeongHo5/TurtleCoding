import { Op } from "sequelize";
import { Member } from "../../models/member.model";

export default class SignupRepository { 
          // 회원 생성
          const existingUser = await Member.findOne({
            where: {
              [Op.or]: [
                { name: { [Op.eq]: name } },
                { phone: { [Op.eq]: phone } },
              ],
            },
          });
    
          if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
          }
    
          await sequelize.transaction(async (transaction) => {
            await User.create(
              {
                username,
                email,
                password: hashedPassword,
              },
              { transaction }
            );
          });
}

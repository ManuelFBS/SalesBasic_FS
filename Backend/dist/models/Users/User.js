import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/db.js';
import Employee from '../Employees/Employee.js';
class User extends Model {
}
User.init({
    id: { type: DataTypes.NUMBER, autoIncrement: true },
    dni: { type: DataTypes.STRING, unique: true },
    user: { type: DataTypes.STRING(15), unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.ENUM('Owner', 'Admin', 'Employee') },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
});
User.belongsTo(Employee, { foreignKey: 'dni', targetKey: 'dni' });
export default User;
//# sourceMappingURL=User.js.map
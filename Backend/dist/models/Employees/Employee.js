import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/db.js';
import EmployeeStatus from './EmployeeStatus.js';
import Department from './Department.js';
import User from '../Users/User.js';
class Employee extends Model {
}
Employee.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true },
    dni: { type: DataTypes.STRING, unique: true, allowNull: false },
    name: { type: DataTypes.STRING(50), allowNull: false },
    lastName: { type: DataTypes.STRING(50), allowNull: false },
    birthDate: { type: DataTypes.DATE, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    phone: { type: DataTypes.STRING(15), unique: true, allowNull: false },
    country: { type: DataTypes.STRING },
}, {
    sequelize,
    modelName: 'Employee',
    tableName: 'employees',
    timestamps: false,
});
Employee.hasOne(EmployeeStatus, { foreignKey: 'dni', sourceKey: 'dni' });
Employee.hasOne(Department, { foreignKey: 'dni', sourceKey: 'dni' });
Employee.hasOne(User, { foreignKey: 'dni', sourceKey: 'dni' });
export default Employee;
//# sourceMappingURL=Employee.js.map
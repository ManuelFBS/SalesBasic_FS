import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/db.js';
import Employee from './Employee.js';

class Department extends Model {
    public id!: number;
    public dni!: string;
    public department!: string;
    public position!: string;
}

Department.init(
    {
        id: { type: DataTypes.NUMBER, autoIncrement: true },
        dni: { type: DataTypes.STRING, unique: true, allowNull: false },
        department: { type: DataTypes.STRING(50), allowNull: false },
        position: { type: DataTypes.STRING(50), allowNull: false },
    },
    {
        sequelize,
        modelName: 'Department',
        tableName: 'departments',
        timestamps: false,
    },
);

Department.belongsTo(Employee, { foreignKey: 'dni', targetKey: 'dni' });

export default Department;

import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/db.js';
import Employee from './Employee.js';

class EmployeeStatus extends Model {
    public id!: number;
    public dni!: string;
    public statusWork!:
        | 'Activo'
        | 'Vacaciones'
        | 'Permiso Laboral'
        | 'Reposo Médico'
        | 'Suspendido'
        | 'Desincorporado';
    public statusUser!: number;
}

EmployeeStatus.init(
    {
        id: { type: DataTypes.NUMBER, autoIncrement: true },
        dni: { type: DataTypes.STRING, unique: true, allowNull: false },
        statusWork: {
            type: DataTypes.ENUM(
                'Activo',
                'Vacaciones',
                'Permiso Laboral',
                'Reposo Médico',
                'Suspendido',
                'Desincorporado',
            ),
        },
        statusUser: {
            type: DataTypes.TINYINT,
            defaultValue: 1,
        },
    },
    {
        sequelize,
        modelName: 'EmployeeStatus',
        tableName: 'employeesStatus',
        timestamps: false,
    },
);

EmployeeStatus.belongsTo(Employee, { foreignKey: 'dni', targetKey: 'dni' });

export default EmployeeStatus;

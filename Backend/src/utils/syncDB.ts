import sequelize from '../config/db.js';
import Employee from '../models/Employees/Employee.js';
import EmployeeStatus from '../models/Employees/EmployeeStatus.js';
import Department from '../models/Employees/Department.js';
import User from '../models/Users/User.js';

const syncDatabase = async () => {
    try {
        // * Sincroniza la base de datos y crea la tabla si no existe...
        // ? await sequelize.sync({ force: true });
        await sequelize.sync({ force: process.env.NODE_ENV === 'development' });
        console.log('Base de datos y tabla creadas exitosamente.');
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
};

export default syncDatabase;

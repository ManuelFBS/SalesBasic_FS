export default {
    parser: '@typescript-eslint/parser', // Usar el parser de TypeScript
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // Recomendaciones para TypeScript
    ],
    parserOptions: {
        ecmaVersion: 2020, // Especificar la versión de ECMAScript
        sourceType: 'module', // Usar módulos de ES6
        project: './tsconfig.json', // Ruta al archivo tsconfig.json
    },
    rules: {
        // Aquí puedes agregar reglas personalizadas
    },
};

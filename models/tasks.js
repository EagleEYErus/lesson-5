module.exports = (sequelize, type) => {
    return sequelize.define('tasks', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        description: {
          type: type.STRING,
          allowNull: false
        }
    }, {
        underscored: true
    });
};

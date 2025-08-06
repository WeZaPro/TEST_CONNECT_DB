module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "taxiDriver",
    {
      taxi_id: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      taxi_lpr: Sequelize.STRING,
      driver: Sequelize.STRING,
      phone: Sequelize.STRING,
      line_name: Sequelize.STRING,
      line_user_id: Sequelize.STRING,
    },
    {
      tableName: "taxiDriver", // ✅ ชื่อตารางคงที่
      freezeTableName: true, // ✅ ห้าม Sequelize เติม s
      timestamps: true, // ✅ เปิด createdAt และ updatedAt
    }
  );
};

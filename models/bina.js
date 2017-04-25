'use strict'

module.exports = (sequelize, DataTypes)=>{
	const Bina = sequelize.define('bina', {
		adi: {
			type: DataTypes.STRING
		},
		zeminalti: {
			type: DataTypes.INTEGER
		},
		zeminustu: {
			type: DataTypes.INTEGER
		},
		geom: {
			type: DataTypes.GEOMETRY('Polygon',4326)
		}
	}, {
		paranoid: true,
		underscored:  true,
		freezeTableName: true
	});
	return Bina;
};
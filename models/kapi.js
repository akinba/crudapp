'use strict'

module.exports= (sequelize, DataTypes) => {
	const Kapi = sequelize.define('kapi',{
		adi: {
			type: DataTypes.STRING
		},
		kapino: {
			type: DataTypes.STRING(10)
		},
		kapituru: {
			type: DataTypes.ENUM,
			values: ['AnaGiris', 'BagGiris', 'TaliGiris']
		},
		geom: {
			type: DataTypes.GEOMETRY('POINT',4326)
		}
	},{
		paranoid: true,
		underscored: true,
		freezeTableName: true
	});
	return Kapi;
};
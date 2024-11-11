
const  Sequelize = require('sequelize');
const db = require('../db/connection');

const Job = db.define('job', {
    endereco:{
        type: Sequelize.STRING,
    },
    latitude:{
        type: Sequelize.STRING,
    },
    longitude:{
        type: Sequelize.STRING,
    },
    new_job:{
        type: Sequelize.INTEGER,
    }
})

module.exports = Job
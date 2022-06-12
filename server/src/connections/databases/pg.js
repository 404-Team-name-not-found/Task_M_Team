import {Sequelize} from 'sequelize';

class Postgres {
    static async connect(config) {
        try {
            this.database = await new Sequelize({...config, dialect: 'postgres'});

            await this.database.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            process.exit(-1);
        }
    }
}

export default Postgres
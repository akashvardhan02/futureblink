import dotenv from "dotenv";
dotenv.config();

const env = process.env.NODE_ENV; // 'development' or 'production'

let configEnv = null;

if (env === 'production') {
    configEnv = {
        db: process.env.MONGODB_URL,  // 'mongodb://127.0.0.1:27017/mail'
        port: process.env.PORT,       // '3000'
        jwtSecret: process.env.JWT_SECRET  // 'secret'
    }
} else {
    configEnv = {
        db: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/mail',
        port: process.env.PORT || 3000,
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}

export default configEnv;

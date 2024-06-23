import path from 'path';

const config = {
    APP_NAME: 'coder_53120_be',
    SERVER: 'atlas_17',
    PORT: 5050,
    // DIRNAME: url.fileURLToPath(new URL('.', import.meta.url)), // Linux / Mac
    DIRNAME: path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:\/)/, '$1')), // Win
    get UPLOAD_DIR() { return `${this.DIRNAME}/public/img` },
    // MONGODB_URI: 'mongodb://127.0.0.1:27017/coder_53120',
    MONGODB_URI: 'mongodb+srv://coder_53120:coder2024@clustercoder.sxqjiud.mongodb.net/coder_53120',
    MONGODB_ID_REGEX: /^[a-fA-F0-9]{24}$/,
    SECRET: 'coder_53120_abc1119',
    PRODUCTS_PER_PAGE: 5,
    /*
    ATENCION!!!: datos como el client_secret de Github NO deben exponerse de esta forma,
    lo estamos haciendo simplemente por comodidad para instrucción, más adelante los
    protegeremos colocándolos en otro lugar.
    */
    GITHUB_CLIENT_ID: 'Iv23liLLnFfYaJ1KunFA',
    GITHUB_CLIENT_SECRET: '490c05f7375bd6955bf740163e11d69abbd38dd3',
    GITHUB_CALLBACK_URL: 'http://localhost:5050/api/auth/ghlogincallback'
}

export default config;

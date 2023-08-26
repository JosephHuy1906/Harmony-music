interface IEnvironment {
    origin: string;
    apiUrl: string;
    prefix: string;
    version: string;
}
const environmentDevelopment: IEnvironment = {
    origin: 'https://harmony-music-ten.vercel.app/',
    apiUrl: 'https://hamony-music-web.onrender.com/',
    prefix: 'api',
    version: 'v1',
};

const environmentProduction: IEnvironment = {
    origin: 'https://harmony-music-ten.vercel.app/',
    apiUrl: 'https://hamony-music-web.onrender.com/',
    prefix: 'api',
    version: 'v1',
};

const environment: IEnvironment =
    process.env.NODE_ENV === 'production' ? environmentProduction : environmentDevelopment;

export default environment;

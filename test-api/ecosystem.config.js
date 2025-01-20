module.exports = {
    apps: [
        {
            name: 'api',
            script: './api/app/server.js',
            instances: 'max',
            exec_mode: 'fork',
            env: {
                NODE_ENV: 'development',
            },
        },
    ],
};

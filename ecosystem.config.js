module.exports = {
  apps: [{
    name: 'express-rest-api-dev',
    script: './src/bin/www',
    watch: true,
    ignore_watch: ['node_modules', 'src/log', '*.test.js'],
    env: {
      NODE_ENV: 'development'
    },
    instances: 1,
    autorestart: true,
    max_memory_restart: '1G',
    error_file: './src/log/pm2-error.log',
    out_file: './src/log/pm2-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    merge_logs: true
  }]
};

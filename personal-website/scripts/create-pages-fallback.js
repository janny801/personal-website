const fs = require('fs');
const path = require('path');

const buildDirectory = path.resolve(__dirname, '..', 'build');
const indexPath = path.join(buildDirectory, 'index.html');
const fallbackPath = path.join(buildDirectory, '404.html');

fs.copyFileSync(indexPath, fallbackPath);

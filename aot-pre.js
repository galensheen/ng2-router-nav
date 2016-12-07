/**
 * Created by galen on 16/12/7.
 */

const fs = require('fs');
const path = require('path');
const del = require('del');
const mkdirp = require('mkdirp');


const resources = [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.min.js',
    'styles.css'
];

const aotMainPath = './aot/main.ts';
const aotMainContent = `
import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from './app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
`;

del.sync('aot');

mkdirp.sync('aot');

fs.writeFileSync(aotMainPath, aotMainContent, 'utf8');

resources.map(file => {
    let newFile = path.join('aot', path.basename(file));
    fs.createReadStream(file).pipe(fs.createWriteStream(newFile));
});

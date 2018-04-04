/* eslint-disable no-console */

import fs from 'fs';
import getSiteState from '../../state';

const { promisify } = require('es6-promisify');

const writeFile = promisify(fs.writeFile);

getSiteState()
  .then(state => writeFile('assets/state.json', JSON.stringify(state, null, 2), 'utf8'))
  .then(() => console.log('Fetched'))
  .catch(console.error);

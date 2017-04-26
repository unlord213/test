let Harvester = require('Harvester');

/**
 * @typedef {CreepType}
 * @property {Array<String>} body - Body parts
 * @property {String} role - creep role
 * @property {number} cost - energy cost to create
 */

let creepTypes = new Map();
creepTypes.set(Harvester.ROLE, {
  body: Harvester.BODY,
  role: Harvester.ROLE,
  cost: Harvester.COST,
  creeps: []
});
console.log('role:', Harvester.ROLE, 'types:', JSON.stringify(creepTypes))

module.exports = creepTypes;

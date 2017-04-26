// var BaseCreep = require('BaseCreep');
let BaseSpawn = require('BaseSpawn');
let Harvester = require('Harvester');
let CreepManager = require('CreepManager');
let Cleanup = require('Cleanup');

module.exports.loop = function() {
  console.log('loop')
  Cleanup.cleanup();
  let baseSpawn = new BaseSpawn(Game.spawns['Spawn1']);

  let creepManager = new CreepManager();
  creepManager.run();

  if (creepManager.getNumOf(Harvester.ROLE) < 2) {
    baseSpawn.createCreep(Harvester.BODY, Harvester.ROLE, Harvester.COST);
  }
};

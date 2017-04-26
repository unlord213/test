// var BaseCreep = require('BaseCreep');
let BaseSpawn = require('BaseSpawn');
let Harvester = require('Harvester');
let CreepManager = require('CreepManager');

module.exports.loop = function() {
  let baseSpawn = new BaseSpawn(Game.spawns['Spawn1']);

  // let creeps = {
  //   HARVESTERS: []
  // };
  //
  // for (let [creepName, creepObj] of Object.entries(Game.creeps)) {
  //   switch (creepObj.memory.role) {
  //     case 'harvester':
  //       creeps.HARVESTERS.push(new Harvester(creepName, creepObj));
  //       break;
  //     default:
  //       break;
  //   }
  // }

  let creepManager = new CreepManager();
  creepManager.run();

  if (creepManager.get(Harvester.ROLE).length < 2) {
    // Harvester.create(baseSpawn, 'Harvester' + harvesters.length);
    baseSpawn.createCreep(Harvester.BODY, Harvester.ROLE, Harvester.COST);
  }

  // creeps.HARVESTERS.forEach((harvester) => {
  //   harvester.run();
  // });

  // var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  //
  // if (harvesters.length < 2) {
  //   Harvester.create(baseSpawn, 'Harvester' + harvesters.length);
  // }
  //
  // harvesters.forEach((harvester) => {
  //   new Harvester(harvester.name).run();
  // });
};

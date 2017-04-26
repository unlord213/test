// let creepTypes = require('CreepTypes');
let Harvester = require('Harvester');

class CreepManager {
  constructor() {
    this.creepTypes = require('CreepTypes');
    // this.creepTypes = new Map();
    // this.creepTypes.set(Harvester.ROLE, {
    //   body: Harvester.BODY,
    //   role: Harvester.ROLE,
    //   cost: Harvester.COST,
    //   creeps: []
    // });
    // console.log('types1:', this.creepTypes)
    // let sortCreep = function(name, creep) {
    //   this.creepTypes[creep.memory.role].creeps.push(new Harvester(name, creep));
    // };

    for (let name of Object.keys(Game.creeps)) {
      let creep = Game.creeps[name];
      // console.log('name ', name, "role ", creep.memory.role, 'type:', this.creepTypes[creep.memory.role])
      this.creepTypes.get(creep.memory.role).creeps.push(new Harvester(name, creep));
    }
    // console.log('types2:', this.creepTypes)
    // Game.creeps.forEach((name, creep) => sortCreep);
    // creepTypes.forEach((role, creepType));
    // this.creeps = new Map();
    //
    // for (let type in CreepTypes) {
    //   if (CreepTypes.hasOwnProperty(type)) {
    //     this.creeps.set(type, []);
    //     // this.creeps[type] = [];
    //   }
    // }

    // this.creeps = this.initializeTypes();
  }

  run() {
    // console.log('run')
    // console.log('types3:', this.creepTypes)
    // console.log(JSON.stringify(this.creeps));
    // let runCreepType = function(creepType, role) {
    //   console.log('role:', role, 'type:', creepType)
    //   this.creepType.creeps.forEach((creep) => creep.run());
    // };
    this.creepTypes.forEach((creepType, role) => {
      // console.log('role:', JSON.stringify(role), 'type:' , creepType)
      creepType.creeps.forEach((creep) => creep.run());
    });
    // for (let creeps of Object.values(this.creeps)) {
    //   // creeps.forEach((creep) => creep.run);
    //   for (let creep of creeps) {
    //     creep.run();
    //   }
    // }
  }

  get(role) {
    return this.creepTypes.get(role).creeps;
  }

  // /**
  //  * Initialize the arrays of creeps
  //  * @private
  //  * @return {Object.<String, Array<CreepType>>} map of role to array of creeps
  //  */
  // initializeTypes() {
  //   let creeps = {};
  //   for (let type in CreepTypes) {
  //     if (object.hasOwnProperty(type)) {
  //       creeps[type] = [];
  //     }
  //   }
  //
  //   return creeps;
  // }
}

module.exports = CreepManager;

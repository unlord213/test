let Harvester = require('Harvester');
let creepTypes = require('CreepTypes');

/**
 * Class to sort and run creeps
 */
class CreepManager {
  constructor() {
    this.creepTypes = creepTypes;

    for (let name of Object.keys(Game.creeps)) {
      let creep = Game.creeps[name];
      this.creepTypes.get(creep.memory.role).creeps.push(new Harvester(name, creep));
    }
  }

  /**
   * Run all the creeps
   */
  run() {
    this.creepTypes.forEach((creepType, role) => {
      creepType.creeps.forEach((creep) => creep.run());
    });
  }

  /**
   * Return the number of creeps of the give type
   *
   * @param {String} role role to count
   * @return {number} number of creeps
   */
  getNumOf(role) {
    return this.creepTypes.get(role).creeps.length;
  }
}

module.exports = CreepManager;

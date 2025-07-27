ServerEvents.highPriorityData(event => {
  event.addJson('irons_spellbooks:loot_modifiers/remove_netherite_from_ancient_knight', {
    type: 'kubejs:remove_loot',
    conditions: [
      {
        condition: 'minecraft:entity_properties',
        entity: 'this',
        predicate: {
          type: 'irons_spellbooks:ancient_knight'
        }
      }
    ],
    item: 'minecraft:netherite_scrap'
  })
})

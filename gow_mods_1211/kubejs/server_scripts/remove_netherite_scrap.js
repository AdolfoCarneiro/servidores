ServerEvents.entityLootTables(event => {
    event.modify('ironspells:ancient_knight', table => {
        table.removeItem('minecraft:netherite_scrap')
    })
})
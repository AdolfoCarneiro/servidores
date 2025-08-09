ServerEvents.recipes(event => {
    event.remove({ id: 'create_mechanical_extruder:extruding/andesite' })
    event.remove({ id: 'create_mechanical_extruder:extruding/granite' })
    event.remove({ id: 'create_mechanical_extruder:extruding/diorite' })
    event.remove({ id: 'create_mechanical_extruder:extruding/obsidian' })
    event.remove({ id: 'create_mechanical_extruder:extruding/advanced_obsidian' })
    event.remove({ id: 'create_mechanical_extruder:extruding/sandstone' })
    event.remove({ id: 'create_mechanical_extruder:extruding/crimsite' })
    event.remove({ id: 'create_mechanical_extruder:extruding/asurine' })
    event.remove({ id: 'create_mechanical_extruder:extruding/ochrum' })
    event.remove({ id: 'create_mechanical_extruder:extruding/veridium' })

    // Andesite entre água + lava, apenas entre Y -60 e -50
    event.custom({
        type: 'create_mechanical_extruder:extruding',
        result: { id: 'minecraft:andesite' },
        blockIngredients: {
            first: { blocks: 'minecraft:water' },
            second: { blocks: 'minecraft:lava' }
        },
        requirements: [
            { type: 'mechanicals:min_y', value: -60 },
            { type: 'mechanicals:max_y', value: -50 }
        ]
    })

    // Granite no mesmo range
    event.custom({
        type: 'create_mechanical_extruder:extruding',
        result: { id: 'minecraft:granite' },
        blockIngredients: {
            first: { blocks: 'minecraft:water' },
            second: { blocks: 'minecraft:lava' }
        },
        requirements: [
            { type: 'mechanicals:min_y', value: -60 },
            { type: 'mechanicals:max_y', value: -50 }
        ]
    })

    // Diorite no mesmo range
    event.custom({
        type: 'create_mechanical_extruder:extruding',
        result: { id: 'minecraft:diorite' },
        blockIngredients: {
            first: { blocks: 'minecraft:water' },
            second: { blocks: 'minecraft:lava' }
        },
        requirements: [
            { type: 'mechanicals:min_y', value: -60 },
            { type: 'mechanicals:max_y', value: -50 }
        ]
    })
})
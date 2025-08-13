ServerEvents.recipes(event => {
    event.remove({ id: "minecraft:diorite" })
    event.remove({ id: "minecraft:andesite" })
    event.remove({ id: "minecraft:granite" })

    event.remove({ id: "create:crafting/materials/andesite_alloy" })
    event.remove({ id: "create:crafting/materials/andesite_alloy_from_zinc" })
    event.remove({ id: "create:mixing/andesite_alloy" })
    event.remove({ id: "create:mixing/andesite_alloy_from_zinc" })

    event.shaped(Item.of("create:andesite_alloy", 2), [
        "SS",
        "AA"
    ], {
        A: "minecraft:andesite",
        S: "architects_palette:algal_brick"
    })

    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "architects_palette:algal_brick"
            },
            {
                "item": "minecraft:andesite"
            }
        ],
        "results": [
            {
                "count": 2,
                "item": {
                    "id": "create:andesite_alloy"
                }
            }
        ]
    })

    event.custom({
        "type": 'create:milling',
        "ingredients": [
            {
                "item": 'minecraft:gravel'
            }
        ],
        "results": [
            {
                "item": {
                    "id": "minecraft:sand"
                },
                "count": 1
            }
        ],
        processingTime: 100
    }).id('kubejs:milling/gravel_manual');
})

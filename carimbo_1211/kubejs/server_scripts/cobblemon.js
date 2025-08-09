ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "cobblemore_lib:poke_ball_base"
            },
            {
                "item": "cobblemore_lib:quick_ball_lid"
            },
            {
                "item": "create:zinc_nugget"
            },
            {
                "type": "fluid_stack",
                "amount": 250,
                "fluid": "create:potion",
                "components": { "minecraft:potion_contents": { "potion": "minecraft:swiftness" } }
            }
        ],
        "results": [
            {
                "count": 1,
                "item": {
                    "id": "cobblemon:quick_ball"
                }
            }
        ]
    })
})
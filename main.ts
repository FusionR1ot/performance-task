namespace SpriteKind {
    export const weapon = SpriteKind.create()
    export const stat_bar = SpriteKind.create()
}
function energy2 () {
    if (energy == 5) {
        energy_use = sprites.create(assets.image`5energy_bar`, SpriteKind.stat_bar)
        energy_use.setFlag(SpriteFlag.RelativeToCamera, true)
    }
    if (energy == 4) {
        energy_use = sprites.create(assets.image`4energy_bar`, SpriteKind.stat_bar)
        energy_use.setFlag(SpriteFlag.RelativeToCamera, true)
    }
    if (energy == 3) {
        energy_use = sprites.create(assets.image`3energy_bar`, SpriteKind.stat_bar)
        energy_use.setFlag(SpriteFlag.RelativeToCamera, true)
    }
    if (energy == 2) {
        energy_use = sprites.create(assets.image`2energy_bar`, SpriteKind.stat_bar)
        energy_use.setFlag(SpriteFlag.RelativeToCamera, true)
    }
    if (energy == 1) {
        energy_use = sprites.create(assets.image`1energy_bar`, SpriteKind.stat_bar)
        energy_use.setFlag(SpriteFlag.RelativeToCamera, true)
    }
    if (energy == 0) {
        energy_use = sprites.create(assets.image`0energy`, SpriteKind.stat_bar)
        energy_use.setFlag(SpriteFlag.RelativeToCamera, true)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (airslash == 1) {
        if (game.runtime() - last_pressed >= time) {
            projectile = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Projectile)
            projectile = sprites.createProjectileFromSprite(assets.image`airslash`, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 100, Render.getAttribute(Render.attribute.dirY) * 100)
            projectile.setScale(0.25, ScaleAnchor.Middle)
            last_pressed = game.runtime()
            energy += -1
            energy2()
        }
    }
    animation.runImageAnimation(
    sword,
    [img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        .........................................................b......
        ........................................................bb......
        .......................................................bb1......
        .......................................................b11......
        .......................................................b11......
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ..................................................ff..bb111.....
        ..................................................ff..bb111.....
        .................................................fddffbb111.....
        .................................................fddffbb111.....
        ..................................................ffdbfff11.....
        ...................................................fdbfff11.....
        ....................................................ffddbfff....
        ......................................................ddbfff....
        ......................................................fffddbf...
        .......................................................ffddbf...
        .......................................................fffffbf..
        .......................................................ff..fbf..
        .......................................................ff...f...
        .......................................................ff.......
        .......................................................ff.......
        .......................................................ff.......
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `,img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        .......................................................fffff....
        ..................................................ffffffaaff....
        .............................................ffffffaaaaaaff.....
        .........................................b.fffaaaaaaaaaaaf......
        ........................................bbffaaaaaaaaaaaaf.......
        ........................................b11aaaaaaaaaaaaff.......
        .......................................bb11aaaaaaaaaaaff........
        .......................................bb111aaaaaaaaaaf.........
        .......................................bb111aaaaaaaaaf..........
        .......................................bb111aaaaaaaaff..........
        ........................................bb111aaaaaaaf...........
        ........................................bb111aaaaaaff...........
        ........................................bb111aaaaaaf............
        ........................................bb1111aaaaff............
        .........................................bb111aaaaf.............
        .........................................bb111aaaaf.............
        .........................................bb111aaaff.............
        ..........................................bb111aaf..............
        ..........................................bb111aaf..............
        ..........................................bb111aff..............
        ..........................................bb111af...............
        ..........................................bb111af...............
        ...........................................bb111f...............
        ...........................................bb111................
        ...........................................bb111................
        ...........................................bb1111...............
        ...........................................bbb111...............
        .............................................b111...............
        .............................................bb111..............
        .............................................bb111..............
        .............................................bb111..............
        ..............................................bb111.............
        ..............................................bb111.............
        ..............................................bb111.............
        ...............................................bb111............
        ...............................................bb111............
        ...............................................bb111............
        .............................................fffffffffffff......
        ............................................fddddddddbbbccf.....
        ............................................fddddddddbbbccf.....
        .............................................fffffffffffff......
        ..................................................fff...........
        ...................................................fff..........
        ...................................................fff..........
        ....................................................fff.........
        ....................................................fff.........
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `,img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ...................................................ff...........
        .................................................ffbbf..........
        ...............................................ffbbff...........
        ...........111111111111111111111111111111111111ffddf............
        ......bb111111111111111111111111111111111111111ffddf............
        .......bb111111111111111111111111111111111111ffbbffffffff.......
        ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffddffffffff.......
        ...........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffddf..............
        ...........................................ffbbf................
        ...........................................ffddf................
        .........................................ffddff.................
        .........................................ffddf..................
        ...........................................ff...................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `,img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        .........................................................b......
        ........................................................bb......
        .......................................................bb1......
        .......................................................b11......
        .......................................................b11......
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ......................................................bb111.....
        ..................................................ff..bb111.....
        ..................................................ff..bb111.....
        .................................................fddffbb111.....
        .................................................fddffbb111.....
        ..................................................ffdbfff11.....
        ...................................................fdbfff11.....
        ....................................................ffddbfff....
        ......................................................ddbfff....
        ......................................................fffddbf...
        .......................................................ffddbf...
        .......................................................fffffbf..
        .......................................................ff..fbf..
        .......................................................ff...f...
        .......................................................ff.......
        .......................................................ff.......
        .......................................................ff.......
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `],
    100,
    false
    )
})
function vit_meter () {
    vitality = statusbars.create(40, 6, StatusBarKind.Health)
    vitality.setLabel("VITALITY")
    vitality.setColor(9, 2)
    vitality.setBarBorder(1, 1)
    vitality.setFlag(SpriteFlag.RelativeToCamera, true)
    vitality.setPosition(49, 111)
    vitality.setFlag(SpriteFlag.GhostThroughSprites, true)
    vitality.max = 100
    vitality.value = 100
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.setGameOverMessage(false, "This can't be the end")
    game.gameOver(false)
})
function enemy (myImage: Image) {
    stabber = sprites.create(myImage, SpriteKind.Enemy)
    return stabber
}
function spawn () {
    enemy(assets.image`stabby`)
    Render.move(stabber, 60)
    stabber.follow(joel, 25)
    tiles.placeOnRandomTile(stabber, assets.tile`enemyspawn`)
    enemy(assets.image`stabby`)
    Render.move(stabber, 60)
    stabber.follow(joel, 25)
    tiles.placeOnRandomTile(stabber, assets.tile`enemyspawn`)
    enemy(assets.image`stabby`)
    Render.move(stabber, 60)
    stabber.follow(joel, 25)
    tiles.placeOnRandomTile(stabber, assets.tile`enemyspawn`)
    enemy(assets.image`stabby`)
    Render.move(stabber, 60)
    stabber.follow(joel, 25)
    tiles.placeOnRandomTile(stabber, assets.tile`enemyspawn`)
    enemy(assets.image`stabby`)
    Render.move(stabber, 60)
    stabber.follow(joel, 25)
    tiles.placeOnRandomTile(stabber, assets.tile`enemyspawn`)
    enemy(assets.image`stabby`)
    Render.move(stabber, 60)
    stabber.follow(joel, 25)
    tiles.placeOnRandomTile(stabber, assets.tile`enemyspawn`)
    enemy(assets.image`stabby`)
    Render.move(stabber, 60)
    stabber.follow(joel, 25)
    tiles.placeOnRandomTile(stabber, assets.tile`enemyspawn`)
    enemy(assets.image`stabby`)
    Render.move(stabber, 60)
    stabber.follow(joel, 25)
    tiles.placeOnRandomTile(stabber, assets.tile`enemyspawn`)
    enemy(assets.image`stabby`)
    Render.move(stabber, 60)
    stabber.follow(joel, 25)
    tiles.placeOnRandomTile(stabber, assets.tile`enemyspawn`)
}
let stabber: Sprite = null
let vitality: StatusBarSprite = null
let projectile: Sprite = null
let energy_use: Sprite = null
let airslash = 0
let energy = 0
let time = 0
let last_pressed = 0
let sword: Sprite = null
let joel: Sprite = null
game.splash("\"you can't do anything\"")
game.splash("\"you're worthless\"")
game.splash("I'll prove them wrong ")
tiles.setCurrentTilemap(tilemap`level`)
Render.setViewMode(ViewMode.raycastingView)
joel = Render.getRenderSpriteVariable()
Render.moveWithController(3, 5, 0)
spawn()
sword = sprites.create(assets.image`sword`, SpriteKind.weapon)
sword.setFlag(SpriteFlag.RelativeToCamera, true)
sword.setPosition(120, 64)
sword.changeScale(1.5, ScaleAnchor.Right)
last_pressed = 0
time = 500
energy2()
energy = 5
airslash = 1
vit_meter()

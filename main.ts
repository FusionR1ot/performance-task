namespace SpriteKind {
    export const weapon = SpriteKind.create()
    export const stat_bar = SpriteKind.create()
    export const ded = SpriteKind.create()
}
namespace StatusBarKind {
    export const reload = StatusBarKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (reloading == 1) {
        if (game.runtime() - last_press_b >= time) {
            airslash = 0
            reload3()
            energy = 5
            last_press_b = game.runtime()
        }
    }
})
function energy2 (list: Sprite[]) {
    if (energy == 5) {
        energy_use = list[0]
        energy_use.setFlag(SpriteFlag.RelativeToCamera, true)
    }
    if (energy == 4) {
        energy_use = list[1]
        energy_use.setFlag(SpriteFlag.RelativeToCamera, true)
    }
    if (energy == 3) {
        energy_use = list[2]
        energy_use.setFlag(SpriteFlag.RelativeToCamera, true)
    }
    if (energy == 2) {
        energy_use = list[3]
        energy_use.setFlag(SpriteFlag.RelativeToCamera, true)
    }
    if (energy == 1) {
        energy_use = list[4]
        energy_use.setFlag(SpriteFlag.RelativeToCamera, true)
    }
    if (energy == 0) {
        energy_use = list[5]
        energy_use.setFlag(SpriteFlag.RelativeToCamera, true)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (airslash == 1) {
        if (game.runtime() - last_pressed >= time) {
            projectile = sprites.create(assets.image`pixel`, SpriteKind.Projectile)
            projectile = sprites.createProjectileFromSprite(assets.image`airslash`, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 100, Render.getAttribute(Render.attribute.dirY) * 100)
            projectile.setScale(0.25, ScaleAnchor.Middle)
            last_pressed = game.runtime()
            energy += -1
            energy2(list)
        }
    }
    animation.runImageAnimation(
    sword,
    assets.animation`sword_animation`,
    100,
    false
    )
})
function reload3 () {
    reloading = 0
    reload2 = statusbars.create(35, 4, StatusBarKind.reload)
    reload2.setFlag(SpriteFlag.RelativeToCamera, true)
    reload2.setBarBorder(1, 15)
    reload2.setColor(6, 1, 0)
    reload2.setFlag(SpriteFlag.GhostThroughSprites, true)
    reload2.setPosition(140, 105)
    reload2.value = 0
    reload2.max = 110
    pause(3000)
    sprites.destroy(reload2)
    reloading = 1
    airslash = 1
    energy = 5
    mySprite = sprites.create(assets.image`5energy_bar`, SpriteKind.stat_bar)
}
function death (myImage: Image) {
    stabber = sprites.create(myImage, SpriteKind.ded)
    return stabber
}
function vit_meter () {
    vitality = statusbars.create(40, 4, StatusBarKind.Health)
    vitality.setColor(9, 2, 5)
    vitality.setBarBorder(1, 1)
    vitality.setLabel("VIT")
    vitality.setPosition(36, 115)
    vitality.setFlag(SpriteFlag.GhostThroughSprites, true)
    vitality.value = 200
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.setGameOverMessage(false, "its over")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    vitality.value += -5
    pause(200)
})
function enemy (myImage: Image) {
    stabber = sprites.create(myImage, SpriteKind.Enemy)
    return stabber
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`door`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverMessage(true, "I finally did it!")
})
function spawn () {
    for (let index = 0; index < 15; index++) {
        enemy(assets.image`stabby`)
        Render.move(stabber, 0, 0)
        stabber.follow(joel, 10)
        tiles.placeOnRandomTile(stabber, assets.tile`enemyspawn`)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
let vitality: StatusBarSprite = null
let stabber: Sprite = null
let mySprite: Sprite = null
let reload2: StatusBarSprite = null
let projectile: Sprite = null
let energy_use: Sprite = null
let reloading = 0
let airslash = 0
let last_press_b = 0
let energy = 0
let time = 0
let last_pressed = 0
let list: Sprite[] = []
let sword: Sprite = null
let joel: Sprite = null
game.splash("\"you can't do anything\"")
game.splash("\"you're worthless\"")
game.splash("I'll prove them wrong ")
tiles.setCurrentTilemap(tilemap`level`)
scene.setBackgroundImage(assets.image`back`)
Render.setViewMode(ViewMode.raycastingView)
joel = Render.getRenderSpriteVariable()
Render.moveWithController(3, 5, 0)
spawn()
sword = sprites.create(assets.image`sword`, SpriteKind.weapon)
sword.setFlag(SpriteFlag.RelativeToCamera, true)
sword.setPosition(120, 64)
sword.changeScale(1.5, ScaleAnchor.Right)
list = [
sprites.create(assets.image`5energy_bar`, SpriteKind.stat_bar),
sprites.create(assets.image`4energy_bar`, SpriteKind.stat_bar),
sprites.create(assets.image`3energy_bar`, SpriteKind.stat_bar),
sprites.create(assets.image`2energy_bar`, SpriteKind.stat_bar),
sprites.create(assets.image`1energy_bar`, SpriteKind.stat_bar),
sprites.create(assets.image`0energy`, SpriteKind.stat_bar)
]
vit_meter()
last_pressed = 0
time = 500
energy = 5
last_press_b = 0
let time_between_b = 1
airslash = 1
energy2(list)
reloading = 1
forever(function () {
    pauseUntil(() => airslash == 0)
    reload2.value += 1
})

namespace SpriteKind {
    export const weapon = SpriteKind.create()
    export const stat_bar = SpriteKind.create()
    export const ded = SpriteKind.create()
    export const display = SpriteKind.create()
}
namespace StatusBarKind {
    export const reload = StatusBarKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (reloading == 1) {
        if (game.runtime() - last_press_b >= time) {
            airslash = 0
            reload3()
            last_press_b = game.runtime()
        }
    }
})
function gen_word () {
    word = list[randint(0, 3)]
    return word
}
function energy2 () {
    if (energy >= 5) {
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
            projectile = sprites.create(assets.image`pixel`, SpriteKind.Projectile)
            projectile = sprites.createProjectileFromSprite(assets.image`airslash`, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 100, Render.getAttribute(Render.attribute.dirY) * 100)
            projectile.setScale(0.25, ScaleAnchor.Middle)
            last_pressed = game.runtime()
            energy += -1
            energy2()
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
    energy2()
    energy_use.setFlag(SpriteFlag.RelativeToCamera, true)
    energy_use = sprites.create(assets.image`5energy_bar`, SpriteKind.stat_bar)
}
function death (myImage: Image) {
    stabber = sprites.create(myImage, SpriteKind.ded)
    return stabber
}
function vit_meter () {
    vitality = statusbars.create(40, 4, StatusBarKind.Health)
    vitality.setColor(9, 2)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`door`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverMessage(true, "I finally did it!")
})
function spawn (place: any[]) {
    for (let value of tiles.getTilesByType(assets.tile`enemyspawn`)) {
        myEnemy = sprites.create(spawnlist._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(myEnemy, value)
        if (myEnemy.image.equals(assets.image`stabby`)) {
            Render.move(myEnemy, 0, 0)
            myEnemy.follow(joel, 15)
        } else if (myEnemy.image.equals(assets.image`dusk`)) {
            Render.move(myEnemy, 0, 0)
            myEnemy.follow(joel, 15)
        } else {
            Render.move(myEnemy, 0, 0)
            myEnemy.follow(joel, 15)
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
let myEnemy: Sprite = null
let vitality: StatusBarSprite = null
let stabber: Sprite = null
let reload2: StatusBarSprite = null
let projectile: Sprite = null
let energy_use: Sprite = null
let word: Sprite = null
let reloading = 0
let airslash = 0
let last_press_b = 0
let energy = 0
let time = 0
let last_pressed = 0
let sword: Sprite = null
let list: Sprite[] = []
let spawnlist: Image[] = []
let joel: Sprite = null
game.splash("\"you can't do anything\"")
game.splash("\"you're worthless\"")
game.splash("I'll prove them wrong ")
tiles.setCurrentTilemap(tilemap`level`)
scene.setBackgroundImage(assets.image`back`)
Render.setViewMode(ViewMode.raycastingView)
joel = Render.getRenderSpriteVariable()
Render.moveWithController(3, 5, 0)
spawnlist = [assets.image`dusk`, assets.image`stabby`]
spawn(list)
list = [
sprites.create(assets.image`1`, SpriteKind.display),
sprites.create(assets.image`2`, SpriteKind.display),
sprites.create(assets.image`3`, SpriteKind.display),
sprites.create(assets.image`4`, SpriteKind.display)
]
sword = sprites.create(assets.image`sword`, SpriteKind.weapon)
sword.setFlag(SpriteFlag.RelativeToCamera, true)
sword.setPosition(120, 64)
sword.changeScale(1.5, ScaleAnchor.Right)
vit_meter()
last_pressed = 0
time = 500
energy = 5
last_press_b = 0
let time_between_b = 1
airslash = 1
energy2()
reloading = 1
forever(function () {
    pause(randint(0, 5000))
    gen_word()
    word.setFlag(SpriteFlag.RelativeToCamera, true)
    word.setPosition(randint(80, 170), randint(60, 170))
    pause(1000)
    word.setFlag(SpriteFlag.RelativeToCamera, false)
    sprites.destroy(word, effects.none, 0)
})
forever(function () {
    pauseUntil(() => airslash == 0)
    reload2.value += 2
})

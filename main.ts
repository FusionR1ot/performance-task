namespace SpriteKind {
    export const weapon = SpriteKind.create()
    export const stat_bar = SpriteKind.create()
    export const ded = SpriteKind.create()
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
function sight2 () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (sight.isInSightCone(
        value,
        joel,
        10,
        0,
        10
        ) && characterAnimations.matchesRule(stabber, characterAnimations.rule(Predicate.FacingRight))) {
            stabber.follow(joel, 25)
        } else if (sight.isInSightCone(
        value,
        joel,
        10,
        90,
        10
        ) && characterAnimations.matchesRule(stabber, characterAnimations.rule(Predicate.FacingUp))) {
            stabber.follow(joel, 25)
        } else if (sight.isInSightCone(
        value,
        joel,
        10,
        180,
        10
        ) && characterAnimations.matchesRule(stabber, characterAnimations.rule(Predicate.FacingUp))) {
            stabber.follow(joel, 25)
        } else if (sight.isInSightCone(
        value,
        joel,
        10,
        270,
        10
        ) && characterAnimations.matchesRule(stabber, characterAnimations.rule(Predicate.FacingUp))) {
            stabber.follow(joel, 25)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`airslash`, joel, -50, 0)
    pause(500)
})
function death (myImage: Image) {
    stabber = sprites.create(myImage, SpriteKind.Enemy)
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
function enemy (myImage: Image) {
    stabber = sprites.create(myImage, SpriteKind.Enemy)
    return stabber
}
function spawn () {
    timer.background(function () {
        for (let index = 0; index < 9; index++) {
            enemy(assets.image`stabby`)
            tiles.placeOnRandomTile(stabber, assets.tile`enemyspawn`)
        }
    })
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    death(assets.image`deded`)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
let vitality: StatusBarSprite = null
let projectile: Sprite = null
let stabber: Sprite = null
let energy_use: Sprite = null
let energy = 0
let joel: Sprite = null
game.splash("\"you can't do anything\"")
game.splash("\"you're worthless\"")
game.splash("I'll prove them wrong ")
tiles.setCurrentTilemap(tilemap`level`)
joel = sprites.create(assets.image`joel`, SpriteKind.Player)
controller.moveSprite(joel, 100, 100)
scene.cameraFollowSprite(joel)
spawn()
let last_pressed = 0
let time = 500
energy2()
energy = 5
let airslash = 1
vit_meter()
characterAnimations.runFrames(
joel,
assets.animation`right`,
500,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.runFrames(
joel,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f c c c c c c f f f . . 
    . . f f c 8 8 8 8 8 8 c c f . . 
    . . f c 8 f f f f f f 8 c f . . 
    . . f f f f c c c c f f f f . . 
    . f f c f b f d d f b f c f f . 
    . f c c d 1 f d d f 1 d c c f . 
    . . f c c c c c c c c c c f . . 
    . . . f c c c c c c c c f . . . 
    . . c c f 8 8 8 8 8 8 f c c . . 
    . . d d f 8 8 8 8 8 8 f d d . . 
    . . d d f 7 7 6 6 7 7 f d d . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f c c c c c c f f f . . 
    . . f f c 8 8 8 8 8 8 c c f . . 
    . f f c 8 f f f f f f 8 c f f . 
    . f f f f f c c c c f f f f f . 
    . . f c f b f d d f b f c f . . 
    . . f c d 1 f d d f 1 d c f . . 
    . . . f c c c c c c c c f c . . 
    . . f c f 8 8 8 8 d d d c c . . 
    . . d d f 8 8 8 8 d d d d . . . 
    . . . . f 7 7 6 6 f d d . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f c c c c c c f f f . . 
    . . f f c 8 8 8 8 8 8 c c f . . 
    . . f c 8 f f f f f f 8 c f . . 
    . . f f f f c c c c f f f f . . 
    . f f c f b f d d f b f c f f . 
    . f c c d 1 f d d f 1 d c c f . 
    . . f c c c c c c c c c c f . . 
    . . . f c c c c c c c c f . . . 
    . . c c f 8 8 8 8 8 8 f c c . . 
    . . d d f 8 8 8 8 8 8 f d d . . 
    . . d d f 7 7 6 6 7 7 f d d . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f e e 2 2 2 2 2 2 e f f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . e f e 4 d d d d 4 e f . . . 
    . . e 4 d d e 2 2 2 2 f e f . . 
    . . . e d d e 2 2 2 2 f 4 e . . 
    . . . . e e f 5 5 4 4 f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . . f f f . . . . 
    `],
500,
characterAnimations.rule(Predicate.NotMoving)
)
characterAnimations.runFrames(
joel,
[img`
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
characterAnimations.rule(Predicate.NotMoving)
)
characterAnimations.runFrames(
joel,
[img`
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
characterAnimations.rule(Predicate.NotMoving)
)

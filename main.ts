namespace SpriteKind {
    export const wincondition = SpriteKind.create()
    export const extralifeinto2 = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
}
function Titlescreen () {
    scene.setBackgroundColor(15)
    game.setDialogTextColor(10)
    game.setDialogFrame(img`
        ..................................................................
        .....888..888........................................888..888.....
        ...68777887778.66666.........6666666.........666666.87778877786...
        ..68777777777786999666.....66699999666.....666999968777777777786..
        ..687887777887899999966...6699999999966...6699999998788777788786..
        ..66788777788769999999666669999999999966666999999996788777788766..
        ..67777777777776999999999999999999999999999999999967777777777776..
        ..633777777773366999999999999999999999999999999996633777777773366.
        .6733776666773376999999999999999999999999999999996733776666773376.
        .677776dddd67777699999999999999999999999999999999677776dddd677776.
        .6d666dddddd666d6999999999999999999999999999999996d666dddddd666d6.
        .6dddddddddddddd6999999999999999999999999999999996dddddddddddddd6.
        ..6dddddddddddd699999999999999999999999999999999996dddddddddddd6..
        ...666666666666999999999999999999999999999999999999666666666666...
        ...699999999999999999999999999999999999999999999999999999999996...
        ..66999999999999999999999999999999999999999999999999999999999966..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999966..
        ..6699999999999999999999999999999999999999999999999999999999996...
        ...699999999999999999999999999999999999999999999999999999999966...
        ...66999999999999999999999999999999999999999999999999999999966....
        ....669999999999999999999999999999999999999999999999999999996.....
        .....69999999999999999999999999999999999999999999999999999996.....
        .....69999999999999999999999999999999999999999999999999999996.....
        .....699999999999999999999999999999999999999999999999999999966....
        ....66999999999999999999999999999999999999999999999999999999966...
        ...669999999999999999999999999999999999999999999999999999999996...
        ...6999999999999999999999999999999999999999999999999999999999966..
        ..66999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999966..
        ..6699999999999999999999999999999999999999999999999999999999996...
        ...699999999999999999999999999999999999999999999999999999999966...
        ...66999999999999999999999999999999999999999999999999999999966....
        ....669999999999999999999999999999999999999999999999999999996.....
        .....69999999999999999999999999999999999999999999999999999996.....
        .....69999999999999999999999999999999999999999999999999999996.....
        .....699999999999999999999999999999999999999999999999999999966....
        ....66999999999999999999999999999999999999999999999999999999966...
        ...669999999999999999999999999999999999999999999999999999999996...
        ...6999999999999999999999999999999999999999999999999999999999966..
        ..66999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..66999999999999999999999999999999999999999999999999999999999966..
        ...699999999999999999999999999999999999999999999999999999999996...
        ...668889988899999999999999999999999999999999999999998889988866...
        ....8777887778999999999999999999999999999999999999998777887778....
        ...877777777778999999999999999999999999999999999999877777777778...
        ...878877778878999999999999999999999999999999999999878877778878...
        ...678877778876999999999999999999999999999999999999678877778876...
        ..67777777777776999999999999999999999999999999999967777777777776..
        ..633777777773366999999999999999999999999999999996633777777773366.
        .6733776666773376999999999999999999999999999999996733776666773376.
        .677776dddd67777699999966666999999999996666699999677776dddd677776.
        .6d666dddddd666d69999966...6699999999966...6699996d666dddddd666d6.
        .6dddddddddddddd6999666.....66699999666.....666996dddddddddddddd6.
        ..6dddddddddddd666666.........6666666.........66666dddddddddddd6..
        ...666666666666....................................666666666666...
        ..................................................................
        `)
    game.showLongText("              DODGE TO WIN!!           ", DialogLayout.Center)
    game.splash("Catch 5 POWER SPHERES", "Avoid bats!")
}
function Endingscreen () {
    scene.setBackgroundColor(15)
    game.setDialogTextColor(7)
    game.setDialogFrame(img`
        ..66666666666666666666..
        .6699999999999999999966.
        669991111111111111199966
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        669991111111111111199966
        .6699999999999999999966.
        ..66666666666666666666..
        `)
    game.showLongText("GOOD JOB !", DialogLayout.Center)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.wincondition, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite, effects.smiles, 500)
    info.changeScoreBy(50)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . b 5 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . b 5 5 5 5 5 5 5 b b b b b . 
        . . b 5 5 5 5 5 5 5 5 b 5 d b . 
        . . f 4 d 5 f 1 d 5 b 5 5 b . . 
        . . c 4 4 5 f f 1 b 5 5 d b . . 
        . b 4 4 4 4 b f d 5 5 5 b d b b 
        b 4 4 4 4 4 4 5 b 5 5 d c d d b 
        . b 5 5 5 5 5 5 5 b c c d d d c 
        . b 5 5 5 5 5 5 5 d d d d d b c 
        . b d 5 5 5 5 5 d d d d d d c . 
        . . b b 5 5 5 d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . b 5 5 5 5 5 5 5 b b b b b . 
        . . b 5 5 5 5 5 5 5 5 b 5 d b . 
        . . f 4 d 5 f 1 d 5 b 5 5 b . . 
        . . c 4 4 5 f f 1 b 5 5 d b . . 
        b 4 4 4 4 4 b f d 5 5 5 b d b b 
        . b 4 4 4 4 4 5 b 5 5 d c d d b 
        . b 5 5 5 5 5 5 5 b c c d d d c 
        . b 5 5 5 5 5 5 5 d d d d d b c 
        . b d 5 5 5 5 5 d d d d d d c . 
        . . b b 5 5 5 d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . . c b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . f d 5 5 f 1 d 5 b b . . . . 
        . . c 4 d 5 f f 1 5 5 b . . . . 
        . . 4 4 d d b f d 5 5 b . . . . 
        b 4 4 4 4 4 5 5 5 d b b d d d b 
        . b 4 4 4 4 4 5 5 b 5 5 5 d b b 
        . . b 5 5 5 5 5 d 5 5 5 5 c d b 
        . b 5 5 5 5 5 5 b 5 5 d c d d c 
        . b 5 5 5 5 5 5 5 b c c d d b c 
        . b d 5 5 5 5 5 d d d d d d c . 
        . . b b 5 5 5 d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . c 4 d 5 f 1 d 5 b b . . . . 
        b 4 4 4 d d f f 1 5 5 b . . . . 
        . b 4 4 4 4 b f d 5 5 b . . . . 
        . . b 4 4 4 4 5 5 5 5 d b . . . 
        . . b 5 5 5 5 5 5 5 5 d d b . . 
        . b 5 5 5 5 5 5 5 5 d d d d b . 
        . b 5 5 5 5 5 5 5 b b b d d d b 
        . b 5 5 5 5 5 5 c d 5 5 b d d c 
        . b 5 5 5 5 5 5 d c d 5 d b b c 
        . b d 5 5 5 5 5 d d c b 5 5 b . 
        . . b b 5 5 5 d d d d c c c b b 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . c 4 d 5 f 1 d 5 b b . . . . 
        b 4 4 4 d d f f 1 5 5 b . . . . 
        . b 4 4 4 4 b f d 5 5 b . . . . 
        . . b 4 4 4 4 5 5 5 5 d b . . . 
        . . b 5 5 5 5 5 5 5 d d d b b . 
        . b 5 5 5 5 5 5 5 b b b d d d b 
        . b 5 5 5 5 5 5 c d 5 5 b d d c 
        . b 5 5 5 5 5 5 d c d 5 d b b c 
        . b 5 5 5 5 5 5 d d c b 5 5 b c 
        . b d 5 5 5 5 5 d d d c c c b b 
        . . b b 5 5 5 d d d c c . . . . 
        . . . b b c c c c c . . . . . . 
        `,img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . f d 5 5 f 1 d 5 b b . . . . 
        . . c 4 d 5 f f 1 5 5 b . . . . 
        . . 4 4 d d b f d 5 5 b . . . . 
        b 4 4 4 4 4 5 5 5 5 5 d b b b . 
        . b 4 4 4 4 4 5 5 d b b d d d b 
        . . b 5 5 5 5 5 5 b 5 5 5 d b b 
        . b 5 5 5 5 5 5 d 5 5 5 5 c d c 
        . b 5 5 5 5 5 5 b 5 5 d c d b c 
        . b d 5 5 5 5 5 d b c c d d c . 
        . . b b 5 5 5 d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 4 b 
        b d d c d 5 5 b 5 4 4 4 4 4 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . b b d d d 5 5 5 5 5 5 5 b . . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        c b 5 5 b c d d 5 5 5 5 5 5 b . 
        b b c c c d d d 5 5 5 5 5 d b . 
        . . . . c c d d d 5 5 5 b b . . 
        . . . . . . c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
    scene.cameraShake(4, 500)
    sprites.destroy(otherSprite, effects.spray, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (info.life() <= 2) {
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        sprites.destroy(otherSprite, effects.fire, 500)
        info.changeLifeBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.extralifeinto2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeLifeBy(2)
})
let winitem: Sprite = null
let randomenemyanimation = 0
let projectile: Sprite = null
let extralife: Sprite = null
let extralifeinto22: Sprite = null
let mySprite: Sprite = null
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
Titlescreen()
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
    ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
    fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
    fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
    ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
    f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
    ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
    ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
    fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
    fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
    ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
    fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
    ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
    ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
    fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
    ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
    bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
    bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
    bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
    3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
    333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
    cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
    cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
    cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
    bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
    bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
    dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
    dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
    dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
    ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
    ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
    ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
    ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
    d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
    333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
    33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
    33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
    d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
    ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
    b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
    bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
    bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
    b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
    dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
    dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
    dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
    dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
    3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
    33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    `)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(4)
info.setScore(0)
game.onUpdate(function () {
    if (info.score() == 250) {
        Endingscreen()
        game.gameOver(true)
    }
})
game.onUpdateInterval(2000, function () {
    extralifeinto22 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.Food)
    extralifeinto22.setVelocity(randint(-50, 50), randint(-50, 50))
    extralifeinto22.setPosition(randint(-50, 200), randint(-50, 200))
})
game.onUpdateInterval(2000, function () {
    extralife = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    extralife.setVelocity(randint(-50, 50), randint(-50, 50))
    extralife.setPosition(randint(-50, 200), randint(-50, 200))
})
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    randomenemyanimation = randint(0, 1)
    if (randomenemyanimation == 0) {
        animation.runImageAnimation(
        projectile,
        [img`
            f f f . . . . . . . . f f f . . 
            c b b c f . . . . . . c c f f . 
            . c b b c f . . . . . . c c f f 
            . c c c b f . . . . . . c f c f 
            . c c b b c f . c c . c c f f f 
            . c b b c b f c c 3 c c 3 c f f 
            . c b c c b f c b 3 c b 3 b f f 
            . . c c c b b c b 1 b b b 1 c . 
            . . . c c c c b b 1 b b b 1 c . 
            . . . . c c b b b b b b b b b c 
            . . . . f b b b b c 1 f f 1 b c 
            . . . c f b b b b f 1 f f 1 f f 
            . . c c f b b b b f 2 2 2 2 f f 
            . . . . f c b b b b 2 2 2 2 f . 
            . . . . . f c b b b b b b f . . 
            . . . . . . f f f f f f f . . . 
            `,img`
            . . . . . . . . . . . f f f . . 
            f f f . . . . . . . . c c f f f 
            c b b c f . . . c c . c c c f f 
            . c b b b f f c c 3 c c 3 c f f 
            . c c c b b f c b 3 c b 3 c f f 
            . c c b c b f c b b b b b b c f 
            . c b b c b b c b 1 b b b 1 c c 
            . c b c c c b b b b b b b b b c 
            . . c c c c c b b c 1 f f 1 b c 
            . . . c f b b b b f 1 f f 1 f c 
            . . . c f b b b b f f f f f f f 
            . . c c f b b b b f 2 2 2 2 f f 
            . . . . f c b b b 2 2 2 2 2 f . 
            . . . . . f c b b b 2 2 2 f . . 
            . . . . . . f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c . c c . . . 
            . . . . . . c c c 3 c c 3 f . . 
            . . . . . c c c b 3 c b 3 c f . 
            . . . . f f b b b b b b b b c f 
            . . . . f f b b b 1 b b b 1 c c 
            . . . f f f c b b b b b b b b c 
            . . . f f f f b b c 1 f f 1 b c 
            . . . b b b c c b f 1 f f 1 f f 
            . . . c c c c f b f f f f f f f 
            . . c c c b b f b f 2 2 2 2 f f 
            . . . c b b c c b 2 2 2 2 2 f . 
            . . c b b c c f f b 2 2 2 f . . 
            . c c c c c f f f f f f f . . . 
            c c c c . . . . . . . . . . . . 
            `,img`
            . f f f . . . . . . . . f f f . 
            . c b b c f . . . . . . . c f f 
            . . c b b c f . . . . . . c c f 
            . . c c c b f . . . . . . . f c 
            . . c c b b f f . . . . . f f c 
            . . c b b c b f c c . c c f f f 
            . . c b c c b f c c c c c f f f 
            . . . c c c b c b 3 c c 3 c f . 
            . . . c c c c b b 3 c b 3 b c . 
            . . . . c c b b b b b b b b c c 
            . . . c f b b b 1 1 b b b 1 1 c 
            . . c c f b b b b b b b b b b f 
            . . . . f b b b b c b b b c b f 
            . . . . f c b b b 1 f f f 1 f . 
            . . . . . f c b b b b b b f . . 
            . . . . . . f f f f f f f . . . 
            `],
        200,
        true
        )
    } else {
        animation.runImageAnimation(
        projectile,
        [img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c 1 b b b 1 b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b 1 f f 1 c b b b b f . . . . 
            f f 1 f f 1 f b b b b f c . . . 
            f f 2 2 2 2 f b b b b f c c . . 
            . f 2 2 2 2 b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c c . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f c 3 b c 3 b c f b b c c c . 
            f c b b b b b b c f b c b c c . 
            c c 1 b b b 1 b c b b c b b c . 
            c b b b b b b b b b c c c b c . 
            c b 1 f f 1 c b b c c c c c . . 
            c f 1 f f 1 f b b b b f c . . . 
            f f f f f f f b b b b f c . . . 
            f f 2 2 2 2 f b b b b f c c . . 
            . f 2 2 2 2 2 b b b c f . . . . 
            . . f 2 2 2 b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c c . c c . . . . . . . . 
            . . f 3 c c 3 c c c . . . . . . 
            . f c 3 b c 3 b c c c . . . . . 
            f c b b b b b b b b f f . . . . 
            c c 1 b b b 1 b b b f f . . . . 
            c b b b b b b b b c f f f . . . 
            c b 1 f f 1 c b b f f f f . . . 
            f f 1 f f 1 f b c c b b b . . . 
            f f f f f f f b f c c c c . . . 
            f f 2 2 2 2 f b f b b c c c . . 
            . f 2 2 2 2 2 b c c b b c . . . 
            . . f 2 2 2 b f f c c b b c . . 
            . . . f f f f f f f c c c c c . 
            . . . . . . . . . . . . c c c c 
            `,img`
            . f f f . . . . . . . . f f f . 
            f f c . . . . . . . f c b b c . 
            f c c . . . . . . f c b b c . . 
            c f . . . . . . . f b c c c . . 
            c f f . . . . . f f b b c c . . 
            f f f c c . c c f b c b b c . . 
            f f f c c c c c f b c c b c . . 
            . f c 3 c c 3 b c b c c c . . . 
            . c b 3 b c 3 b b c c c c . . . 
            c c b b b b b b b b c c . . . . 
            c 1 1 b b b 1 1 b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            f b c b b b c b b b b f . . . . 
            . f 1 f f f 1 b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `],
        200,
        true
        )
    }
})
game.onUpdateInterval(1500, function () {
    winitem = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.wincondition)
    winitem.setVelocity(randint(-50, 50), randint(-50, 50))
    winitem.setPosition(randint(-50, 200), randint(-50, 200))
})
forever(function () {
    music.setVolume(15)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})

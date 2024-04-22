def on_b_pressed():
    pass
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    sprites.destroy(mySprite2, effects.disintegrate, 500)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.player, on_on_overlap)

mySprite2: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level2
"""))
mySprite = sprites.create(img("""
        .......fffff..........
            .....ffff11fff........
            .fffffff11111fff......
            fffffff1111111ffff....
            fffddfff111111ffff....
            fddddfffff11111ffcf...
            ffddddff8ff111fffcff..
            ffdddfff88fffff8fccf..
            ffffffff888ffff8fccf..
            ffffffff888f55f8fccf..
            .fcccfff888fffffffff..
            .fcccffff888888fffffff
            .fccccffff8888ffffbbbf
            .fcccccffffffffffbbbbf
            ..fccccfbbbbf88fffffff
            ...fffffbbbbf888f.....
            ......fffffff888f.....
            ......f888f.f888f.....
            ......f888f.f888f.....
            ......f888f.f888f.....
            .......ffff.ffff......
            .......fffffffffff....
            ........ffff.fffff....
    """),
    SpriteKind.player)
controller.move_sprite(mySprite)
statusbar = statusbars.create(45, 6, StatusBarKind.health)
statusbar.set_position(25, 8)
mySprite2 = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . 2 2 2 5 5 2 2 2 . . . . 
            . . . f f f f 2 2 2 2 2 2 . . . 
            . . 2 f f f f 4 4 4 1 1 2 2 . . 
            . . f f f f f 4 4 4 1 1 5 2 . . 
            . 2 f f f f 4 4 4 4 4 5 5 2 2 . 
            . 2 f f f 4 4 4 2 2 2 2 5 2 2 . 
            . 2 2 f f 4 4 2 2 2 2 2 2 2 2 . 
            . 2 4 f f 4 4 2 2 2 2 2 2 2 2 . 
            . . 2 4 f f 4 2 2 2 2 2 4 2 . . 
            . . 2 4 4 f 4 4 2 2 2 4 2 2 . . 
            . . . 2 4 4 4 4 4 4 4 4 2 . . . 
            . . . . 2 2 4 4 4 4 2 2 . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.enemy)
statusbar2 = statusbars.create(20, 4, StatusBarKind.health)
statusbar.set_label("HP")
statusbar2.attach_to_sprite(mySprite2)
tiles.place_on_random_tile(mySprite2, sprites.dungeon.floor_dark_diamond)
scene.camera_follow_sprite(mySprite)
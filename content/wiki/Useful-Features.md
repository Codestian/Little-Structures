# Useful Commands

# Chat Commands

## To Vanilla

Allows you to turn tiles that are grid size 1 into vanilla blocks, if possible, to save on performance.

**Comand:** /lt-tovanilla

MORE INFO COMING SOON

## Export/Import

Allows you to export/import creations between worlds, as well as share them with other players.

### Export

![export](https://user-images.githubusercontent.com/29471180/39876083-b2a3fb72-5448-11e8-9704-adcaea68cb09.gif)

**Command:** /lt-export

Put a Little Recipe or Advanced Recipe in the first slot. A text will be generated. Click Copy and then paste this text in a .txt file so you don't lose it.

**Warning: Clicking Export Model will generate a different text that is not usable for the Importer. This text is importing the model as a.json file.**

### Import

![import](https://user-images.githubusercontent.com/29471180/39876084-b33a659e-5448-11e8-8ae3-a7ab037a2027.gif)

**Command:** /lt-import

Put a Little Recipe or Advanced Recipe in the first slot then paste the structure text and press Import. This will output the structure inside the recipe type imputed in the first slot.

## Open Door

![opendoor](https://user-images.githubusercontent.com/29471180/39880688-de1cd2f4-5454-11e8-95ff-eca9ace1e891.gif)

**Command:** /lt-open x y z

Opens all doors at specified coordinate. To get the correct coordinates, stand where the door axis is located, type /lt-open and press TAB to fill in the coordinates.

If you have more than one door within the blockspace you are trying to open:

Name each individual door with a unique name in the recipe. 

Then use:
/lt-open x y z door1

Replacing "door1" with the name you gave your door

You can open more named doors by just adding the names on to the end of the command like so:

/lt-open x y z door1 door2 door3


# Keybinds

## Undo/Redo

### Undo

![undo](https://user-images.githubusercontent.com/29471180/39876073-afb1e262-5448-11e8-8bde-219423a06dea.gif)

**Keybind:** Ctrl + Z  

Undoes an action.

### Redo

![redo](https://user-images.githubusercontent.com/29471180/39876075-b05e0ba0-5448-11e8-8d08-e91f58bcc1c6.gif)

**Keybind:** Ctrl + Y 

Redoes an action.

## Open Special Tool Settings

**Keybind:** Ctrl + C

Allows to change grid size and tool settings.



### Mode 1 - Filter

![2018-05-10_12 16 22](https://user-images.githubusercontent.com/29471180/39877830-4c6d2be4-544d-11e8-8ace-747dfb98fe6d.png)

1. If enabled, disables any filters. The tool will affect all tiles.
2. Currently filtered block. Allows you to select from your inventory or the creative menu.
3. Search bar. Writing a block name will filter out the options from the above menu.
4. 
5. Grid Size selection.

* **Usable for:** Little Hammer, Little Paintbrush

Allows you to filter specific blocks, so the tools only act on them.

![filter](https://user-images.githubusercontent.com/29471180/39879501-5bc3b53c-5451-11e8-9b93-67dbf75a5252.gif)

### Mode 2 - Placement Mode

![2018-05-10_12 16 40](https://user-images.githubusercontent.com/29471180/39877832-4d76367a-544d-11e8-972a-4a920d8b82c5.png)

1. Placement Mode Selection
2. Grid Size selection
3. Placement Mode description

* **Usable for:** Little Chisel, Little Glove, Any Structure

Allows you to select how placement works.

* **Default Mode** - Tile can only be places if there's space for ALL tiles in the aimed block. Note that this only take effect for tiles, placing a tile inside a full MC block will result in a behavior similar to Fill Mode.

![default mode](https://user-images.githubusercontent.com/29471180/39879045-3a76e8d2-5450-11e8-8a17-20f56746c302.gif)

* **Fill Mode** - Tiles can be placed anywhere. Tiles that don't fit will be ignored.

![fill mode](https://user-images.githubusercontent.com/29471180/39879048-3b36f046-5450-11e8-87d1-174f0c3167a0.gif)

* **Overwrite Mode** - Will place all tiles and removing the overlapping space. Works for the Structure recipe type.

![overwrite mode](https://user-images.githubusercontent.com/29471180/39879056-3ca25a56-5450-11e8-9ad1-ee3e8d539990.gif)

* **Replace Mode** - Will ONLY place the tiles in the overlapping space. Won't affect Structure recipe type.

![replace mode](https://user-images.githubusercontent.com/29471180/39879059-3d440a40-5450-11e8-8fe4-8d8b2f968863.gif)

## Mark Mode

![markmode2](https://user-images.githubusercontent.com/29471180/39880078-021ee108-5453-11e8-93b4-a2505a0c7841.gif)

**Keybind:** M

Enter Mark Mode. In Mark Mode, you can fixate a preview of the Structure you're holding and movie it with the arrow keys. To move up and down, hold sneak (or alt while flying) and then press UP and DOWN arrows.

## Enhanced Mark Mode

**Keybind:** Ctrl + M while on Mark Mode

### Low Res Mode Toggle (Available for Tools and Structures)

Toggles Low Resolution Mode on/off.

![enhanced mark mode low res](https://user-images.githubusercontent.com/29471180/44106392-ea8b88c0-9fca-11e8-97ab-6c0ef76d2d7e.gif)

### Switch Position (Available for Tools)

Allows you to switch the selection point that is moved in Markmode.

![enhanced mark switch pos](https://user-images.githubusercontent.com/29471180/44106457-20975d9a-9fcb-11e8-9782-45c854294b94.gif)


## Structure Rotation

**Keybind:** Arrow Keys

Rotates structures/slices.

## Change arrow keys movement/Force Fill Mode

![ctrl mark mode](https://user-images.githubusercontent.com/29471180/43426207-58e4a9f6-942b-11e8-8ad8-59fe967b8275.gif)

**Keybind:** Ctrl 

In Mark Mode and in the door axis selection, allows you to move one block at a time with the arrow keys, instead of a pixel at a time. Will also force "Fill Mode" if using any of the tools that can be affected by it.

## Snap structure to grid

![snap to grid](https://user-images.githubusercontent.com/29471180/43426228-69e71d06-942b-11e8-9f90-a50500f359bd.gif)


**Keybind:** Sneak Key (Default to Shift)/Alt 

Holding Sneak allows you to set the block to the MC grid. While flying, the sneak functionality is transferred to the Alt Key.

# Useful features

## Flowing Water Block

![flowing water](https://user-images.githubusercontent.com/29471180/43498568-e73f5f1e-951d-11e8-8681-3013b28eaea6.gif)

You can turn the default Water Block from LT into flowing water by right clicking it with a empty bucket. You can turn the flow in any direction and it'll actually act like flowing water, moving water and players.

## Light Emitting Structures

![glowstone dust block](https://user-images.githubusercontent.com/29471180/43426292-9cb5a478-942b-11e8-8fe4-a5645e5dc03d.gif)

By default, structures that contains a block that emit light (like Glowstone or Sea Lantern) will always emit light. But, you can make every structure glow, even if it doesn't have a light block, by Sneak+Right Clicking with glowstone dust.
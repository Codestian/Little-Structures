

# **Little Storage Block**

![](https://i.imgur.com/WNMXJQK.png)

# 1. About

The storage blocks allows you to build functional Storage Structures using Little Tiles.

Compared to Minecraft Chests, Little Tiles' Storage Structures have the following advantages:

* Can be placed one next to the other;

* Can have a customized appearance;

* Can have a customized amount of slots;

* No physical size limits;

* Can be transported anywhere. Breaking it doesn't eject any items inside, making moving chests easier.


![moving](https://user-images.githubusercontent.com/29471180/39797864-802ca564-5334-11e8-8112-f2b6e6243e5d.gif)



# 2. The GUI

![2018-05-09_01 39 41](https://user-images.githubusercontent.com/29471180/39825178-92c0be4c-5387-11e8-9648-bdf7283ed4a3.png)

1. Structure Type

2. Number of item spaces (equal to number of storage tiles)

3. Invisible Tiles

4. Save Settings

If the Invisible Tiles setting is on, the storage tiles inside the structure will not appear when the Storage Structure is placed:

![invisible](https://user-images.githubusercontent.com/29471180/39797866-80d949b8-5334-11e8-8708-1605d36122f8.gif)

# 3. Setting up

## 3.1. Setting up a Storage unit

1. First, take the structure you wish to turn into a Storage Structure. Let's use this crate as an example:

![2018-05-09_01 38 07](https://user-images.githubusercontent.com/29471180/39797730-dd9b6b64-5333-11e8-99cf-6613f96add69.png)

![2018-05-09_01 38 09](https://user-images.githubusercontent.com/29471180/39797733-df098cba-5333-11e8-8c7f-b37f4008c020.png)

2. Next, we'll fill the bottom of it with storage block tiles. In this case we filled a 12x12x1 area using the Chisel in the 16 grid setting.

![2018-05-09_02 01 03](https://user-images.githubusercontent.com/29471180/39797739-e54cdc44-5333-11e8-8eac-5519457573ec.png)

3. Next, using the Recipe, put the structure inside the recipe, select the Storage type and press Save.

![setting1](https://user-images.githubusercontent.com/29471180/39797851-71ea7e9a-5334-11e8-869d-92210f285937.gif)


## 3.2. Calculating the space

One storage tile is equivalent as 1 item space in your Storage Structure. Meaning 64 storage tiles are necessary to fit a full item stack (64 items).

Therefore, the amount of storage slots that will be available in the Storage Structure will be determined according to the following formula:

                          **SS = Tiles/64**

Where:

SS = Number of Storage Slots

Tiles= Amount of tiles put, considering the grid used. A full vanilla block in grid 16 is 16x16x16, or 4096 tiles, which means the maximum amount of slots that can be stored in one block space is 64, 10 more than a vanilla double chest.

**NOTE: Currently there is a bug where increasing the grid size allows for absurd amount of slots. This is a bug and it'll be fixed in a future update (pre100). We advise not to use storage blocks in grid bigger than 16 because the Storage Structure may break when this bug is fixed.**

## 3.3. Tips and tricks

WIP

# About

As the name implies, the Advanced Recipe is a version of the Little Recipe that allows for more functionality. It allows you to include normal blocks and C&B blocks (though they will be converted to LT) and multiple structures into a single recipe, as well as scale the structures up and down. It also allows you to place whatever is in the recipe directly from it, by holding the recipe and right click where you want to place it.

# GUI

![2018-12-17_17 33 15](https://user-images.githubusercontent.com/29471180/50111686-75350d00-0224-11e9-8193-d2248ca8a082.png)

**Area** - The selection type, and only on for now.

**Regular Blocks** - Converts and saves vanilla blocks into the recipe.

**C&B Blocks** - Converts and saves C&B blocks into the recipe.

**LittleTiles Blocks** - Saves LT structures into the recipe.

**Remember Structures** - Remember functions of structures (structure types) in the selection area.

**Scale** - Scales the structure, making it bigger or smaller (limited by your gridsize)

**Save** - Save the structure.

# Functions

For Simple Functions, refer to the [Little Recipe](https://github.com/CreativeMD/LittleTiles/wiki/Little-Recipe#3-types-of-structures) page, as these work the same way. For the Door Functions, refer to the [Doors ](https://github.com/CreativeMD/LittleTiles/wiki/Doors) page.

# How to Use

## Saving a Structure

To save a structure, simply right click to select a corner of the selection area and then left click for the other corner. Press the Open GUI key (Default to **"C"**), select the functions you want and click save. Then you can select the structure types just like the Little Recipe.

## Multi Structure

The main feature of the Advanced Recipe is the ability to have a single structure with different functions. Let's use a drawer as an example. It has two main functions: opening and storing things. Let's learn to make one.

**1.** The first step is analyzing what you want to build. You need to build the smaller part first, then the bigger one. In the case of the drawer, you want it to act as both a sliding door (so it can open) and as a storage structure. But, you don't want to the storage area to be visible while the drawer is closed, so the only area that should act as a storage is the inside. On the other hand, the whole drawer needs to move, so all of it needs to be a door. In this case, the storage is the smaller part, so we'll need to start with it.

**2.** Before that let's build the drawer itself. Let's use this as a base:

![2018-12-17_17 37 48](https://user-images.githubusercontent.com/29471180/50111687-75350d00-0224-11e9-9f6a-51d937f542e1.png)

**3.** Now we need to build the storage area out of storage blocks, separately. In this drawer, the inside area is 10x2x8.

![2018-12-17_17 54 14](https://user-images.githubusercontent.com/29471180/50111801-c93ff180-0224-11e9-8626-9c3d2dc8933e.png)

**4.** Now let's make that into a storage structure using an Advanced Recipe and place it inside the drawer. Don't forget to tick "invisible storage tiles" so it looks aesthetically pleasing.

**5.** After the storage was placed inside the drawer, select the whole thing and with an Advanced Recipe, make sure "Remember Structures" is ticked. Now make it into a Sliding Door and select the speed, distance and direction you want the drawer to open and save it.

**6.** Now when you right click the inside of the drawer the storage GUI will open and when you right click the outside the drawer will move.

![guide](https://user-images.githubusercontent.com/29471180/50112548-9565cb80-0226-11e9-8e6d-54a9cce9d5d9.gif)

**NOTE 1:** If you want to save a cabinet with a lot of doors and drawers, make sure to save the final structure as a Fixed structure type, in order to avoid conflicts with the doors. 

![using the advanced recipe multi](https://user-images.githubusercontent.com/29471180/50112528-8b43cd00-0226-11e9-9dba-3cc9812ce5b9.gif)


**NOTE 2:** Make sure that, when making a structure with two or more functions, that the second function has at least one more tile than the first.

## Scaling



 

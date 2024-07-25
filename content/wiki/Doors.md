# 1. About

_Door_ and _Sliding Door_ are Structure types for the Little Recipe. With these function it's possible to not only create door, but all kinds of rotating and sliding structures. Comparing to Minecraft doors, there are a few advantages:

   * Any Little Tiles structures can be used as a door.
   * There is no size limit for doors.
   * They rotate in a axis that can be set in a X, Y or Z position. 
   * The door is animated, which means it won't just change between a open and closed state. 
   * As of pre100, rotating and sliding doors have collision boxes and will push all entities during animation.

## 1.1 Rotating Door

When creating a rotating door you are able to select the axis in which the door will rotate. This means that, unlike vanilla Minecraft doors, you can create doors in a variety of shapes and movements. This rotation movement can be done in all three axis. There's also two types of rotation: orientated and fixed.

### 1.1.1 Orientated

The door will always open at a 90 degree angle. After it reaches its ending position, it'll be "placed" back into the world, acting as an actual block. Because of this, if there's anything blocking the closed/open position, the door will refuse to open/close. 

![rot step 3 - ori](https://user-images.githubusercontent.com/29471180/51791442-3894f380-218a-11e9-8ac6-c55acc8e09bc.gif)

### 1.1.2 Fixed

The rotation is fixed at an specific angle. After the door is fully opened, it will stay in an animated state, acting as an entity. This means that it won't take into consideration anything blocking the ending position. In the example below, the door opens in a 45 degree angle:

![rot step 3 -fixed](https://user-images.githubusercontent.com/29471180/51791441-3894f380-218a-11e9-82ee-4ffbb3f89586.gif)

### 1.2 Sliding Door

When creating a sliding door you are able to select the direction in which the door will slide. This direction can be in all three axis, towards positive and negative values.

### 1.3 Advanced Door

This door combines both door types, allowing you to create a timeline of events in order to make complex door movements. The example below shows a door that rotates 45 degrees and slides up by 2 blocks.


![advanced 2](https://user-images.githubusercontent.com/29471180/51791490-1b145980-218b-11e9-8831-fe42563a8820.gif)

# 2. GUI


## 2.1 Rotating Door (Orientated)

![2019-01-26_15 01 42](https://user-images.githubusercontent.com/29471180/51791147-d639f400-2185-11e9-8b6f-6b0421821a09.png)

### 2.1.1. Structure Type 
Allows you to select the type of Structure.  
### 2.1.2. Axis Preview
Previews the block in the selected view point. This will allow you to select the exact spot to put the axis in. You can move the preview by holding left mouse button and dragging around the preview area. Also shows the side the door is facing relative to the X Y Z coordinates. The green dot represents the axis.
### 2.1.3. Orientated Rotation type
Sets the door rotation as oriented (90 degrees)

### 2.1.4. Fixed Rotation type
Set the rotation as fixed (any angle)

### 2.1.5. Swap Normal
### 2.1.6. Reset View 
Resets the view to the original point of view.
### 2.1.7. Change View
Allows you to change which axis will be rotated.  

Here are a few example of how the axis swap looks, and how the same door behaves in each of them:

**CASE 1:**

![2018-05-19_21 53 08](https://user-images.githubusercontent.com/29471180/40274668-ec088574-5bb2-11e8-8142-e363fd1da798.png)

![door axis 1](https://user-images.githubusercontent.com/29471180/40274751-aac013f4-5bb5-11e8-83ae-0f072ed05d8f.gif)

**CASE 2:**

![2018-05-19_21 53 11](https://user-images.githubusercontent.com/29471180/40274669-ed6a954c-5bb2-11e8-9bb4-0bf84d38cc52.png)

![door axis 2](https://user-images.githubusercontent.com/29471180/40274752-aadd888a-5bb5-11e8-84f8-9196c18f8b35.gif)

**CASE 3:**

![2018-05-19_21 53 03](https://user-images.githubusercontent.com/29471180/40274666-e715a768-5bb2-11e8-96ab-26472387950a.png)

![door axis 3](https://user-images.githubusercontent.com/29471180/40274753-aafb1ada-5bb5-11e8-8207-e40632e7af2c.gif)

### 2.1.8. Flip View 
Flips the view to the opposite side.

![door flip view](https://user-images.githubusercontent.com/29471180/40274767-db5fe980-5bb5-11e8-8178-2fd979278ada.gif)

### 2.1.9. Axis Control 
Use these arrow keys to control where the axis will be located. Holding CTRL while clicking the arrow keys will make you move the axis by one block (16 pixels) instead of 1 pixel.

![door ctrl](https://user-images.githubusercontent.com/29471180/40274762-d8cc1a9a-5bb5-11e8-8411-29f60ef3fa4e.gif)

### 2.1.10. Even Selection 
Allows you to set the axis in a point between pixels (whatever the grid is).

![door even](https://user-images.githubusercontent.com/29471180/40274765-da8a55cc-5bb5-11e8-89e6-18e9b37c08ec.gif)

### 2.1.11. Grid Selection
Selects the grid size used by the axis

### 2.1.12. Duration 

Allows you to select the duration in which the door will perform their animation.

The duration in seconds is **[(Number in the Settings)/20]**, meaning the default 50 duration takes 2,5 seconds to open.

Here's and example of different animation times (10, 50, 180);

![door duration](https://user-images.githubusercontent.com/29471180/40274764-d971a000-5bb5-11e8-96a8-e8ea1422e25b.gif)

### 2.1.13. Name Field
Allows you to name the door. This name will appear whenever you hover the recipe in your inventory, or by looking at the door with a mod like Waila.
### 2.1.14. Clear Recipe
Erases the recipe, reverting it to a blank state.
### 2.1.15. Save
Saves the recipe in its current settings.
### 2.1.16. Preview Window
Allows you to preview the whole structure, rotate and zoom in and out.

## 2.2 Rotating Door (Fixed)

![2019-01-26_15 03 11](https://user-images.githubusercontent.com/29471180/51791149-d639f400-2185-11e9-8964-447748899515.png)

Works almost identical as the Rotating Door (Orientated), except for:

### 2.2.5. Angle Selection

Allows you to select an angle for the door opening. Accepts negative values and values above 360.

## 2.3 Sliding Door

![2019-01-26_15 28 33](https://user-images.githubusercontent.com/29471180/51791155-d803b780-2185-11e9-80a0-28752543c99d.png)

### 2.3.1. Structure Type 
Allows you to select the type of Structure.  
### 2.3.2. Preview Window
Allows you to see the door and the current direction it's facing.
### 2.3.3. Slide Direction
Allows you to change the direction the door will slide to. There are six options: Up, Down, North, South, West and East.

**UP**

![door up](https://user-images.githubusercontent.com/29471180/44007460-263960aa-9e6c-11e8-8575-e07782cfcf20.gif)

**DOWN**

![door down](https://user-images.githubusercontent.com/29471180/44007461-2743f884-9e6c-11e8-8d82-ee893a4f9d42.gif)

**NORTH**

![door north](https://user-images.githubusercontent.com/29471180/44007462-283b16b4-9e6c-11e8-86e7-f699c39e034b.gif)

**SOUTH**

![door south](https://user-images.githubusercontent.com/29471180/44007463-291c3784-9e6c-11e8-9258-1a8d1e70bdd3.gif)

**WEST**

![door west](https://user-images.githubusercontent.com/29471180/44007464-2a93a020-9e6c-11e8-96f9-7fa0b2da37a4.gif)

**EAST**

![door east](https://user-images.githubusercontent.com/29471180/44007465-2b9bb322-9e6c-11e8-8074-1e974465105e.gif)

### 2.3.4. Relative Direction
Points towards the direction the door will go. Always relative to your current position.
### 2.3.5. Movement in Blocks
Input how many full blocks the door will move in a specific direction.
### 2.3.6. Movement Grid Size
Chooses what grid size will be used on 2.3.7.
### 2.3.7. Movement in Voxels
Input how many Voxels the door will move in a specific direction, based on the grid size chosen in 2.3.6.



### 2.3.8. Reset View 
Same as the rotating door.

### 2.3.9. Change View
Same as the rotating door.

### 2.3.10. Flip View 
Same as the rotating door.

### 2.3.11. Duration 
Allows you to set the duration of the door animation. 
### 2.3.12. Name Field
Allows you to name the door. This name will appear whenever you hover the recipe in your inventory, or by looking at the door with a mod like Waila.
### 2.3.13. Clear Recipe
Erases the recipe, reverting it to a blank state.   

### 2.3.14. Save Settings 
Allows you to save the changes made in your door.    

### 2.3.15. Preview Window
Allows you to preview the whole structure, rotate and zoom in and out.

# 3. Setting Up a Rotating/ Sliding Door

The set up for both door types is very similar, aside from the settings in the Recipe. You can learn more about these settings in the GUI section for each type.

Here's how to make a basic door:

3.1. Make a door using Little Tiles. In this case, we'll be using this simple door:

![2018-05-17_16 43 02](https://user-images.githubusercontent.com/29471180/40274833-8f0219da-5bb7-11e8-8ce5-84106b73dd8b.png)

3.2. Put the door in either a Recipe by right clicking on both corners of the door (in our case, the bottom and upper part) or an Advanced Recipe by left clicking on the first corner and right clicking on the second corner. Select your preferred settings and Save it:

![door recipe](https://user-images.githubusercontent.com/29471180/40274769-ddcad716-5bb5-11e8-9aac-2667ea8f3a13.gif)

3.3. Now, using the Wrench, extract the door from the recipe. If you're using the Advanced Recipe, you can place it directly.

![door recipe craft](https://user-images.githubusercontent.com/29471180/40274772-e84f2656-5bb5-11e8-97f5-6dc639a7cd78.gif)

This method is the same for both rotating and sliding doors. All that changes are the settings described in the GUI section.

# 4. Setting up an Advanced Door

Setting up an Advanced Door can be quite tricky, so this section will present two examples (a simple and a more elaborate movement) and show you step by step how to achieve them.

## 4.1 Example 1

In this example, we'll want a door that moves upwards for 2 blocks and rotates 45 degrees. First, we'll need to set the keys. Keys are time points where an action will take place. In the example below, we set the values for our keys.

![advanced 1](https://user-images.githubusercontent.com/29471180/51791494-236c9480-218b-11e9-80e8-fbd7b935de54.gif)

Note that the yellow keys are there by default. All of those have a value of 0, meaning that by themselves they do nothing. When we set the second key at ROT Y with a value of 45, we are creating a transition. When you set two points of different value on the same movement line (in this case ROT Y), the mod will create an animation transition, from the first key to the second one. Since the first key is 0 and the second, located at the point 50 is 45 degrees, it'll smooth the animation from angle 0 to angle 45 in the time of 50 ticks (2,5 seconds). The same will happen at Off Y, where animation will transition from 0 to 2 in 50 ticks.

So when we open the door two actions will occur at the same time: a rotation of 45 degree and a movement upwards of 2 blocks.

![advanced 2](https://user-images.githubusercontent.com/29471180/51791490-1b145980-218b-11e9-8831-fe42563a8820.gif)

## 4.2 Example 2

In this example, we'll make a more complex movement. We want the door to have an animation of 4 seconds, which means 80 ticks. The movements are as follow:

From 0 to 20 - Offset Z from 0 to -1

From 20 to 40 - Nothing happens

From 40 to 60 - Rotate Y in 360 degrees

From 40 to 80 - Offset X and Y from 0 to 3

Here is the complete setup:

![2019-01-26_15 25 50](https://user-images.githubusercontent.com/29471180/51791501-3e3f0900-218b-11e9-87ef-d80199d0806b.png)

And here's the result:

![advanced 4](https://user-images.githubusercontent.com/29471180/51791701-d0e0a780-218d-11e9-8bdb-a5db16ba0321.gif)


# 5. Tips and Tricks

## 5.1 Rotating Door


## 5.2 Sliding Door


## 5.3 Advanced Door


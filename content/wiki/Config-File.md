# Configuration File Parameters

A config file is a file that is created by a mod after loading up Minecraft that has options to tune and/or disable certain features. In this page we will go over the options for config files for Little Tiles.

To access this file, go to you root minecraft folder, enter the config folder and lookup _littletiles.cfg_. You can then open this file with any text editing software.

## Building

### invertStickToGrid

Default value = false;

Invert the function of the Sneak key when placing a structure. If set to true, the structure will stick to the grid by default and Sneak will allows you to move it freely.

### maxSavedActions

Default value = 32;

Determines the max amount of actions that can be saved for the undo/redo feature. By default you can undo/redo up to 32 consecutive actions.

### useALTForEverything

Default value = false;

If set to true, moves the Sneak functionalities to the  ALT key.

### useAltWhenFlying

Default value = true;

When flying, moves the Sneak functionalities to the ALT key. Since the Sneak key is used to descend when flying in Creative Mode, this setting is particularly useful.

## Core

### defaultSize

Default value = 16;

Range =  1 ~ 2147483647;

Sets the default grid size value. **It's suggested to NOT change this setting**. If this setting is changed, all structures made with the previous value will either shrink or increase in size.

### exponent

Default value = 2;

Range =  1 ~ 2147483647;

The exponent used for the grid size values. A exponent of 2, means the possible sizes are 1, 2, 4, 8, 16, 32, 64, 128, etc. **It's recommended to leave this setting to the default value.**

### minSize

Default value = 1;

Range =  1 ~ 2147483647;

The minimum grid size allowed. As an example, using the default values of all settings will result in the possible grid sizes of [1,2,4,8,16,32]. But changing only _minSize_ to 4, will then determine that the count will now start at 4,making the possible grid sizes of [4,8,16,32,64,128]. 

**It's important that _minSize_ is not greater than the _defaultSize_**

### scale

Default value = 6;

Range =  1 ~ 2147483647;

The amount of grids sizes there are. If all core settings are set to default, a value of 6 will allow for 6 possible grid sizes of [1,2,4,8,16,32], while a setting of 7 will allow grid sizes of [1,2,4,8,16,32,64].

Increasing the value of this setting has no effect on existing structures, but decreasing it may cause structure that use higher values to break.

**It's important that the value set in this parameters allows for the default size to exist.**

## Rendering

### hideParticleBlock

Default value = false;

### renderingThreadCount

Default value = 2;

The higher the value, the faster LT tiles will load up. A value of 7 will make them load as fast as a vanilla block, but will have a much higher toll on performance.




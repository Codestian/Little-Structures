## List of Problems

[I installed Little Tiles but the game is crashing](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#i-installed-the-littletiles-mod-but-minecraft-is-crashing)  
[Every LittleTiles structure I make is invisible](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#every-littletiles-structure-i-make-is-invisible-how-can-i-fix-this)  
[All blocks become invisible when painted.](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#all-blocks-become-invisible-if-i-try-to-paint-them-how-do-i-fix-this)  
[All blocks become black when painted](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#all-blocks-become-black-if-i-try-to-paint-them-how-do-i-fix-this)  
[I created a door but it won't open. I'm right clicking but nothing is happening. Why is that?](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#i-created-a-door-but-it-wont-open-im-right-clicking-but-nothing-is-happening-why-is-that)  
[I'm getting a "Not enough space for material" when I try to hammer a block.](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#im-getting-a-not-enough-space-for-material-when-i-try-to-hammer-a-block)  
[I can't break my doors.](https://github.com/CreativeMD/LittleTiles/wiki/FAQ/_edit#i-cant-break-my-doors)  
[What happens if I use a mod block (like from the Chisel mod) in a LT Structure and later delete that mod? Will my LT Structure disappear?](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#what-happens-if-i-use-a-mod-block-like-from-the-chisel-mod-in-a-lt-structure-and-later-delete-that-mod-will-my-lt-structure-disappear)  
[What if I change the resource pack then?](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#what-if-i-change-the-resource-pack-then)  
["Structure not Loaded" message](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#im-trying-to-break-something-but-it-says-structure-not-loaded-and-wont-allow-me-to-break-it-what-do-i-do)  
[Does redstone work with doors?](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#does-redstone-work-with-the-doors)  
[Can you add corner slices?](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#can-you-add-corner-slices)  
[Is there a site where we can upload and share structures?](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#is-there-a-site-where-we-can-upload-and-share-structures)    
[Do tiles maintain certain block characteristics?](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#do-tiles-maintain-certain-block-characteristics)  
[Is there any way to make a structure emit light without using a light emiting block? ](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#is-there-any-way-to-make-a-structure-emit-light-without-using-a-light-emiting-block)  
[Is there a limit to the amount of structures I can place?](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#is-there-a-limit-to-the-amount-of-structures-i-can-place)  
[Can you port newer features back to 1.7.10/1.8.9/1.10.2?](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#can-you-port-newer-features-back-to-17101891102)  
[What about future versions, such as 1.13 or 1.14?](https://github.com/CreativeMD/LittleTiles/wiki/FAQ/_edit#what-about-future-versions-such-as-113-or-114)
[Are there any mods that are incompatible with LittleTiles?](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#are-there-any-mods-that-are-incompatible-with-littletiles)  
[Is there any place where I can keep contact with other players that use this mod, or the mod author himself?](https://github.com/CreativeMD/LittleTiles/wiki/FAQ#is-there-any-place-where-i-can-keep-contact-with-other-players-that-use-this-mod-or-the-mod-author-himself)  





### _**I installed the LittleTiles mod but Minecraft is crashing.**_

There are multiple reasons as to why this could be happening:
1. CreativeCore is not installed;

2. CreativeCore and LittleTiles versions are not compatible. Always pick a LittleTiles version then select the latest CreativeCore version released prior to it;

3. You didn't download it from Curse. Always download the mods from [Curse](https://minecraft.curseforge.com/projects). Other sites have corrupt versions and may include viruses;

4. You're using versions not compatible to your Minecraft version;

***

### _**Every LittleTiles structure I make is invisible. How can I fix this?**_

First of all, make sure you tried the solutions presented on the question above. If everything is in order and you use Optifine, make sure to Enable VBOs. If grass and leaves are invisible, try setting Mipmap level to at least 1.

If you're using pre100 or beyond for 1.12.2 with Optifine, make sure it's at least the E1 version. Earlier versions no longer works on pre100 and above.


***

### _**All blocks become invisible if I try to paint them. How do I fix this?**_

Make sure the alpha value (the last color slider) is not set to 0.

***

### _**All blocks become black if I try to paint them. How do I fix this?**_

Enable Smooth Lighting.

***

### _**I created a door but it won't open. I'm right clicking but nothing is happening. Why is that?**_

Most likely something is blocking the door. In order of the door to work, the space the door would occupy in the open and closed states needs to be vacant.

***

### _**I'm getting a "Not enough space for material" when I try to hammer a block.**_

In survival, you need a Little Container to store the bits you hammered. If you don't have one, or don't have enough space in one, then this message appears.

***
### _**I can't break my doors.**_

In cases of doors that have movements that will make them not allign correcly with the grid system, doors stay in a "entity" state. As such, you'll have to close it so it goes back to the original position. If you selected the "Stay Animated Option", you'll have to right click the door with a wrench and select "Destroy Animation". You'll not get the door back in this case, however.

***

### _**What happens if I use a mod block (like from the Chisel mod) in a LT Structure and later delete that mod? Will my LT Structure disappear?**_

No, it won't. For example, let's say you made a table using spruce planks for the legs and a Marble block from Chisel as the surface. Removing the Chisel mod will cause the surface of the table to display a pink/black checkered texture (default missing texture), while the legs will still be spruce.

***
### _**What if I change the resource pack then?**_

All LT Structures take their textures from the blocks used to build them. If the texture of these blocks changes (via a resource pack) so will the textures on the LT Structure.

***

### _**I'm trying to break something but it says "Structure not Loaded" and won't allow me to break it. What do I do?**_

In these cases, equip the wrench and break the structure in question. Other mods like WorldEdit also work. Reloading the chunk may also work in specific cases.

***

### _**Does redstone work with the doors?**_

Not yet. Redstone support is planned for a future release. In the meantime, there's a command called _/lt-open_ that can be used via command block. More information on the [Useful Commands and Keybinds](https://github.com/CreativeMD/LittleTiles/wiki/Useful-Commands-and-Keybinds) section.

***

### _**Can you add corner slices?**_

Short answer is no. Long answer is: it's not completely out of the question, but it would take a lot of work to figure out all the complex calculations that allow buildng in all angles. Slices by themselves generated a lot of bugs, so you can imagine how much bugfixing corner slices would require. It would be nice to have, yes, but there are other things which are easier to implement and more useful in the long run.

***

### _**Is there a site where we can upload and share structures?**_

Not yet, but it's planned. Our current focus is finishing all the features for the 1.5 release, then we can think about other stuff. For now, visit our Discord and check the #export channel, where people are free to post their creations for others to use! You can also visit our subreddit too!

***

### _**Do tiles maintain certain block characteristics?**_

For the most part, yes. A structure made of glowstone will emit light, a door made of obsidian will be blast resistant and a hanging concrete structures will still release falling powder particle.

***

### _**Is there any way to make a structure emit light without using a light emiting block?**_

Shift right clicking a block using a glowstone dust will make that structure emit light. Doing it again removes this effect.

***

### _**Is there a limit to the amount of structures I can place?**_

Yes, there is. It's very difficult to reach, but there is a limit of tiles per Chunk, denominated Chunk Storage Limit. After reaching this limit, any additional tiles won't be saved when leaving the world. An alternative to this would be to install the [Cubic Chunks](https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-mods/wip-mods/2792887-cubic-chunks-mod-almost-infinite-world-height-and) mod, as it uses, well, cubic chunks, decreasing the chance of going over the limit.

***

### _**Can you port newer features back to 1.7.10/1.8.9/1.10.2/1.11?**_

At the moment, our only focus is to develop for 1.12.2. Since Team Creative only has 1 active developer, supporting multiple versions would slow down development of new features. New releases of older version will only occur for major bug fixes, if those happen. Eventually, support will be dropped completely for older versions.

***
### _**What about future versions, such as 1.13 or 1.14?**_

Porting to 1.13 is out of the question, but a 1.14 port will be considered once Forge development reaches stability and LT version 1.5.0 is released.

***

### _**Are there any mods that are incompatible with LittleTiles?**_

Yes. Please check the [Mod Compatibility](https://github.com/CreativeMD/LittleTiles/wiki/Mod-Compatibility) section for more detail.

***

### _**Is there any place where I can keep contact with other players that use this mod, or the mod author himself?**_

Why, yes there is! Join us on [Discord](https://discordapp.com/invite/W9QM3fS)!

***

...

More questions will be added as they are made.

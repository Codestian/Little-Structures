This page should cover most common terms used in the following tutorials. If you have no idea what they mean, this is the place to look for an answer.

## Tile

![](https://i.imgur.com/OGxCkBnt.png)

Everything is made out of little _tiles_. A _tile_ is little piece of a block. _Tiles_ can be placed next to each other, but they cannot go beyond the actual block. If you place _tiles_ across multiple blocks, they will be split into smaller pieces.

Size does not matter, only the number of _tiles_ affects performance (ram usage, loading time, fps). Therefore, the mod always tries to combine multiples tiles into one, if possible.

A tile can only be a a rectangular prism shape. If you make, for example, a L shape structure it'll have to be divided into 2 tiles.


## Gridsize

![grid size](https://user-images.githubusercontent.com/29471180/43426437-0225f8bc-942c-11e8-8e35-ae0777fb347d.gif)

Gridsizes refer to the amount of times a vanilla block is divided when chiseling, as well as the amount of pixels you can fit inside a single vanilla block space. A grid size of 16 means you can fit up to 16x16x16 pixels, a total of 4096 pixels. A grid of 32 means you can have up to 32x32x32 pixels, a total of 32768.

![2018-07-30_16 53 21](https://user-images.githubusercontent.com/29471180/43426450-0b979658-942c-11e8-89c9-204e71b24779.png)

A smaller grid size will allow for more detail, but could potentially cost more performance wise, since you can have more tiles in the same block space.

Combining two structures of different grid sizes in the same block space is possible, but the entire block space will always adopt the smaller gridsize (unless it's possible to combine the tiles with the Wrench).

## Structure

Structures are any object created with LT, let it be a furniture, wall, decoration, statue, etc. It may refer to a single block piece or a multiple block piece created via a Recipe. 

Little Tiles offers a variety of functionality to these structures, which we refer to as Structure Types. With them, you are not limited to only decorational objects, but working chairs, doors, storage, beds and others.


## Voxel

![2018-07-30_16 54 07](https://user-images.githubusercontent.com/29471180/43426448-0ac2f0c4-942c-11e8-9da2-9af066c23cbc.png)

A voxel is a 3D pixel. When we refere to a voxel, we are referring to the minimum size possible in a specific grid. So a 16 grid voxel would be the smallest size possible in a 16 grid, which would be the equivalent to 4 32 grid voxels.
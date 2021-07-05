// Script that counts all build-on tiles in a park and COLORS THE TILE.
// TileCounter
var count_used_tiles = function() {
	var buildtiles = 0;
	var maptiles = 0;
    // Iterate every tile in the map
    for (var y = 0; y < map.size.y; y++) {
        for (var x = 0; x < map.size.x; x++) {
            var tile = map.getTile(x, y);
			maptiles += 1;
			if (tile.numElements > 1){
				buildtiles += 1;
				for (var j = 0; j < tile.numElements; j++){
					var element = tile.getElement(j);
					
					if (element.type === 'surface'){
						element.surfaceStyle = 8 // ENUM 8 = TERRAIN_GRID_RED
					}
					
					
				}
            }
        }
    }
	
    try {
        park.postMessage({
            type: "chart",
            text: "Build on Tiles: " + buildtiles + " | Total tiles: " + maptiles
        });
    } catch (error) {
        console.log(error);
    }		
	console.log('Build on Tiles: ' + buildtiles + ' | Total tiles: ' + maptiles)
}

var main = function() {
    // Add a menu item under the map icon on the top toolbar
    ui.registerMenuItem("ColorCounter", function() {
        count_used_tiles();
    });
};

registerPlugin({
    name: 'ColorCounter',
    version: '1.0',
    authors: ['ZxBiohazardzx'],
    type: 'local',
    main: main
});
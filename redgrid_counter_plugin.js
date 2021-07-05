// Script that counts all RED GRID TILES (ENUM = 8)
// TileCounter
var count_redgrid_tiles = function() {
	var redtiles = 0;
	var maptiles = 0;
    // Iterate every tile in the map
    for (var y = 0; y < map.size.y; y++) {
        for (var x = 0; x < map.size.x; x++) {
            var tile = map.getTile(x, y);
			maptiles += 1;
			if (tile.numElements >= 1){
				for (var j = 0; j < tile.numElements; j++){
					var element = tile.getElement(j);
					
					if (element.type === 'surface'){
						if (element.surfaceStyle == 8){ // ENUM 8 = TERRAIN_GRID_RED
							redtiles += 1
						}
					}
				}
            }
        }
    }
	
    try {
        park.postMessage({
            type: "chart",
            text: "RED GRID TILES: " + redtiles + " | Total tiles: " + maptiles
        });
    } catch (error) {
        console.log(error);
    }		
	console.log("RED GRID TILES: " + redtiles + " | Total tiles: " + maptiles)
}

var main = function() {
    // Add a menu item under the map icon on the top toolbar
    ui.registerMenuItem("CountRedGrid", function() {
        count_redgrid_tiles();
    });
};

registerPlugin({
    name: 'CountRedGrid',
    version: '1.0',
    authors: ['ZxBiohazardzx'],
    type: 'local',
    main: main
});
var browserColors = require('./browserColors');

console.log(rgbToHex('rgb(0, 200, 255)'));

function rgbToHex(color){
	if (color) {
	    if(
	    	color.substr(0, 1) === '#' || 
	    	color === 'transparent' || 
	    	browserColors.indexOf(color.toLowerCase()) !== -1
		){
	        return color.toLowerCase();
	    }else if(color.indexOf('rgb(') === 0){
	    	color = color.replace(/\s/g, '');
			var digits = /(.*?)rgb\((\d+),(\d+),(\d+)\)/.exec(color);

		    var r = parseInt(digits[2]);
		    var g = parseInt(digits[3]);
		    var b = parseInt(digits[4]);

		    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	    }
	}
    return 'transparent';
};

module.exports = rgbToHex;
var rgbToHex = require('../index.js');

describe('emailColor', function(){
	it('should return transparent if invalid string is given as input', function(){
		expect(rgbToHex('asd')).toEqual('transparent');
	});

	it('should return transparent if no input is given', function(){
		expect(rgbToHex()).toEqual('transparent');
	});

	it('should return the hexadecimal value of a color if it is given in rgb format', function(){
		expect(rgbToHex('rgb(0, 255, 0)')).toEqual('#00ff00');
	});

	it('should return the hexadecimal value of a color if it is given in rgb format without spaces', function(){
		expect(rgbToHex('rgb(255,0,255)')).toEqual('#ff00ff');
	});

	it('should return the hexadecimal value of a color if it is given in hex format', function(){
		expect(rgbToHex('#ff00FF')).toEqual('#ff00ff');
	});

	it('should return the name of the color if the input is the color name', function(){
		expect(rgbToHex('aquamarine')).toEqual('aquamarine');
	});
});
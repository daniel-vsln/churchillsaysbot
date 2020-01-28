const cloudinary = require('cloudinary').v2;
const fetch = require('node-fetch')

function getChurchillOptions(churchillsLine) {
	return {
		transformation: [
	  		{
	  			width: 500, 
	  			crop: "scale"
	  		},
	  		{
	  			width: 400, 
	  			height: 40,
	  			overlay: {
	  				font_family: "Cabin", 
	  				font_size: 26, 
	  				font_weight: "bold", 
	  				text: churchillsLine.replace(',', '%E2%80%9A'), crop: "fit"
	  			},
	  			y: 100,
	  			color: "#FFFFFF"
	  		}
	  	]
	}
}

async function uploadChurchillToClouds(churchillsLine) {
	const options = getChurchillOptions(churchillsLine);
	return await cloudinary.uploader.upload("./images/base.jpg", options)
}

exports.uploadChurchillToClouds = uploadChurchillToClouds;
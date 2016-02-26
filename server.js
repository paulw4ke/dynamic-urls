var express = require('express');
const fs = require('fs');
var path = require('path');

var port = process.env.PORT || 1337;

var pagesHtml;
writePageList();

function writePageList() {
		
	fs.readFile(__dirname + '/pages.txt', (err, data) => {
		if (err) throw err;
		
		var lines = data.toString().split("\r\n");
	  
		for (var i=0; i < lines.length; i++) {			
			var line = lines[i].split(",");
			pagesHtml += '<p><a href="/' + line[0] + '">' + line[1] + '</a></p>';
		}		
		
		console.log(pagesHtml);
	});
}

fs.watchFile(__dirname + '/pages.txt', (curr, prev) => {
	pagesHtml = '';
	writePageList();
});
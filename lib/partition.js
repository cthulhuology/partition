// partition.js

module.exports = function (shard,count) {
	var lines = '';
	process.stdin.on('data',function(data) {
		lines += data.toString()
	})
	process.stdin.on('close',function() {
		A = JSON.parse(lines)
		console.log(JSON.stringify(A.filter(function(X,I) { return shard == (1 + (I % count)) })))
	})

}

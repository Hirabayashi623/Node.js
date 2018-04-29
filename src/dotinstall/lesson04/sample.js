// ノンブロッキングな実装
setTimeout(function(){
	console.log("hello");
}, 1000);

console.log("world");
var MongoClient = require('mongodb').MongoClient,
	settings = require('./settings');

// DB接続URLを定義
var url = "mongodb://" + settings.host + ":" + settings.mongo_port + "/" + settings.mongo_db;
console.log({url: url});

// MongoDBに接続
MongoClient.connect(url, function(err, client){
	if(err){
		return console.dir(err);
	}
	// 接続できたことを確認
	console.log("connect to db");

	// DB名を指定してDBオブジェクトを取得
	db = client.db(settings.mongo_db);

	// コレクション作成＆取得
	collection = db.collection("users");

	var stream = collection.find().stream();
	// イベントとイベント発生時の関数を定義（jQueryの書き方）
	// dataイベントは、データ発生時のイベント
	stream.on('data', item => console.log(item));

	// endイベントはデータがなくなった時に発生するイベント
	stream.on('end', () => {
		console.log('finished');
		// DB接続 切断
		client.close();
	});

});


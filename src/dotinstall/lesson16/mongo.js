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

	// コレクションからドキュメントを取得
	// 全件取得
	collection.find().toArray(function(err, items){
		console.log("全件取得");
		console.log(items);
	});

	// 検索条件あり
	collection.find({id: 1}).toArray(function(err, items){
		console.log("検索条件あり");
		console.log(items);
	});

	// DB接続 切断
	client.close();
});


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

	// コレクション作成
	collection = db.collection("users");

	// ドキュメントを定義
	var docs = [
		{id: 1, name: "ryo"},
		{id: 2, name: "emi"},
		{id: 3, name: "ru-"}
	];

	// 作成したドキュメントをINSERT
	collection.insert(docs, function(err, result){
		console.dir(result);
	});

	// DB接続 切断
	client.close();
});


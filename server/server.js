/**
 * chairs project server
 * @author patrick kage
 */
const express	= require('express')
const sqlite	= require('sqlite3').verbose()
const path		= require('path')

const db = new sqlite.Database('chairs.db')

app = express()

// CORS shim
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next()
})

// api routes
app.get('/api/list', (req, res) => {
	db.all('SELECT * FROM chairs', (err, rows) => {
		if (err) {
			res.status = 500
			res.json({chairs: [], error: true})
		} else {
			res.json({chairs: rows, error: false})
		}
	})
})

app.get('/api/reset', (req, res) => {
	db.run('DELETE FROM chairs');
	const chairs = [
		{
			name: "foo",
			id: "12501",
			lat: 55.943917,
			long: -3.188211
		},
		{
			name: "bar",
			id: "11256",
			lat: 55.941439,
			long: -3.196399
		},
		{
			name: "baz",
			id: "13386",
			lat: 55.947314,
			long: -3.162367
		}
	]

	for (let chair of chairs) {
		db.run('INSERT INTO chairs VALUES (?, ?, ?, ?)', [
			chair.id,
			chair.name,
			chair.lat,
			chair.long
		])
	}
	res.send('')
})

app.get('/api/upd/:shortid', (req, res) => {
	console.log(req.params);
	console.log(req.query);
	db.run('UPDATE chairs SET lat=?, long=? WHERE shortid=?', [
		req.query.lat,
		req.query.long,
		req.params.shortid
	], (err, ret) => {
		if (err) {
			console.log(err)
			res.json({success: false, ret, err})
		} else {
			res.json({success: true, ret})
		}
	})
})


app.use(express.static(path.join(__dirname, 'public')))
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.argv[2] || 8080
console.log(`attempting to serve on ${port}`)
app.listen(port, () => {
	db.run("CREATE TABLE IF NOT EXISTS chairs (shortid TEXT, name TEXT, lat REAL, long REAL)")
	console.log(`listening on ${port}!`)
})


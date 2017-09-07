'use strict'

const {app, BrowserWindow } = require('electron')

app.on('before-quit', () => {
	console.log('Saliendo...')
})
app.on('ready', () => {
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		title: 'Ejemplo',
		center: true,
		maximizable: true,
		show: false
	})

	win.once('ready-to-show', () => {
		win.show()
	})

	win.on('closed', () => {
		win = null
		app.quit()
	})

	win.loadURL(`file://${__dirname}/renderer/index.html`)
})
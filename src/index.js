const express = require('express')
// const puppeteer = require('puppeteer')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))
// app.get('/resume', (req, res) => {
//   res.render('resume')
// })
// app.get('/printpdf', async (req, res) => {
//   try {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.goto('/', {
//       waitUntil: 'networkidle2'
//     })
//     await page.setViewport({ width: 1680, height: 1050 })
//     const date = new Date()
//     const pdfPath = `${path.join(
//       __dirname,
//       `../public/pdf/resume${date.getTime()}.pdf`
//     )}`
//     const pdf = await page.pdf({
//       path: pdfPath,
//       format: 'A4',
//       printBackground: true
//     })
//     await browser.close()
//     res.set({
//       'Content-Type': 'application/pdf',
//       'Content-Length': pdf.length
//     })
//     res.sendFile(pdfPath)
//   } catch (e) {
//     res.send(e.message)
//   }
// })

app.listen(port, console.log(`App is running on port ${port}`))

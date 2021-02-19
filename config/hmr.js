let lastBuilt = 0;
let HMR = {
  config: ({app}) => {
    app.get('/fake-hmr', (req, res) => {
      res.json({lastBuilt})
    })
  },
  built: () => {
    lastBuilt = Date.now();
    console.log(`hmr ready at ${lastBuilt}`)
  }
}
module.exports = HMR
const path = require('path')
console.log(path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.html'))
module.exports = () => ({
  resolve: {
    alias: {
      './js/PointsApplier.js': path.resolve(__dirname, 'template/js/custom-js/js/PointsApplier.js'),
    }
  }
})
(function () {
  function Promise(executor) {
    this.status = 'pending'
    this.data = undefined
    this.callbacks = []
    function resolve(value) { }
    function reject(reason) { }
    excuter(resolve, reject)
  }
  Promise.prototype.then = function (onresolved, onrejected) { }
  Promise.prototype.all = function (Promises) { }
  Promise.prototype.race = function (Promises) { }
  window.Promise = Promise;
})()
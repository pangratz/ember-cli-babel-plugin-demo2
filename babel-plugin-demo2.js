module.exports = function(babel) {
  var t = babel.types;
  return new babel.Transformer('babel-plugin-demo2', {
    Literal: function(node) {
      if (node.value === "babel-plugin-demo2") {
        return t.literal("demo2");
      }
    }
  });
}

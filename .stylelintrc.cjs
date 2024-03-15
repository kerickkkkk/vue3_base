module.exports = {
    extends: [
      "stylelint-config-standard", 
      "stylelint-config-standard-scss", 
      "stylelint-config-idiomatic-order",
      "stylelint-config-recommended-vue",
    ],
    rules: {
      "max-nesting-depth": 4, 
    },
    overrides: [
      {
        files: ["*.vue", "*.html"],
        customSyntax: "postcss-html",
      },
    ],  
    rules: {
    }
}

module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme: any) => ({
        "body-pattern": "url('./src/img/pattern.png')",
      }),
      colors: {
        "azul-claro": "#37bcf9",
        "azul-oscuro": "#0370b9",
      },
    },
  },
};

const sass = require("sass");
const path = require("path");

class Css {
  data() {
    return {
      permalink: data => `/themes/${data.site.theme}/css/main.css`
    };
  }

  render(data) {
    const themePath = path.join(__dirname, `_themes/${data.site.theme}`);
    const renderedCss = sass.renderSync({
      file: `${themePath}/css/main.scss`,
      outputStyle: "compressed"
    });
    return renderedCss.css.toString();
  }
}

module.exports = Css;

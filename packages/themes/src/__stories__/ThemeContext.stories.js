import React from "react";

import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Banner, { AVAILABLE_TYPES as BANNER_TYPES } from "@hig/banner";
import readme from "../../README.md";
import ThemeContext from "../ThemeContext";
import HIGLightTheme from "../themes/HIGLightTheme";
import HIGDarkBlueTheme from "../themes/HIGDarkBlueTheme";
import MatrixTheme from "../themes/MatrixTheme";

const themeOptions = {
  "hig-light": "HIG Light",
  "hig-dark-blue": "HIG Dark Blue",
  matrix: "BIM360 Matrix"
};

const themes = {
  "hig-light": HIGLightTheme,
  "hig-dark-blue": HIGDarkBlueTheme,
  matrix: MatrixTheme
};

const themeContextStories = storiesOf("ThemeContext", module);

themeContextStories.add(
  "themable",
  withInfo({
    propTables: [ThemeContext.Provider, ThemeContext.Consumer],
    propTablesExclude: [Banner],
    text: <div dangerouslySetInnerHTML={{ __html: readme }} />
  })(() => {
    const theme = select("Theme", themeOptions, "hig-light");
    return (
      <ThemeContext.Provider value={themes[theme]}>
        <div>
          {BANNER_TYPES.map(type => (
            <div style={{ marginBottom: "20px" }}>
              <Banner type={type}>{`This ${type} message presented in ${
                themeOptions[theme]
              } theme`}</Banner>
            </div>
          ))}
        </div>
      </ThemeContext.Provider>
    );
  })
);

# raketa-markdown-input

> Markdown input for Raketa CMS

[![NPM](https://img.shields.io/npm/v/@raketa-cms/raketa-markdown-input.svg)](https://www.npmjs.com/package/@raketa-cms/raketa-markdown-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add @raketa-cms/raketa-markdown-input
```

## Usage

```jsx
import React from "react";
import { MarkdownInput } from "@raketa-cms/raketa-markdown-input";

<MarkdownInput
  label="Text" // optional
  height="200px" // optional
  documentationLink="https://guides.github.com/features/mastering-markdown/" // optional
  value={value} // required
  onChange={setValue} //required
/>;
```

## License

MIT © [studioraketa](https://github.com/studioraketa)

import MarkdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";

const parser = new MarkdownIt({
  html: true,
  breaks: true,
}).use(markdownItAttrs, {
  // optional, these are default options
  leftDelimiter: "{",
  rightDelimiter: "}",
  allowedAttributes: [], // empty array = all attributes are allowed
});

const toHTML = (string, inline = false) => {
  if (!string) return;
  return inline ? parser.renderInline(string) : parser.render(string);
};

export default toHTML;

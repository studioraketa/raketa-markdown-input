import MarkdownIt from "markdown-it";

const parser = new MarkdownIt({
  html: true,
  breaks: true,
});

const toHTML = (string, inline = false) => {
  if (!string) return;
  return inline ? parser.renderInline(string) : parser.render(string);
};

export default toHTML;

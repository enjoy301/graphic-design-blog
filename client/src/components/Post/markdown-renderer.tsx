import ReactMarkdown from "react-markdown";

export const MarkdownRenderer = ({ children }: { children: string }) => {
  const components = {
    img: ({ node, ...props }: any) => (
      <img style={{ width: "100%" }} {...props} alt="" />
    ),
  };

  return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
};

import ReactMarkdown from "react-markdown";

export const MarkdownRenderer = ({ children }: { children: string }) => {
  const components = {
    img: ({ node, ...props }: any) => (
      <img
        style={{ width: "100%", height: "auto" }}
        onError={(e: any) => {
          e.target.src =
            "https://usagi-post.com/wp-content/uploads/2020/05/no-image-found-360x250-1.png";
        }}
        {...props}
        alt=""
      />
    ),
  };

  return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
};

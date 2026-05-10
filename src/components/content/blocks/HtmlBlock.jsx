export function HtmlBlock({ block }) {
  return <div dangerouslySetInnerHTML={{ __html: block.html }} className="prose prose-slate dark:prose-invert max-w-none mb-4" />
}

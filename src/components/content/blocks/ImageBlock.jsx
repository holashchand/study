export function ImageBlock({ block }) {
  return (
    <figure className="mb-4">
      <img src={block.src} alt={block.alt} className="rounded-lg border border-border max-w-full" />
      {block.caption && <figcaption className="mt-2 text-xs text-muted-foreground text-center">{block.caption}</figcaption>}
    </figure>
  )
}

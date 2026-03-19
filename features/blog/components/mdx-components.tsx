import type { MDXComponents } from "mdx/types"

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="text-3xl font-bold text-[var(--text-primary)] mt-8 mb-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4 border-b border-[var(--border)] pb-2" {...props} />,
  h3: (props) => <h3 className="text-xl font-bold text-[var(--text-primary)] mt-6 mb-3" {...props} />,
  p: (props) => <p className="text-[var(--text-secondary)] leading-relaxed mb-4" {...props} />,
  a: (props) => <a className="text-[var(--primary)] underline underline-offset-3 hover:text-[var(--primary-hover)]" {...props} />,
  ul: (props) => <ul className="list-disc list-inside space-y-2 mb-4 text-[var(--text-secondary)]" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside space-y-2 mb-4 text-[var(--text-secondary)]" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--text-secondary)] my-4"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-mono text-sm bg-[var(--bg-surface-hover)] text-[var(--primary)] px-1.5 py-0.5 rounded border border-[var(--border)]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 overflow-x-auto mb-6 text-sm font-mono"
      {...props}
    />
  ),
  hr: () => <hr className="border-[var(--border)] my-8" />,
  strong: (props) => <strong className="font-semibold text-[var(--text-primary)]" {...props} />,
}

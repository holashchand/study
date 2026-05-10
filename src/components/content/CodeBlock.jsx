import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const overrideStyle = {
  margin: 0,
  borderRadius: '6px',
  fontSize: '0.88rem',
  lineHeight: '1.6',
}

export default function CodeBlock({ language = 'java', label, children }) {
  return (
    <>
      {label && <p className="syntax-label">{label}</p>}
      <SyntaxHighlighter language={language} style={tomorrow} customStyle={overrideStyle}>
        {String(children).trimEnd()}
      </SyntaxHighlighter>
    </>
  )
}

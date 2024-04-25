import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function ReactMarkdownCodeRender(props: any) {
    const {children, className, ...rest} = props;
    const match = /language-(\w+)/.exec(className || '');
  
    return match ? 
    (
    <SyntaxHighlighter
        {...rest}
        PreTag={"div"}
        language={match[1]}
        children={String(children).replace(/\n$/, '')}
        style={atomOneDark} />
    ) :
    (
    <code {...rest} className={className} style={atomOneDark}>
        {children}
    </code>
    );
}
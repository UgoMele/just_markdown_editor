import React from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkDefinitionList from 'remark-definition-list';
import { defListHastHandlers } from 'remark-definition-list';
import remarkEmoji from 'remark-emoji';

import MarkdownCodeRender from './MarkdownCodeRender.tsx';

export default function MarkdownRenderer(props: {children: string}) {
    return(
        <ReactMarkdown
            children={props.children}

            remarkPlugins={[
                remarkGfm,
                remarkDefinitionList,
                remarkEmoji
            ]}
            
            remarkRehypeOptions={{
                handlers: {
                    ...defListHastHandlers
                }
            }}
            components={{
                code: MarkdownCodeRender,
            }}
        />
    );
}

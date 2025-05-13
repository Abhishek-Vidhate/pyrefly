/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import * as React from 'react';
import * as stylex from '@stylexjs/stylex';
import typography from './typography';
import { useEffect, useState } from 'react';
import { landingPageCardStyles } from './landingPageCardStyles';

interface LinkProps {
    text: string;
    url: string;
}

interface ContentWithLinkProps {
    text?: string;
    link?: LinkProps;
    beforeText?: string;
    afterText?: string;
}

interface WhyPyreflyGridItemProps {
    title: string;
    content?: string;
    index: number;
    startAnimation: boolean;
    contentWithLink?: ContentWithLinkProps;
}

export default function WhyPyreflyGridItem({
    title,
    content,
    contentWithLink,
    index,
    startAnimation,
}: WhyPyreflyGridItemProps): React.ReactElement {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only start animation when parent signals it's time
        if (startAnimation) {
            // Stagger the animations based on index
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, index * 80); // Reduced from 150ms to 80ms delay between each card

            return () => clearTimeout(timer);
        }
    }, [startAnimation, index]);

    return (
        <div
            {...stylex.props(
                landingPageCardStyles.card,
                styles.hidden,
                isVisible && styles.visible
            )}
            style={{
                // Apply dynamic delay based on index
                transitionDelay: `${index * 0.05}s`, // Reduced from 0.1s to 0.05s
            }}
        >
            <h3 {...stylex.props(typography.h5, styles.cardTitle)}>{title}</h3>
            <p {...stylex.props(typography.p, styles.contentText)}>
                {content}
                {contentWithLink && (
                    <>
                        {contentWithLink.beforeText}
                        <a href={contentWithLink.link.url} target="_blank">
                            {contentWithLink.link.text}
                        </a>
                        {contentWithLink.afterText}
                    </>
                )}
            </p>
        </div>
    );
}

const styles = stylex.create({
    // Animation styles
    hidden: {
        transform: 'rotateX(15deg) translateY(20px)',
        opacity: 0,
        filter: 'blur(6px)',
    },
    visible: {
        opacity: 1,
        transform: 'rotateX(0deg) translateY(0)',
        filter: 'blur(0px)',
    },
    // Text styles
    cardTitle: {
        fontWeight: 700,
        marginBottom: '0.75rem',
        color: 'var(--color-text)',
    },
    contentText: {
        fontSize: '1rem',
        lineHeight: '1.6',
        marginBottom: '0rem',
        flex: 1,
        color: 'var(--color-text)',
    },
});

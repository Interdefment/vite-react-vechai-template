import React from 'react';

import { cx } from '@vechaiui/react';

export const ThemedPageContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <div
            {...restProps}
            className={cx(className, 'w-100 min-h-screen flex-initial flex-col bg-base')}>
            { children }
        </div>
    );
};

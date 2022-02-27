import React from 'react';

import { ThemeSwitcher } from 'src/view/components/ThemeSwitcher/ThemeSwitcher';
import { ThemedPageContainer } from 'src/view/components/ui/ThemedPageContainer/ThemedPageContainer';

import './PublicLayout.scss';

export const PublicLayout: React.FC = ({ children }) => {
    return (
        <ThemedPageContainer>
            <main className='authorization-page'>
                <div className='authorization-page__title'>
                    Hello, fellow!
                </div>
                <div className='authorization-page__content'>
                    <ThemeSwitcher className='authorization__theme-switcher' />
                    { children }
                </div>
            </main>
        </ThemedPageContainer>
    );
};

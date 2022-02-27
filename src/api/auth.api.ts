interface Credentials {
    username: string;
    password: string;
}

export const login = async (credentials: Credentials): Promise<{ access: string, refresh: string }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // eslint-disable-next-line
            console.log(`Logged as ${credentials.username}`);
            resolve({ access: 'access', refresh: 'refresh' });
        }, 800);
    });
};

export const resetPassword = async (username: string): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // eslint-disable-next-line
            console.log(`Reset password for ${username}`);
            resolve();
        }, 800);
    });
};

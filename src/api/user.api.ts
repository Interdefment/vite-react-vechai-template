import { UserProfile } from 'src/@types/user';

export const fetchProfile = async (): Promise<UserProfile> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ username: 'username' });
        }, 800);
    });
};

export const select = <K extends string | number, T extends unknown>(key: K, data: Record<K, T>) => data[key];

export interface User {
    first_name?: string;
    last_name?: string;
    title?: string;
    current_company?: string;
    bio?: string;
    country_code?: string;
    phone?: string;
    profile_picture?: string;
  }
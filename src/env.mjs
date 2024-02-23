import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SERVER_TEST: z.string(),
    // NEXTAUTH_URL: z.string().url().optional(),
    // NEXTAUTH_SECRET: z.string().min(1),

    // DATABASE_URL: z.string().min(1),

    // GITHUB_CLIENT_ID: z.string().optional(),
    // GITHUB_CLIENT_SECRET: z.string().optional(),
    // GITHUB_ACCESS_TOKEN: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_CLIENT_TEST: z.string(),
  },
  runtimeEnv: {
    SERVER_TEST: process.env.SERVER_TEST,
    NEXT_PUBLIC_CLIENT_TEST: process.env.NEXT_PUBLIC_CLIENT_TEST,
  },
});

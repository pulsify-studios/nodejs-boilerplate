import { config } from 'dotenv';
import path from 'path';

config({ path: path.join(process.cwd(), '.env.testing') });

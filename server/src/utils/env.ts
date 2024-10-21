import "dotenv/config";

const env = (name: string, defaultValue?: string): string => {
  const value = process.env[name];

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
};

export default env;

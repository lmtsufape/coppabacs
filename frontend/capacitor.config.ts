import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sementes.app',
  appName: 'Sementes',
  webDir: 'out',
  server: {
    androidScheme: "http",
    hostname: '127.0.0.1',
    url: "http://127.0.0.1:3000",
    cleartext: true,


  },
};

export default config;

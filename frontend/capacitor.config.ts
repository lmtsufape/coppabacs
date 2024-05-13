import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sementes.app',
  appName: 'Sementes',
  webDir: 'out',
  server: {
    androidScheme: "http",
    hostname: '192.168.0.12',
    url: "http://192.168.0.12:3000",
    allowNavigation: ["192.168.0.12"],
    cleartext: true,


  },
};

export default config;

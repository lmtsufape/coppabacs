import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sementes.app',
  appName: 'Sementes',
  webDir: 'out',
  server: {
    androidScheme: "http",
    hostname: '192.168.0.121', // Atualize para o IP da sua máquina de desenvolvimento
    url: "http://192.168.0.121:3000", // Certifique-se que o servidor está rodando e acessível nessa URL
    allowNavigation: ["192.168.0.121"],
    cleartext: true,
  },
};

export default config;

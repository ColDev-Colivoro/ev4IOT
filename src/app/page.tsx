import { Header } from '@/components/layout/header';
import RampController from '@/components/ramp/ramp-controller';
import { Wifi, Cpu, Wrench } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto max-w-4xl px-4 py-12 text-center sm:py-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Controlador SmartRamp
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Controla tu rampa inteligente IoT con facilidad. Cambia entre modos
            automático y manual, y comprueba el estado en tiempo real.
          </p>
        </section>

        <section className="container mx-auto max-w-4xl px-4 pb-16">
          <div className="mx-auto max-w-md">
            <RampController />
          </div>
        </section>

        <section className="container mx-auto max-w-4xl px-4 pb-16">
          <div className="space-y-8">
            <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Wifi className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    Paso 1: Conexión a la Red
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Para usar este controlador, asegúrate de que este dispositivo esté conectado a la
                    red WiFi{' '}
                    <strong className="text-foreground">
                      "Rampa_Inteligente"
                    </strong>
                    . La aplicación intentará comunicarse automáticamente con tu rampa en la dirección IP
                    predeterminada{' '}
                    <code className="mx-1 rounded bg-muted px-1.5 py-1 font-code text-sm">
                      192.168.4.1
                    </code>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Cpu className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    Paso 2: Guía de Conexión de Hardware
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Asegúrate de que tu sensor de distancia y la placa controladora (como un ESP8266) estén cableados correctamente.
                  </p>
                  <div className="mt-4 rounded-md bg-muted p-4 text-sm">
                    <h4 className="font-semibold text-foreground">Diagrama de Cableado del Sensor:</h4>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-muted-foreground">
                      <li><span className="font-semibold text-foreground">Sensor VCC</span> → <span className="font-semibold text-foreground">Placa 3.3V</span></li>
                      <li><span className="font-semibold text-foreground">Sensor GND</span> → <span className="font-semibold text-foreground">Placa GND</span></li>
                      <li><span className="font-semibold text-foreground">Sensor Trig</span> → <span className="font-semibold text-foreground">Placa D1</span> (GPIO 5)</li>
                      <li><span className="font-semibold text-foreground">Sensor Echo</span> → <span className="font-semibold text-foreground">Placa D2</span> (GPIO 4)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Wrench className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    Solución de problemas
                  </h3>
                   <p className="mt-1 text-sm text-muted-foreground">
                    Si la aplicación no puede conectarse, verifica que la rampa esté encendida y que tu dispositivo esté conectado a la red WiFi correcta. También puedes intentar acercarte a la rampa para mejorar la señal.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}

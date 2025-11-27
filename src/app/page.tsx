import { Header } from '@/components/layout/header';
import RampController from '@/components/ramp/ramp-controller';
import { Wifi } from 'lucide-react';

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
          <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Wifi className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  Instrucciones de Conexión
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
        </section>
      </main>
    </div>
  );
}

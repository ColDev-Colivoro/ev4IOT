"use client";

import { useState, useTransition } from 'react';
import {
  ChevronsUp,
  ChevronsDown,
  Bot,
  AlertTriangle,
  Loader2,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge, type BadgeProps } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { openRamp, closeRamp, setAutoMode } from '@/app/actions';

type RampStatus = 'OPEN' | 'CLOSED' | 'AUTO' | 'UNKNOWN' | 'ERROR';

const statusConfig: Record<
  RampStatus,
  {
    label: string;
    icon: React.ReactNode;
    variant: BadgeProps['variant'];
  }
> = {
  OPEN: {
    label: 'Open',
    icon: <ChevronsUp className="h-4 w-4" />,
    variant: 'secondary',
  },
  CLOSED: {
    label: 'Closed',
    icon: <ChevronsDown className="h-4 w-4" />,
    variant: 'secondary',
  },
  AUTO: {
    label: 'Auto Mode',
    icon: <Bot className="h-4 w-4" />,
    variant: 'default',
  },
  UNKNOWN: {
    label: 'Unknown',
    icon: <AlertTriangle className="h-4 w-4" />,
    variant: 'destructive',
  },
  ERROR: {
    label: 'Error',
    icon: <AlertTriangle className="h-4 w-4" />,
    variant: 'destructive',
  },
};

export default function RampController() {
  const [status, setStatus] = useState<RampStatus>('UNKNOWN');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleCommand = (action: () => Promise<string | null>) => {
    startTransition(async () => {
      const response = await action();
      if (response?.includes('STATUS:OPEN')) {
        setStatus('OPEN');
      } else if (response?.includes('STATUS:CLOSED')) {
        setStatus('CLOSED');
      } else if (response?.includes('MODE:AUTO')) {
        setStatus('AUTO');
      } else if (response) {
        setStatus('ERROR');
        toast({
          title: 'Error from Ramp',
          description: `Received unexpected response: ${response}`,
          variant: 'destructive',
        });
      } else {
        setStatus('ERROR');
        toast({
          title: 'Communication Error',
          description:
            'Could not connect to the ramp. Please check the connection and try again.',
          variant: 'destructive',
        });
      }
    });
  };

  const config = statusConfig[status] || statusConfig.UNKNOWN;

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Ramp Controls</CardTitle>
        <CardDescription>
          Manage your smart ramp's operation mode.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between rounded-lg border bg-background p-4">
          <h3 className="text-lg font-medium">Current Status</h3>
          {isPending ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Updating...</span>
            </div>
          ) : (
            <Badge
              variant={config.variant}
              className="flex items-center gap-2 px-3 py-1 text-sm"
            >
              {config.icon}
              <span>{config.label}</span>
            </Badge>
          )}
        </div>

        <div className="space-y-4 pt-2">
          <h3 className="text-md font-medium text-muted-foreground">
            Mode Selection
          </h3>
          <Button
            className="w-full"
            onClick={() => handleCommand(setAutoMode)}
            disabled={isPending}
            variant={status === 'AUTO' ? 'default' : 'outline'}
          >
            <Bot className="mr-2 h-4 w-4" />
            Enable Auto Mode
          </Button>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-md font-medium text-muted-foreground">
            Manual Control
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() => handleCommand(openRamp)}
              disabled={isPending || status === 'AUTO'}
              variant={
                status === 'OPEN' && status !== 'AUTO' ? 'secondary' : 'outline'
              }
            >
              <ChevronsUp className="mr-2 h-4 w-4" />
              Open Ramp
            </Button>
            <Button
              onClick={() => handleCommand(closeRamp)}
              disabled={isPending || status === 'AUTO'}
              variant={
                status === 'CLOSED' && status !== 'AUTO'
                  ? 'secondary'
                  : 'outline'
              }
            >
              <ChevronsDown className="mr-2 h-4 w-4" />
              Close Ramp
            </Button>
          </div>
          {status === 'AUTO' && (
            <p className="text-center text-xs text-muted-foreground">
              Manual controls are disabled in Auto Mode.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

"use server";

import net from "net";

const RAMP_IP = "192.168.4.1";
const RAMP_PORT = 80;
const TIMEOUT_MS = 3000;

async function sendCommand(command: 'O' | 'C' | 'A'): Promise<string | null> {
  return new Promise((resolve) => {
    const client = new net.Socket();
    let resolved = false;

    const cleanup = (value: string | null) => {
      if (!resolved) {
        resolved = true;
        client.destroy();
        resolve(value);
      }
    };

    client.setTimeout(TIMEOUT_MS);

    client.connect(RAMP_PORT, RAMP_IP, () => {
      client.write(command);
    });

    client.on("data", (data) => {
      cleanup(data.toString().trim());
    });

    client.on("timeout", () => {
      console.error("Socket timeout while connecting to", RAMP_IP);
      cleanup(null);
    });

    client.on("error", (err) => {
      console.error("Socket Error:", err.message);
      cleanup(null);
    });

    client.on("close", () => {
      // If connection closes before any other event, resolve with null.
      cleanup(null);
    });
  });
}

export async function openRamp(): Promise<string | null> {
  return sendCommand('O');
}

export async function closeRamp(): Promise<string | null> {
  return sendCommand('C');
}

export async function setAutoMode(): Promise<string | null> {
  return sendCommand('A');
}

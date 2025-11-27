# **App Name**: SmartRamp Controller

## Core Features:

- Distance Sensing: Uses an ultrasonic sensor to detect objects within a specified range.
- Automatic Ramp Control: Automatically opens/closes the ramp based on the distance sensor readings.
- Manual Ramp Control: Allows manual control of the ramp via a simulated mobile app.
- WiFi Control Interface: Provides a server that is controlled by sending commands (O, C, A) to trigger the ramp states and modes.
- Status Reporting: Provides feedback to the client sending the command with a status to ensure correct mode activation (such as 'STATUS:OPEN', etc.)
- Mobile App Simulator: This tool simulates a mobile app on PC to provide basic ramp control via the Serial Bluetooth Terminal or Python simulator.

## Style Guidelines:

- Primary color: Soft blue (#A0D2EB) for a calm and reliable feel.
- Background color: Light gray (#F0F0F0), providing a clean backdrop that allows the UI elements to stand out.
- Accent color: Soft green (#A7D1AB), giving the ramp controller some visial appeal.
- Body and headline font: 'PT Sans', a clear sans-serif for optimal readability across various devices.
- Use simple, intuitive icons to represent ramp states (open, closed, auto) for ease of understanding.
- A straightforward layout that presents the most crucial settings front and center is important for maintaining a positive user experience. Auto mode, open and close need to be displayed.
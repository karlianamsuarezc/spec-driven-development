import { FC } from "hono/jsx";
import { Layout } from "./Layout";
import type { Appointment } from "../db/types";

type DashboardProps = {
  agentCount: number;
  appointmentCount: number;
  ailmentCount: number;
  appointments: (Appointment & { agent_name: string })[];
};

export const Dashboard: FC<DashboardProps> = ({
  agentCount,
  appointmentCount,
  ailmentCount,
  appointments,
}) => (
  <Layout>
    <h1>Staff Dashboard</h1>
    <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
      <article style="flex: 1; text-align: center;">
        <h3>Total Agents</h3>
        <p style="font-size: 2rem; font-weight: bold;">{agentCount}</p>
      </article>
      <article style="flex: 1; text-align: center;">
        <h3>Open Appointments</h3>
        <p style="font-size: 2rem; font-weight: bold;">{appointmentCount}</p>
      </article>
      <article style="flex: 1; text-align: center;">
        <h3>Active Ailments</h3>
        <p style="font-size: 2rem; font-weight: bold;">{ailmentCount}</p>
      </article>
    </div>

    <h2>Scheduled Appointments</h2>
    <table>
      <thead>
        <tr>
          <th>Agent</th>
          <th>Therapist</th>
          <th>Date & Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((apt) => (
          <tr key={apt.id}>
            <td>{apt.agent_name}</td>
            <td>{apt.therapist_name}</td>
            <td>{apt.datetime}</td>
            <td>{apt.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Layout>
);

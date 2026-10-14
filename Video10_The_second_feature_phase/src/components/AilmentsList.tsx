import { FC } from "hono/jsx";
import { Layout } from "./Layout";
import type { AilmentWithAgents } from "../db/types";

type AilmentsListProps = { ailments: AilmentWithAgents[] };

export const AilmentsList: FC<AilmentsListProps> = ({ ailments }) => (
  <Layout>
    <h1>Ailments</h1>
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Affected Agents</th>
        </tr>
      </thead>
      <tbody>
        {ailments.map((a) => (
          <tr key={a.id}>
            <td>{a.name}</td>
            <td>{a.description}</td>
            <td>
              {a.agents.length > 0 ? (
                <ul>
                  {a.agents.map((ag) => (
                    <li key={ag.id}>
                      <a href={`/agents/${ag.id}`}>{ag.name}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <span>None</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Layout>
);

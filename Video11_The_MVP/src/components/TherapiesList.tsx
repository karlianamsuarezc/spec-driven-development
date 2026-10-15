import { FC } from "hono/jsx";
import { Layout } from "./Layout";
import type { Therapy } from "../db/types";

type TherapiesListProps = { therapies: Therapy[] };

export const TherapiesList: FC<TherapiesListProps> = ({ therapies }) => (
  <Layout>
    <h1>Therapies Catalog</h1>
    <table>
      <thead>
        <tr>
          <th scope="col">Therapy Name</th>
          <th scope="col">Description</th>
          <th scope="col">Duration (mins)</th>
        </tr>
      </thead>
      <tbody>
        {therapies.map((t) => (
          <tr key={t.id}>
            <td><strong>{t.name}</strong></td>
            <td>{t.description}</td>
            <td>{t.duration_minutes} mins</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Layout>
);

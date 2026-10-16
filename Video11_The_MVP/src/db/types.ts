export interface Agent {
  id: number;
  name: string;
  model_type: string;
  status: string;
  created_at: string;
}

export interface Ailment {
  id: number;
  name: string;
  description: string;
}

export interface Therapy {
  id: number;
  name: string;
  description: string;
  duration_minutes: number;
}

export interface Appointment {
  id: number;
  agent_id: number;
  therapist_name: string;
  datetime: string;
  status: string;
}

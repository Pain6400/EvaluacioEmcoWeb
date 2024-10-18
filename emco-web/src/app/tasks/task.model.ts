export interface Task {
  id: number;
  title: string;
  description: string;
  status: string; // e.g., 'Pending', 'Completed'
  assignedTo: string; // Username o ID del usuario asignado
}

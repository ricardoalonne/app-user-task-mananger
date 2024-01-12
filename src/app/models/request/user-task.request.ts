export interface UserTaskRequest {
  description: string;
  tags: string;
  finished: boolean;
  deleted: boolean;
  expirationAt: Date;
  userId: number;
  priorityId: number;
}

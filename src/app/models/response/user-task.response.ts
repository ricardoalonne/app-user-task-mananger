export interface UserTaskResponse {
  id: number;
  description: string;
  tags: string;
  finished: boolean;
  deleted: boolean;
  expirationAt: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  userFullName: string;
  priorityId: number;
  priorityName: string;
}

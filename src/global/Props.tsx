export interface AuthContextType {
  taskList: Array<PropCard>;
  onOpen: () => void;
  handleEdit: Function;
  handleDelete: Function;
  filter:(t:string) => void;
}
export type PropCard = {
  description: string;
  item: number;
  title: string;
  flag: PropFlags;
  timeLimite: string;
};
type PropFlags = "Urgente" | "Opcional";
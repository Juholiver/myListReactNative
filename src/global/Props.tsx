export interface AuthContextType {
  taskList: Array<PropCard>;
  onOpen: () => void;
 // handleEdit: Function;
  //handleDelete: Function;
}
type PropCard = {
  description: string;
  item: number;
  title: string;
  flag: PropFlags;
  timeLimite: string;
};
type PropFlags = "Urgente" | "Opcional";
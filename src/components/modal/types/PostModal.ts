import { postType } from "../../userpostcard/types";
type modalPropsType = {
  isOpen: boolean;
  onClose: () => void;
  postdetails?: postType;
  
};

export type { modalPropsType };

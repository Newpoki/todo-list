import { IUser } from "store";

/** Interface du composant <MobileHeaderMenu /> */
export interface IMobileHeaderMenuProps {
  /** Etat de l'ouverture du menu du <HeaderMenu /> */
  isOpen: boolean;

  /** Callback qui ferme le menu*/
  onClose: () => void;

  /** Utilisateur connecté */
  user: IUser;
}

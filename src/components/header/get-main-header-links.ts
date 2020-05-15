/** Imports NPM */
import CreateIcon from "@material-ui/icons/Create";
import OutdoorGrillIcon from "@material-ui/icons/OutdoorGrill";
import AssignmentIcon from "@material-ui/icons/Assignment";

/** Fonction qui retourne les liens principaux du menu de l'application */
export const getMainHeaderLinks = () => [
  {
    label: "headerMenuLinkCraEntry",
    icon: CreateIcon,
    to: "/craEntry"
  },
  {
    label: "headerMenuLinkHistory",
    icon: AssignmentIcon,
    to: "/history"
  },
  {
    label: "headerMenuLinkAsbenceRequest",
    icon: OutdoorGrillIcon,
    to: "/absenceRequest"
  }
];

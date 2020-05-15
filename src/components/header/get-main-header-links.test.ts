/** Imports NPM */
import CreateIcon from "@material-ui/icons/Create";
import OutdoorGrillIcon from "@material-ui/icons/OutdoorGrill";
import AssignmentIcon from "@material-ui/icons/Assignment";

/** Imports locaux */
import { getMainHeaderLinks } from "./get-main-header-links";

describe("getMainHeaderLinks", () => {
  it("should return an object containing craEntry, history and absenceRequest links data", () => {
    const expected = [
      {
        label: "headerMenuLinkCraEntry",
        icon: CreateIcon,
        to: "/craEntry",
      },
      {
        label: "headerMenuLinkHistory",
        icon: AssignmentIcon,
        to: "/history",
      },
      {
        label: "headerMenuLinkAsbenceRequest",
        icon: OutdoorGrillIcon,
        to: "/absenceRequest",
      },
    ];

    const actual = getMainHeaderLinks();

    expect(actual).toEqual(expected);
  });
});

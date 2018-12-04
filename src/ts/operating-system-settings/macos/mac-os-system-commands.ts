import { MacOsSettingsHelpers } from "../../helpers/mac-os-settings.helpers";
import { OperatingSystemCommand } from "../operating-system-command";
import { restartIcon, logOutIcon, shutDownIcon, lockIcon } from "../operating-system-command-icons";

export const macOsSystemCommands: OperatingSystemCommand[] = [
    {
        executionArgument: `${MacOsSettingsHelpers.macOsSettingsPrefix}osascript -e \'tell app "System Events" to shut down\'`,
        icon: shutDownIcon,
        name: "Shutdown",
        needsUserConfirmationBeforeExecution: true,
        tags: ["power", "off"],
    },
    {
        executionArgument: `${MacOsSettingsHelpers.macOsSettingsPrefix}osascript -e \'tell app "System Events" to restart\'`,
        icon: restartIcon,
        name: "Restart",
        needsUserConfirmationBeforeExecution: true,
        tags: ["reboot"],
    },
    {
        executionArgument: `${MacOsSettingsHelpers.macOsSettingsPrefix}osascript -e \'tell application "System Events" to log out\'`,
        icon: logOutIcon,
        name: "Log out",
        needsUserConfirmationBeforeExecution: true,
        tags: ["sign", "off"],
    },
    {
        executionArgument: `${MacOsSettingsHelpers.macOsSettingsPrefix}/System/Library/CoreServices/Menu\\ Extras/User.menu/Contents/Resources/CGSession -suspend`,
        icon: lockIcon,
        name: "Lock",
        needsUserConfirmationBeforeExecution: false,
        tags: [],
    },
];

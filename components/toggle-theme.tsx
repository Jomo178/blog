import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Icons } from "./icons";

function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="hidden h-8 w-8 px-0 sm:flex"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icons.lightMode className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.darkMode className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

export default ToggleTheme;

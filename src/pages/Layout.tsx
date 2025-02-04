import ArticleGrid from "../components/ArticleGrid";
import ThemeChange from "../components/ThemeChange";

interface LayoutTypes {
  toggleThemeMode: () => void;
  themeMode: string;
}

export const Layout: React.FC<LayoutTypes> = ({
  toggleThemeMode,
  themeMode,
}) => {
  return (
    <>
      <h2 className="text-center mt-4 font-bold text-2xl gradient-text">
        Framer Motion
      </h2>
      <ThemeChange toggleThemeMode={toggleThemeMode} themeMode={themeMode} />
      <ArticleGrid toggleThemeMode={toggleThemeMode} />
    </>
  );
};

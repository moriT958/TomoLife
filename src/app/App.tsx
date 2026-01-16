import { useState } from "react";
import { CharacterPage } from "@/app/components/CharacterPage";
import { HomePage } from "@/app/components/HomePage";
import { StatsPage } from "@/app/components/StatsPage";
import { SettingsPage } from "@/app/components/SettingsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('character');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'character':
        return <CharacterPage onNavigate={setCurrentPage} />;
      case 'stats':
        return <StatsPage onNavigate={setCurrentPage} />;
      case 'settings':
        return <SettingsPage onNavigate={setCurrentPage} />;
      default:
        return <CharacterPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="size-full">
      {renderPage()}
    </div>
  );
}

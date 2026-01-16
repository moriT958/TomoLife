import { Home as HomeIcon, Star, TrendingUp } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-white shadow-xl text-center">
          <HomeIcon className="w-16 h-16 mx-auto mb-4 text-purple-500" />
          <h1 className="text-3xl mb-4">睡眠育成ゲーム</h1>
          <p className="text-gray-600 mb-8">
            睡眠時間でキャラクターを育てよう！
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => onNavigate('character')}
          >
            <Star className="w-5 h-5 mr-2" />
            キャラクターを見る
          </Button>
        </Card>
      </div>
    </div>
  );
}

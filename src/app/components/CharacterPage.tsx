import { useState, useEffect } from "react";
import { Moon, Sun, Clock, Home, BarChart3, Settings, Star } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Progress } from "@/app/components/ui/progress";

interface CharacterPageProps {
  onNavigate: (page: string) => void;
}

export function CharacterPage({ onNavigate }: CharacterPageProps) {
  const [isSleeping, setIsSleeping] = useState(false);
  const [sleepStartTime, setSleepStartTime] = useState<number | null>(null);
  const [totalSleepHours, setTotalSleepHours] = useState(12.5);
  const [sleepScore, setSleepScore] = useState(85);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [characterLevel, setCharacterLevel] = useState(5);
  const [characterExp, setCharacterExp] = useState(65);

  // 現在時刻を1秒ごとに更新
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 睡眠時間の計算
  useEffect(() => {
    if (isSleeping && sleepStartTime) {
      const interval = setInterval(() => {
        const now = Date.now();
        const sleepDuration = (now - sleepStartTime) / (1000 * 60 * 60); // 時間単位
        setTotalSleepHours(prev => prev + sleepDuration / 3600);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isSleeping, sleepStartTime]);

  const handleSleep = () => {
    setIsSleeping(true);
    setSleepStartTime(Date.now());
  };

  const handleWakeUp = () => {
    if (sleepStartTime) {
      const now = Date.now();
      const sleepDuration = (now - sleepStartTime) / (1000 * 60 * 60); // 時間単位
      const newTotalHours = totalSleepHours + sleepDuration;
      setTotalSleepHours(newTotalHours);
      
      // スコア計算 (7-9時間が最適)
      let newScore = sleepScore;
      if (sleepDuration >= 7 && sleepDuration <= 9) {
        newScore = Math.min(100, sleepScore + 5);
      } else if (sleepDuration >= 6 && sleepDuration <= 10) {
        newScore = Math.min(100, sleepScore + 3);
      } else {
        newScore = Math.max(0, sleepScore + 1);
      }
      setSleepScore(newScore);
      
      // 経験値とレベルアップ
      const expGain = Math.floor(sleepDuration * 10);
      const newExp = characterExp + expGain;
      if (newExp >= 100) {
        setCharacterLevel(prev => prev + 1);
        setCharacterExp(newExp - 100);
      } else {
        setCharacterExp(newExp);
      }
    }
    setIsSleeping(false);
    setSleepStartTime(null);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ja-JP', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ja-JP', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* ナビゲーションバー */}
        <nav className="mb-6 bg-white rounded-2xl shadow-lg p-4">
          <div className="flex gap-2 justify-around">
            <Button
              variant="ghost"
              className="flex flex-col items-center gap-1 h-auto py-3"
              onClick={() => onNavigate('home')}
            >
              <Home className="w-5 h-5" />
              <span className="text-xs">ホーム</span>
            </Button>
            <Button
              variant="ghost"
              className="flex flex-col items-center gap-1 h-auto py-3"
              onClick={() => onNavigate('character')}
            >
              <Star className="w-5 h-5 fill-purple-500 text-purple-500" />
              <span className="text-xs">キャラクター</span>
            </Button>
            <Button
              variant="ghost"
              className="flex flex-col items-center gap-1 h-auto py-3"
              onClick={() => onNavigate('stats')}
            >
              <BarChart3 className="w-5 h-5" />
              <span className="text-xs">統計</span>
            </Button>
            <Button
              variant="ghost"
              className="flex flex-col items-center gap-1 h-auto py-3"
              onClick={() => onNavigate('settings')}
            >
              <Settings className="w-5 h-5" />
              <span className="text-xs">設定</span>
            </Button>
          </div>
        </nav>

        {/* 時計カード */}
        <Card className="mb-6 p-6 bg-white shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Clock className="w-6 h-6 text-purple-500" />
            <h2 className="text-3xl font-mono">{formatTime(currentTime)}</h2>
          </div>
          <p className="text-center text-sm text-gray-600">{formatDate(currentTime)}</p>
        </Card>

        {/* キャラクター表示カード */}
        <Card className="mb-6 p-8 bg-white shadow-xl">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <h1 className="text-2xl">スリーピー</h1>
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                Lv. {characterLevel}
              </span>
            </div>
            <div className="max-w-xs mx-auto mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>経験値</span>
                <span>{characterExp}/100</span>
              </div>
              <Progress value={characterExp} className="h-2" />
            </div>
          </div>

          {/* キャラクター画像 */}
          <div className="relative mb-6 mx-auto max-w-md">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-200">
              <img
                src="https://images.unsplash.com/photo-1681699023675-1c6595692a8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwc2xlZXBpbmclMjBjaGFyYWN0ZXJ8ZW58MXx8fHwxNzY4NTU0NDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="スリーピー"
                className="w-full h-full object-cover"
              />
            </div>
            {isSleeping && (
              <div className="absolute inset-0 bg-indigo-900/40 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <Moon className="w-16 h-16 text-yellow-200 mx-auto mb-2 animate-pulse" />
                  <p className="text-white text-xl">睡眠中...</p>
                </div>
              </div>
            )}
          </div>

          {/* 睡眠コントロールボタン */}
          <div className="flex gap-4 justify-center mb-6">
            <Button
              size="lg"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg"
              onClick={handleSleep}
              disabled={isSleeping}
            >
              <Moon className="w-5 h-5" />
              就寝
            </Button>
            <Button
              size="lg"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg"
              onClick={handleWakeUp}
              disabled={!isSleeping}
            >
              <Sun className="w-5 h-5" />
              起床
            </Button>
          </div>

          {/* 睡眠スコアと統計 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-1">睡眠スコア</p>
              <div className="flex items-end gap-2">
                <p className="text-3xl">{sleepScore}</p>
                <p className="text-lg text-gray-500 mb-1">/100</p>
              </div>
              <Progress value={sleepScore} className="h-2 mt-2" />
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-1">総睡眠時間</p>
              <div className="flex items-end gap-2">
                <p className="text-3xl">{totalSleepHours.toFixed(1)}</p>
                <p className="text-lg text-gray-500 mb-1">時間</p>
              </div>
            </div>
          </div>
        </Card>

        {/* ヒント */}
        <Card className="p-4 bg-purple-50 border-purple-200">
          <p className="text-sm text-center text-purple-900">
            💡 7〜9時間の睡眠で最高のスコアを獲得できます！
          </p>
        </Card>
      </div>
    </div>
  );
}

import { BarChart3, TrendingUp, Award } from "lucide-react";
import { Card } from "@/app/components/ui/card";

interface StatsPageProps {
  onNavigate: (page: string) => void;
}

export function StatsPage({ onNavigate }: StatsPageProps) {
  const weeklyData = [
    { day: "月", hours: 7.5, score: 85 },
    { day: "火", hours: 6.2, score: 72 },
    { day: "水", hours: 8.1, score: 92 },
    { day: "木", hours: 7.8, score: 88 },
    { day: "金", hours: 6.5, score: 75 },
    { day: "土", hours: 9.0, score: 95 },
    { day: "日", hours: 8.5, score: 90 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-white shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-8 h-8 text-purple-500" />
            <h1 className="text-3xl">統計</h1>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <Card className="p-4 bg-purple-50">
              <p className="text-sm text-gray-600 mb-1">平均睡眠時間</p>
              <p className="text-2xl">7.7時間</p>
            </Card>
            <Card className="p-4 bg-blue-50">
              <p className="text-sm text-gray-600 mb-1">平均スコア</p>
              <p className="text-2xl">85点</p>
            </Card>
            <Card className="p-4 bg-green-50">
              <p className="text-sm text-gray-600 mb-1">連続日数</p>
              <p className="text-2xl">7日</p>
            </Card>
          </div>

          <h2 className="text-xl mb-4">週間レポート</h2>
          <div className="space-y-3">
            {weeklyData.map((data) => (
              <div key={data.day} className="flex items-center gap-4">
                <div className="w-12 text-center">{data.day}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div 
                      className="h-8 bg-purple-400 rounded"
                      style={{ width: `${(data.hours / 12) * 100}%` }}
                    />
                    <span className="text-sm">{data.hours}h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div 
                      className="h-6 bg-blue-300 rounded"
                      style={{ width: `${data.score}%` }}
                    />
                    <span className="text-sm">{data.score}点</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

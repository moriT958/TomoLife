import { Settings as SettingsIcon, Bell, Moon, Palette } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Switch } from "@/app/components/ui/switch";
import { Label } from "@/app/components/ui/label";

interface SettingsPageProps {
  onNavigate: (page: string) => void;
}

export function SettingsPage({ onNavigate }: SettingsPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-white shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <SettingsIcon className="w-8 h-8 text-purple-500" />
            <h1 className="text-3xl">設定</h1>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-purple-500" />
                <div>
                  <Label htmlFor="notifications">通知</Label>
                  <p className="text-sm text-gray-600">就寝時刻をリマインド</p>
                </div>
              </div>
              <Switch id="notifications" defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Moon className="w-5 h-5 text-purple-500" />
                <div>
                  <Label htmlFor="darkmode">ダークモード</Label>
                  <p className="text-sm text-gray-600">夜間の目に優しい表示</p>
                </div>
              </div>
              <Switch id="darkmode" />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Palette className="w-5 h-5 text-purple-500" />
                <div>
                  <Label htmlFor="sound">サウンド</Label>
                  <p className="text-sm text-gray-600">効果音とBGM</p>
                </div>
              </div>
              <Switch id="sound" defaultChecked />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h2 className="text-lg mb-4">アプリ情報</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p>バージョン: 1.0.0</p>
              <p>© 2026 睡眠育成ゲーム</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

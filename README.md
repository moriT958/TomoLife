# ともライフ

キャラクター育成による睡眠時間管理アプリ

## 使用するもの

- React
- TypeScript
- CSS Modules
- Supabase

## ディレクトリ構成

```text
src/
  ├── components/          # 共通コンポーネント（全員で共有）
  │   ├── common/          # Button, Input, Modal など汎用UI
  │   └── layout/          # Header, Footer, Sidebar など
  │
  ├── features/            #
  │   ├── home/            # ホーム画面
  │   │   ├── components/  # この機能専用のコンポーネント
  │   │   ├── hooks/       # この機能専用のフック
  │   │   └── index.tsx    # エントリーポイント
  │   ├── training/        # 育成画面
  │   └── settings/        # 設定画面
  │
  ├── hooks/               # 共通カスタムフック
  ├── utils/               # ユーティリティ関数
  ├── types/               # 共通の型定義
  ├── services/            # API通信
  ├── stores/              # 状態管理（Zustand等）
  ├── assets/              # 画像・フォント等
  ├── App.tsx
  ├── main.tsx
  └── index.css
```

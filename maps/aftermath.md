# Aftermath 1.2

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 表示名 | Aftermath |
| 内部名 | `MP_Aftermath` |
| 版 | 1.2 |
| Portal用ファイル | `Lab_MP_Aftermath_1.2.spatial.json` |
| Godot編集用ファイル | `Lab_MP_Aftermath_1.2.tscn` |
| 拠点 | A～E（5拠点） |

静的検証では、占領エリア5件、出撃地点68件、弾薬箱5件、戦闘エリア1件を確認しています。Portal用 `.spatial.json` について、構文、参照関係、パス識別子の重複がないことも確認済みです。

## 実機検証状態

2.5.0での実機試験は `TEST ENVIRONMENT BLOCKED / SUSPENDED` です。前のマップの戦闘エリア、境界、HQが次のマップへ残るサーバー側のマップローテーション事象により中断しており、Aftermathまたは2.5.0の機能不合格とは判定していません。

## 導入と互換性

`Lab_MP_Aftermath_1.2.spatial.json` を対応するPortal MAPへアップロードし、2.4.0または2.5.0の同じ版の基幹TSとStrings JSONを続けてインポートしてください。`.tscn` はPortalへアップロードしません。過去のSeven Map Packに収録されたAftermath 1.1とは混在させないでください。静的検証の合格は、実機試験の合格を意味しません。

## English summary

Aftermath 1.2 uses internal root `MP_Aftermath` and objectives A–E. Its pair is `Lab_MP_Aftermath_1.2.spatial.json` and `Lab_MP_Aftermath_1.2.tscn`. Do not mix it with Aftermath 1.1 from the historical map pack. v2.5.0 runtime testing is blocked/suspended by the server-side rotation carry-over condition, not a confirmed functional failure.

[マップ一覧](README.md) / [トップページ](../README-JP.md) / [Landing page](../README.md)

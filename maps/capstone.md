# Capstone 1.5

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 表示名 | Capstone |
| 内部名 | `MP_Capstone` |
| 版 | 1.5 |
| Portal用ファイル | `Lab_MP_Capstone_1.5.spatial.json` |
| Godot編集用ファイル | `Lab_MP_Capstone_1.5.tscn` |
| 拠点 | A～F（6拠点） |

静的検証では、占領エリア6件、出撃地点104件、弾薬箱6件、戦闘エリア1件、戦闘エリア外判定3件、CIWS 2件を確認しています。Portal用 `.spatial.json` について、構文、参照関係、パス識別子の重複がないことも確認済みです。

## 実機検証状態

2.5.0では、拠点A～Fの固定チェックリストが実機試験に合格しています。

## SDK 1.4.2での編集上の注意

CIWS 2件に `MaximumEngagementAltitude = 300` が設定されています。このプロパティはSDK 1.4.2で対応していないため、個別差分監査と明示的な判断を行わずに、このマップをGodotで保存または再エクスポートしないでください。配布ファイルをPortalへアップロードする通常の導入では、内容を変更しないでください。

## 導入と互換性

`Lab_MP_Capstone_1.5.spatial.json` を対応するPortal MAPへアップロードし、2.4.0または2.5.0の同じ版の基幹TSとStrings JSONを続けてインポートしてください。`.tscn` はPortalへアップロードしません。過去のSeven Map Packに収録されたCapstone 1.2.2とは混在させないでください。静的検証の合格は、実機試験の合格を意味しません。

## English summary

Capstone 1.5 uses internal root `MP_Capstone`, objectives A–F, and pair files `Lab_MP_Capstone_1.5.spatial.json` / `Lab_MP_Capstone_1.5.tscn`. Its v2.5.0 A–F runtime checklist passed. Two CIWS objects retain `MaximumEngagementAltitude = 300`; SDK 1.4.2 does not support that property, so do not save or re-export this map in Godot without a separate diff audit and explicit decision. Do not mix it with Capstone 1.2.2 from the historical map pack.

[マップ一覧](README.md) / [トップページ](../README-JP.md) / [Landing page](../README.md)

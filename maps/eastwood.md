# Eastwood 1.2

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 表示名 | Eastwood |
| 内部名 | `MP_Eastwood` |
| 版 | 1.2 |
| Portal用ファイル | `Lab_mp_eastwood_1.2.spatial.json` |
| Godot編集用ファイル | `Lab_mp_eastwood_1.2.tscn` |
| 拠点 | A～E（5拠点） |

静的検証では、占領エリア5件、出撃地点58件、弾薬箱6件（C1／C2）、戦闘エリア1件、CIWS 2件を確認しています。Portal用 `.spatial.json` について、構文、参照関係、パス識別子の重複がないことも確認済みです。

## 基準データからの変更 / Changes from the baseline

比較ラベル: **比較に使用したAndy加工用TSCN（SDK 1.4.1収録）**

この比較はSDK 1.4.1収録ディレクトリのAndy加工用TSCNだけを対象とし、別のAndy V12一式は対象にしていません。同一内容のTSCNはSDK 1.4.2にも収録されており、SDK収録ディレクトリには対応する `.spatial.json` がありません。以下はTSCNで確認できる静的構造差であり、実機上の効果や変更意図を示すものではなく、実行時事象を説明するものでもありません。

- Andy基準と同じ5拠点を維持し、占領エリアの一部、車両出撃構成、HQ表示設定、およびチーム切替IDに構造差があります。歩兵出撃地点の件数は同じです。
- 拠点周辺に階段や土のうを追加しています。
- A、B、C1、C2、D、Eに弾薬補給所と、任意で有効化する発光効果を追加しています。CIWSと `MaximumEngagementAltitude` はAndy基準から変更していません。

English: Keeps the baseline's five objectives and infantry-spawn count while changing selected capture-area, vehicle-spawn, HQ-visibility, and team-switch-ID structures. Stairs and sandbags are added near objectives, with ammo stations and optional glow at A, B, C1, C2, D, and E. The CIWS altitude property is unchanged.

### 過去のTOKAI版との比較 / Historical TOKAI comparison

Seven Map PackのEastwood 1.2と現行2.4.0／2.5.0のMAPペアは、ファイル内容が同一です。

The Eastwood 1.2 MAP pair is byte-identical between the historical Seven Map Pack and the current v2.4.0/v2.5.0 packages.

## 実機検証状態

2.5.0での実機試験は `TEST ENVIRONMENT BLOCKED / SUSPENDED` です。前のマップの戦闘エリア、境界、HQが次のマップへ残るサーバー側のマップローテーション事象により中断しており、Eastwoodまたは2.5.0の機能不合格とは判定していません。

## SDK 1.4.2での編集上の注意

CIWS 2件に `MaximumEngagementAltitude = 150` が設定されています。このプロパティはSDK 1.4.2で対応していないため、個別差分監査と明示的な判断を行わずに、このマップをGodotで保存または再エクスポートしないでください。配布ファイルをPortalへアップロードする通常の導入では、内容を変更しないでください。

## 導入と互換性

`Lab_mp_eastwood_1.2.spatial.json` を対応するPortal MAPへアップロードし、2.4.0または2.5.0の同じ版の基幹TSとStrings JSONを続けてインポートしてください。`.tscn` はPortalへアップロードしません。異なるMAPの組や過去パッケージのファイルを混在させないでください。静的検証の合格は、実機試験の合格を意味しません。

## English summary

Eastwood 1.2 uses internal root `MP_Eastwood`, objectives A–E, and pair files `Lab_mp_eastwood_1.2.spatial.json` / `Lab_mp_eastwood_1.2.tscn`. Two CIWS objects retain `MaximumEngagementAltitude = 150`; SDK 1.4.2 does not support that property, so do not save or re-export this map in Godot without a separate diff audit and explicit decision. v2.5.0 runtime testing is blocked/suspended by the server-side rotation carry-over condition, not a confirmed functional failure.

[マップ一覧](README.md) / [トップページ](../README-JP.md) / [Landing page](../README.md)

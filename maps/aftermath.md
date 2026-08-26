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

## 基準データからの変更 / Changes from the baseline

比較ラベル: **比較に使用したAndy加工用TSCN（SDK 1.4.1収録）**

この比較はSDK 1.4.1収録ディレクトリのAndy加工用TSCNだけを対象とし、別のAndy V12一式は対象にしていません。同一内容のTSCNはSDK 1.4.2にも収録されており、SDK収録ディレクトリには対応する `.spatial.json` がありません。以下はTSCNで確認できる静的構造差であり、実機上の効果や変更意図を示すものではなく、実行時事象を説明するものでもありません。

- Andy基準と同じ5拠点を維持し、各拠点に両チーム各1件の歩兵出撃地点を追加しています。
- 各拠点の参照先出撃リスト、占領エリアの一部、および拠点周辺の建築物や遮蔽物に構造差があります。
- 各拠点に弾薬補給所1件と、任意で有効化する発光効果を追加しています。

English: Keeps the baseline's five objectives and adds one infantry spawn per team at each objective. Selected spawn links, capture volumes, and nearby construction or cover objects differ, and each objective gains one ammo station with optional glow.

### 過去のTOKAI版との比較 / Historical TOKAI comparison

Seven Map PackのAftermath 1.1から現行1.2では、A～Eの各拠点にTeam 1とTeam 2の歩兵出撃地点を各1件追加し、各CapturePointの参照先出撃リストを更新しています。正規化した比較では、これ以外の構造差を確認していません。

From historical Aftermath 1.1 to current 1.2, one Team 1 and one Team 2 infantry spawn were added at each objective A–E, with the linked CapturePoint spawn lists updated. The normalized comparison found no other structural delta.

## 実機検証状態

2.5.0での実機試験は `TEST ENVIRONMENT BLOCKED / SUSPENDED` です。前のマップの戦闘エリア、境界、HQが次のマップへ残るサーバー側のマップローテーション事象により中断しており、Aftermathまたは2.5.0の機能不合格とは判定していません。

## 導入と互換性

`Lab_MP_Aftermath_1.2.spatial.json` を対応するPortal MAPへアップロードし、2.4.0または2.5.0の同じ版の基幹TSとStrings JSONを続けてインポートしてください。`.tscn` はPortalへアップロードしません。過去のSeven Map Packに収録されたAftermath 1.1とは混在させないでください。静的検証の合格は、実機試験の合格を意味しません。

## English summary

Aftermath 1.2 uses internal root `MP_Aftermath` and objectives A–E. Its pair is `Lab_MP_Aftermath_1.2.spatial.json` and `Lab_MP_Aftermath_1.2.tscn`. Do not mix it with Aftermath 1.1 from the historical map pack. v2.5.0 runtime testing is blocked/suspended by the server-side rotation carry-over condition, not a confirmed functional failure.

[マップ一覧](README.md) / [トップページ](../README-JP.md) / [Landing page](../README.md)

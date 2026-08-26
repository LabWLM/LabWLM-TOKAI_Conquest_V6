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

## 基準データからの変更 / Changes from the baseline

比較ラベル: **比較に使用したAndy加工用TSCN（SDK 1.4.1収録）**

この比較はSDK 1.4.1収録ディレクトリのAndy加工用TSCNだけを対象とし、別のAndy V12一式は対象にしていません。同一内容のTSCNはSDK 1.4.2にも収録されており、SDK収録ディレクトリには対応する `.spatial.json` がありません。以下はTSCNで確認できる静的構造差であり、実機上の効果や変更意図を示すものではなく、実行時事象を説明するものでもありません。

- Andy基準と同じ6拠点を維持し、各拠点の歩兵出撃配置と参照先出撃リストを拡張しています。一方、車両出撃地点は4件少なくなっています。
- 占領エリアの一部、戦闘エリアと航空エリアの高さ、CIWS防護エリアのグループ、参照、プロパティ、および一部の遮蔽物や障害物に構造差があります。
- 各拠点に弾薬補給所1件と、任意で有効化する発光効果を追加しています。CIWSの `MaximumEngagementAltitude` はAndy基準から継承した値であり、TOKAIによる追加ではありません。

English: Keeps the baseline's six objectives while expanding objective infantry spawns and links, with four fewer vehicle spawners. Selected capture, combat, air-area, stationary-AA protection, cover, and obstacle structures differ. Each objective gains one ammo station with optional glow; `MaximumEngagementAltitude` is inherited from the baseline.

### 過去のTOKAI版との比較 / Historical TOKAI comparison

Seven Map PackのCapstone 1.2.2から現行1.5では、A～Fの各拠点にTeam 1とTeam 2の歩兵出撃地点を各4件追加し、参照先出撃リストを更新しています。さらに、CIWS防護エリア2件の高さと、一部のオブジェクト2件の変換値を変更しています。`MaximumEngagementAltitude` 自体は変更していません。

From historical Capstone 1.2.2 to current 1.5, four Team 1 and four Team 2 infantry spawns were added at each objective A–F and the linked spawn lists were updated. Two stationary-AA protection-volume heights and two prop transforms also changed; `MaximumEngagementAltitude` itself did not.

## 実機検証状態

2.5.0では、拠点A～Fの固定チェックリストが実機試験に合格しています。

## SDK 1.4.2での編集上の注意

CIWS 2件に `MaximumEngagementAltitude = 300` が設定されています。このプロパティはSDK 1.4.2で対応していないため、個別差分監査と明示的な判断を行わずに、このマップをGodotで保存または再エクスポートしないでください。配布ファイルをPortalへアップロードする通常の導入では、内容を変更しないでください。

## 導入と互換性

`Lab_MP_Capstone_1.5.spatial.json` を対応するPortal MAPへアップロードし、2.4.0または2.5.0の同じ版の基幹TSとStrings JSONを続けてインポートしてください。`.tscn` はPortalへアップロードしません。過去のSeven Map Packに収録されたCapstone 1.2.2とは混在させないでください。静的検証の合格は、実機試験の合格を意味しません。

## English summary

Capstone 1.5 uses internal root `MP_Capstone`, objectives A–F, and pair files `Lab_MP_Capstone_1.5.spatial.json` / `Lab_MP_Capstone_1.5.tscn`. Its v2.5.0 A–F runtime checklist passed. Two CIWS objects retain `MaximumEngagementAltitude = 300`; SDK 1.4.2 does not support that property, so do not save or re-export this map in Godot without a separate diff audit and explicit decision. Do not mix it with Capstone 1.2.2 from the historical map pack.

[マップ一覧](README.md) / [トップページ](../README-JP.md) / [Landing page](../README.md)

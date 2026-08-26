# Iberian（イベリア攻勢） 1.2

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 表示名 | Iberian（イベリア攻勢） |
| 内部名 | `MP_Battery` |
| 版 | 1.2 |
| Portal用ファイル | `Lab_MP_Iberian_1.2.spatial.json` |
| Godot編集用ファイル | `Lab_MP_Iberian_1.2.tscn` |
| 拠点 | A～E（5拠点） |

静的検証では、占領エリア5件、出撃地点58件、弾薬箱5件、戦闘エリア1件を確認しています。Portal用 `.spatial.json` について、構文、参照関係、パス識別子の重複がないことも確認済みです。

## 基準データからの変更 / Changes from the baseline

比較ラベル: **比較に使用したAndy加工用TSCN（SDK 1.4.1収録）**

この比較はSDK 1.4.1収録ディレクトリのAndy加工用TSCNだけを対象とし、別のAndy V12一式は対象にしていません。同一内容のTSCNはSDK 1.4.2にも収録されており、SDK収録ディレクトリには対応する `.spatial.json` がありません。以下はTSCNで確認できる静的構造差であり、実機上の効果や変更意図を示すものではなく、実行時事象を説明するものでもありません。

- Andy基準と同じ5拠点を維持し、占領エリアの一部と戦闘エリアのポリゴンに構造差があります。歩兵および車両の出撃地点の種別件数は同じです。
- 拠点周辺に壁、障害物、基礎、土のうなどを追加しています。
- 各拠点に弾薬補給所1件と、任意で有効化する発光効果を追加しています。

English: Keeps the baseline's five objectives and infantry/vehicle spawner type counts while changing selected capture-area and combat-area structures. Walls, barriers, foundations, sandbags, and other cover are added around objectives, together with one ammo station and optional glow per objective.

### 過去のTOKAI版との比較 / Historical TOKAI comparison

Seven Map PackのIberian 1.2と現行2.4.0／2.5.0のMAPペアは、ファイル内容が同一です。

The Iberian 1.2 MAP pair is byte-identical between the historical Seven Map Pack and the current v2.4.0/v2.5.0 packages.

## 実機検証状態（2.5.0）

Iberianは実機試験に合格しています（収録拠点はA～E）。

## 導入と互換性

`Lab_MP_Iberian_1.2.spatial.json` を対応するPortal MAPへアップロードし、2.4.0または2.5.0の同じ版の基幹TSとStrings JSONを続けてインポートしてください。`.tscn` はPortalへアップロードしません。異なるMAPの組や過去パッケージのファイルを混在させないでください。静的検証の合格は、実機試験の合格を意味しません。

## English summary

Iberian (Iberian Offensive) 1.2 uses internal root `MP_Battery` and objectives A–E. Its pair is `Lab_MP_Iberian_1.2.spatial.json` and `Lab_MP_Iberian_1.2.tscn`. Iberian passed runtime testing (the included objectives are A–E).

[マップ一覧](README.md) / [トップページ](../README-JP.md) / [Landing page](../README.md)

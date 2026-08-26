# Abbasid 2.2.3

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 表示名 | Abbasid |
| 内部名 | `MP_Abbasid` |
| 版 | 2.2.3 |
| Portal用ファイル | `Lab_MP_Abbasid_2.2.3.spatial.json` |
| Godot編集用ファイル | `Lab_MP_Abbasid_2.2.3.tscn` |
| 拠点 | A～E（5拠点） |

静的検証では、占領エリア5件、出撃地点66件、弾薬箱5件、戦闘エリア1件を確認しています。Portal用 `.spatial.json` について、構文、参照関係、パス識別子の重複がないことも確認済みです。

## 基準データからの変更 / Changes from the baseline

比較ラベル: **比較に使用したAndy加工用TSCN（SDK 1.4.1収録）**

この比較はSDK 1.4.1収録ディレクトリのAndy加工用TSCNだけを対象とし、別のAndy V12一式は対象にしていません。同一内容のTSCNはSDK 1.4.2にも収録されており、SDK収録ディレクトリには対応する `.spatial.json` がありません。以下はTSCNで確認できる静的構造差であり、実機上の効果や変更意図を示すものではなく、実行時事象を説明するものでもありません。

- Andy基準と同じ5拠点を維持しつつ、HQの歩兵出撃地点を8件追加しています。
- 車両出撃構成、拠点の出撃距離設定、HQ出撃配置、代替AI出撃の参照、チーム切替ID、および戦闘境界の高さ設定の一部に構造差があります。
- 各拠点に弾薬補給所1件と、任意で有効化する発光効果を追加しています。

English: Keeps the baseline's five objectives, adds eight HQ infantry spawn points, and changes selected vehicle-spawn, objective-distance, HQ-spawn, alternate-AI-link, team-switch-ID, and boundary-height structures. Each objective also gains one ammo station with optional glow.

### 過去のTOKAI版との比較 / Historical TOKAI comparison

Seven Map PackのAbbasid 2.2.3と現行2.4.0／2.5.0のMAPペアは、ファイル内容が同一です。

The Abbasid 2.2.3 MAP pair is byte-identical between the historical Seven Map Pack and the current v2.4.0/v2.5.0 packages.

## 実機検証状態

2.5.0での実機試験は `TEST ENVIRONMENT BLOCKED / SUSPENDED` です。前のマップの戦闘エリア、境界、HQが次のマップへ残るサーバー側のマップローテーション事象により中断しており、Abbasidまたは2.5.0の機能不合格とは判定していません。

## 導入と互換性

`Lab_MP_Abbasid_2.2.3.spatial.json` を対応するPortal MAPへアップロードし、2.4.0または2.5.0の同じ版の基幹TSとStrings JSONを続けてインポートしてください。`.tscn` はPortalへアップロードしません。異なるMAPの組や過去パッケージのファイルを混在させないでください。静的検証の合格は、実機試験の合格を意味しません。

## English summary

Abbasid 2.2.3 uses internal root `MP_Abbasid` and objectives A–E. Its pair is `Lab_MP_Abbasid_2.2.3.spatial.json` and `Lab_MP_Abbasid_2.2.3.tscn`. v2.5.0 runtime testing is blocked/suspended by the server-side rotation carry-over condition; this is not a confirmed map or v2.5.0 functional failure.

[マップ一覧](README.md) / [トップページ](../README-JP.md) / [Landing page](../README.md)

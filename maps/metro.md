# Metro 1.0

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 表示名 | Metro |
| 内部名 | `MP_Aftermath_Portal` |
| 版 | 1.0 |
| Portal用ファイル | `Lab_MP_Metro_1.0.spatial.json` |
| Godot編集用ファイル | `Lab_MP_Metro_1.0.tscn` |
| 拠点 | A～C（3拠点） |

静的検証では、占領エリア3件、出撃地点38件、弾薬箱3件、戦闘エリア1件を確認しています。Portal用 `.spatial.json` について、構文、参照関係、パス識別子の重複がないことも確認済みです。

## 基準データからの変更 / Changes from the baseline

比較ラベル: **比較に使用したAndy加工用TSCN（SDK 1.4.1収録）**

この比較はSDK 1.4.1収録ディレクトリのAndy加工用TSCNだけを対象とし、別のAndy V12一式は対象にしていません。同一内容のTSCNはSDK 1.4.2にも収録されており、SDK収録ディレクトリには対応する `.spatial.json` がありません。以下はTSCNで確認できる静的構造差であり、実機上の効果や変更意図を示すものではなく、実行時事象を説明するものでもありません。

- Andy基準と同じ3拠点、出撃地点の構成、および戦闘エリアを維持しています。
- 各拠点に弾薬補給所1件と、任意で有効化する発光効果を追加しています。
- 固定カメラは、比較可能なAndy出力候補が一致しないため、差分として記載していません。

English: Keeps the baseline's three objectives, spawn layout, and combat area while adding one ammo station and optional glow per objective. No fixed-camera change is claimed because the available Andy export candidates disagree.

### 過去のTOKAI版との比較 / Historical TOKAI comparison

Seven Map PackのMetro 1.0と現行2.4.0／2.5.0のMAPペアは、ファイル内容が同一です。

The Metro 1.0 MAP pair is byte-identical between the historical Seven Map Pack and the current v2.4.0/v2.5.0 packages.

## 実機検証状態

2.5.0での実機試験は `TEST ENVIRONMENT BLOCKED / SUSPENDED` です。前のマップの戦闘エリア、境界、HQが次のマップへ残るサーバー側のマップローテーション事象により中断しており、Metroまたは2.5.0の機能不合格とは判定していません。

## 導入と互換性

`Lab_MP_Metro_1.0.spatial.json` を対応するPortal MAPへアップロードし、2.4.0または2.5.0の同じ版の基幹TSとStrings JSONを続けてインポートしてください。`.tscn` はPortalへアップロードしません。異なるMAPの組や過去パッケージのファイルを混在させないでください。静的検証の合格は、実機試験の合格を意味しません。

## English summary

Metro 1.0 uses internal root `MP_Aftermath_Portal` and objectives A–C. Its pair is `Lab_MP_Metro_1.0.spatial.json` and `Lab_MP_Metro_1.0.tscn`. v2.5.0 runtime testing is blocked/suspended by the server-side rotation carry-over condition; this is not a confirmed map or v2.5.0 functional failure.

[マップ一覧](README.md) / [トップページ](../README-JP.md) / [Landing page](../README.md)

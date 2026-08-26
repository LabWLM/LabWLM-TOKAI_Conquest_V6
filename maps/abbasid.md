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

## 実機検証状態

2.5.0での実機試験は `TEST ENVIRONMENT BLOCKED / SUSPENDED` です。前のマップの戦闘エリア、境界、HQが次のマップへ残るサーバー側のマップローテーション事象により中断しており、Abbasidまたは2.5.0の機能不合格とは判定していません。

## 導入と互換性

`Lab_MP_Abbasid_2.2.3.spatial.json` を対応するPortal MAPへアップロードし、2.4.0または2.5.0の同じ版の基幹TSとStrings JSONを続けてインポートしてください。`.tscn` はPortalへアップロードしません。異なるMAPの組や過去パッケージのファイルを混在させないでください。静的検証の合格は、実機試験の合格を意味しません。

## English summary

Abbasid 2.2.3 uses internal root `MP_Abbasid` and objectives A–E. Its pair is `Lab_MP_Abbasid_2.2.3.spatial.json` and `Lab_MP_Abbasid_2.2.3.tscn`. v2.5.0 runtime testing is blocked/suspended by the server-side rotation carry-over condition; this is not a confirmed map or v2.5.0 functional failure.

[マップ一覧](README.md) / [トップページ](../README-JP.md) / [Landing page](../README.md)

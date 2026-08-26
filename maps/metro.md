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

## 実機検証状態

2.5.0での実機試験は `TEST ENVIRONMENT BLOCKED / SUSPENDED` です。前のマップの戦闘エリア、境界、HQが次のマップへ残るサーバー側のマップローテーション事象により中断しており、Metroまたは2.5.0の機能不合格とは判定していません。

## 導入と互換性

`Lab_MP_Metro_1.0.spatial.json` を対応するPortal MAPへアップロードし、2.4.0または2.5.0の同じ版の基幹TSとStrings JSONを続けてインポートしてください。`.tscn` はPortalへアップロードしません。異なるMAPの組や過去パッケージのファイルを混在させないでください。静的検証の合格は、実機試験の合格を意味しません。

## English summary

Metro 1.0 uses internal root `MP_Aftermath_Portal` and objectives A–C. Its pair is `Lab_MP_Metro_1.0.spatial.json` and `Lab_MP_Metro_1.0.tscn`. v2.5.0 runtime testing is blocked/suspended by the server-side rotation carry-over condition; this is not a confirmed map or v2.5.0 functional failure.

[マップ一覧](README.md) / [トップページ](../README-JP.md) / [Landing page](../README.md)
